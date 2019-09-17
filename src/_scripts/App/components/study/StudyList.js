import React from "react"
import StudyListItem from "./StudyListItem"

const StudyList = ({studies}) => {
  return (
    <>
      <div className="row">
        {studies && studies.map(study => (
          <>
            <StudyListItem study={study} />
          </>
        ))}
      </div>
    </>
  )
}

export default StudyList