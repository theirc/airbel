import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { objectToArray } from '../../common/utils/helpers'

const TeamContext = React.createContext([{}, () => { }]);

const TeamProvider = (props) => {
  const [state, setState] = useState({
    team: [],
    filteredTeam: [],
    visibleTeam: [],
    chooseRandomTeam: false,
    isFiltered: false,
    filterString: '',
    selectedTeamMember: null
  });

  useEffect(async () => {
    const team = await axios('/data/team.json')
    setState({ ...state, team: team.data, filteredTeam: team.data, chooseRandomTeam: true })

  }, [])

  useEffect(() => {
    if (state.chooseRandomTeam) {
      const randomTeam = getRandomTeam()
      setState(state => ({ ...state, visibleTeam: randomTeam, chooseRandomTeam: false }))
    }
  }, [state.chooseRandomTeam])

  useEffect(() => {
    if (state.filterString === '') {
      // Show all team with headshots
      const teamWithHeadshots = state.team.filter(teamMember => {
        return teamMember.image !== '' ? true : false
      })

      setState(state => ({ ...state, filteredTeam: teamWithHeadshots }))

    } else {
      // Show only matching team members
      filterByString()
    }
  }, [state.filterString]);


  function filterByString() {
    let matches = state.team.filter((teamMember) => {
      if (state.filterString.value === 'all') {
        return true
      }
      if (state.filterString.value === 'leadership') {
        return teamMember.leadership
      } else {
        const expertiseAreas = objectToArray(teamMember.expertise_areas).map(area => area['slug'])

        return expertiseAreas.includes(state.filterString.value)
      }

    })

    setState(state => ({ ...state, filteredTeam: matches, chooseRandomTeam: true }))
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


