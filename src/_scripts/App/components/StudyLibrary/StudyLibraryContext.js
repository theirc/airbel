import React, { useState, useEffect } from 'react';
import axios from 'axios'
// import { objectToArray } from '../../common/utils/helpers';

const StudyLibraryContext = React.createContext([{}, () => { }]);

const StudyLibraryProvider = (props) => {
  const [state, setState] = useState({
    studies: [],
    filteredStudies: [],
    filters: {
      regions: [],
      publicationsTypes: [],
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


// const matchRegions = ({ regions }) => {
//   let match = filters.regions.length ? false : true;

//   if (regions && regions.length && filters.regions.length > 0) {
//     const studyRegions = objectToArray(regions).map(region => region['label']);
//     match = studyRegions.filter(region => filters.regions.includes(region)).length > 0 ? true : false;
//   }
//   return match
// }
// const matchPublicationTypes = ({ publicationTypes }) => {
//   let match = filters.publicationTypes.length ? false : true;

//   if (publicationTypes && publicationTypes.length && filters.publicationTypes.length > 0) {
//     const studyPublications = objectToArray(publicationTypes).map(publication => publication['value']);
//     match = studyPublications.filter(publication => filters.studyPublications.includes(publication)).length > 0 ? true : false;
//   }
//   return match
// }

// const matchFocus = ({ focus }) => {
//   let match = filters.focus ? false : true;
//   if (focus && filters.focus) {
//     match = filters.focus === focus ? true : false
//   }
//   return match
// }


const filterStudies = () => {

  const matches = studies.filter((study) => {
    console.log(study)
    return matchFocus(study) && matchPublicationTypes(study) && matchRegions(study)
  })

  console.log("MATCHES:", matches)
  // setFilteredStudies(matches)
}