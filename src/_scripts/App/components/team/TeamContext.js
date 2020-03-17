import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { objectToArray } from '../../common/utils/helpers'
import { getUrlParam } from '../../helpers'

const TeamContext = React.createContext([{}, () => { }]);

const TeamProvider = (props) => {
  const [state, setState] = useState({
    team: [],
    filteredTeam: [],
    visibleTeam: [],
    chooseRandomTeam: false,
    isFiltered: false,
    filterString: '',
    selectedTeamMember: null,
    urlFilter: ''
  });
  const { history } = window;
  const filterString = getUrlParam(`filterString`) || 'all';


  useEffect(async () => {
    const team = await axios('/data/team.json')
    // Show all team with headshots
    const teamWithHeadshots = team.data.filter(teamMember => {
      return teamMember.image !== '' ? true : false
    })

    const filteredTeam = filterByString({ team: teamWithHeadshots, filterString })

    setState({ ...state, team: team.data, filteredTeam: filteredTeam, chooseRandomTeam: true })

  }, [])

  useEffect(() => {
    if (state.chooseRandomTeam) {
      const randomTeam = getRandomTeam()
      setState(state => ({ ...state, visibleTeam: randomTeam, chooseRandomTeam: false }))
    }
  }, [state.chooseRandomTeam])

  useEffect(() => {
    const { team, filterString } = state
    if (filterString) {
      const filteredTeam = filterByString({ team, filterString })

      history.pushState({}, "", `?filterString=${filterString}`)

      setState({ ...state, filteredTeam, chooseRandomTeam: true })
    }

  }, [state.filterString]);

  function filterByString({ filterString, team }) {
    let filteredTeam = team.filter((teamMember) => {
      if (filterString === 'all') {
        return true
      }
      if (filterString === 'leadership') {
        return teamMember.leadership
      } else {
        const expertiseAreas = objectToArray(teamMember.expertise_areas).map(area => area['slug'])

        return expertiseAreas.includes(filterString)
      }
    })

    return filteredTeam
  }


  function getRandomTeam() {
    const randomTeam = state.filteredTeam.filter(teamMember => {
      return teamMember.image !== '' ? true : false
    }).sort(function (a, b) { return 0.5 - Math.random() })

    const shortList = randomTeam.slice(0, 8)

    return shortList
  }

  return (
    <TeamContext.Provider value={[state, setState]}>
      {props.children}
    </TeamContext.Provider>
  );
}

export { TeamContext, TeamProvider };


