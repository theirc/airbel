import React from "react"

const PublicationListItem = (publication) => {
  const BackgroundImage = {
    backgroundImage: `url(` + publication.publication.image + `)`,
  }
  return (
    <>
      <div className="row publication-row no-gutters bg-light border-green">
        <div className="col-md-5 col-lg-4">
          <div class="bg-image aspect-1x1 mt-md-3 ml-md-3 mt-lg-0 ml-lg-0" style={BackgroundImage}></div>
        </div>
        <div className="col-lg-8">
          <div className="p-3 py-lg-2 px-lg-5">
            <p className="mb-0"><em>{publication.publication.focuses}</em></p>
            <h3>{ publication.publication.title }</h3>
            <p><em>{ publication.publication.date_range } | { publication.publication.location }</em></p>
            <p><small>{ publication.publication.description }</small></p>
          </div>
        </div>
        <a href={ publication.publication.download_url } target="_blank" className="btn btn-dark">Find out more</a>
      </div>
    </>
  )
}

export default PublicationListItem

