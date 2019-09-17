import React from "react"

const StudyListItem = (study) => {
  const BackgroundImage = {
    backgroundImage: `url(` + study.study.image + `)`,
  }
  return (
    <>
      <div className="row publication-row no-gutters bg-light border-green">
        <div className="col-md-5 col-lg-4">
          <div class="bg-image aspect-1x1 mt-md-3 ml-md-3 mt-lg-0 ml-lg-0" style={BackgroundImage}></div>
        </div>
        <div className="col-lg-8">
          <div className="p-3 py-lg-2 px-lg-5">
            <p className="mb-0"><em>{study.study.focuses}</em></p>
            <h3>{ study.study.title }</h3>
            <p><em>{ study.study.date_range } | { study.study.location }</em></p>
            <p><small>{ study.study.description }</small></p>
          </div>
        </div>
        <a href={ study.study.download_url } target="_blank" className="btn btn-dark">Find out more</a>
      </div>
    </>
  )
}

export default StudyListItem

