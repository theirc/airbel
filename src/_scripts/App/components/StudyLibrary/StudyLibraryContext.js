import React, { useState, useEffect } from 'react';
import axios from 'axios'
// import { objectToArray } from '../../common/utils/helpers';

const StudyLibraryContext = React.createContext([{}, () => { }]);

const StudyLibraryProvider = (props) => {
  const [state, setState] = useState({
    studies: [],
    filteredStudies: [],
    isFiltered: false,
    filterString: '',
    filters: {
      showOnlyEvergreen: false,
      regions: [],
      publicationTypes: [],
      focus: ""
    }
  });

  useEffect(async () => {
    const studies = await axios('/data/studies.json')
    const sortedStudies = studies.data.sort((a, b) => (a.endDate && a.endDate > b.endDate) ? 1 : (a.endDate === b.endDate) ? ((a.startDate && a.startDate > b.startDate) ? 1 : -1) : -1)

    setState({ ...state, studies: sortedStudies.reverse(), filteredStudies: studies.data })
  }, [])

  return (
    <StudyLibraryContext.Provider value={[state, setState]}>
      {props.children}
    </StudyLibraryContext.Provider>
  );
}

export { StudyLibraryContext, StudyLibraryProvider };


