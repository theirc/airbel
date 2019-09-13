import React from "react"
import PublicationListItem from "./PublicationListItem"


const PublicationList = ({publications}) => {
  return (
    <>
      {publications  && publications.map(publication => (
        <>
          <PublicationListItem publication={publication}/>
        </>
      ))}
    </>
  )
}

export default PublicationList