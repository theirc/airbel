import React from "react"
import PublicationListItem from "./PublicationListItem"

const PublicationList = ({publications}) => {
  return (
    <>
      <div className="row">
        {publications && publications.map(publication => (
          <>
            <PublicationListItem publication={publication} />
          </>
        ))}
      </div>
    </>
  )
}

export default PublicationList