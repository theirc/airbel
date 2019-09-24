import { useContext, useEffect } from 'react'
import { objectToArray } from '../utils/helpers'

const useFilter = (context) => {
  const [state, setState] = useContext(context)

  useEffect(() => {
    if (state.filteredStudies.length === 0) {
      // console.log("No matching studies")
    } else {
      // console.log("Filtered Studies", state.filteredStudies)
    }
  }, [state.filteredStudies]);

  useEffect(() => {
    if (state.filters.length === 0) {
      // Show all studies
      setState(state => ({ ...state, filteredStudies: state.studies }))

    } else {
      // Show only matching studies
      showMatches()
    }
  }, [state.filters]);


  function showMatches() {
    const matches = state.studies.filter((study) => {
      return matchFocus(study) && matchRegions(study) && matchPublicationTypes(study)
      // return matchFocus(study) && matchPublicationTypes(study) && matchRegions(study)
    })
    setState(state => ({ ...state, filteredStudies: matches }))
    setState(state => ({ ...state, isFiltered: !state.isFiltered }))
  }

  function applyFilters(filters) {
    setState(state => ({ ...state, filters: filters }))
  }


  const matchRegions = (study) => {
    if (!state.filters.regions) return true
    if (!study.regions) return false

    let match = false
    if (study.regions.length > 0 && state.filters.regions.length > 0) {
      const filters = objectToArray(state.filters.regions).map(region => region['label'])
      match = study.regions.filter(region => filters.includes(region)).length > 0 ? true : false
    }
    return match
  }

  const matchPublicationTypes = (study) => {
    if (!state.filters.publicationTypes) return true
    if (!study.publicationTypes) return false


    let match = false
    if (study.publicationTypes.length > 0 && state.filters.publicationTypes.length > 0) {
      const filters = objectToArray(state.filters.publicationTypes).map(publication => publication['value'])
      match = study.publicationTypes.filter(publication => filters.includes(publication)).length > 0 ? true : false
    }
    return match
  }

  const matchFocus = (study) => {
    if (!state.filters.focus) return true
    if (!study.focus) return false

    let match = false
    if (study.focus && state.filters.focus) {
      match = state.filters.focus.toLowerCase() === study.focus.toLowerCase() ? true : false
    }
    return match
  }



  return {
    applyFilters,
    isFiltered: state.isFiltered,
  }
}

export default useFilter