import React from "react"
import PublicationFilters from './PublicationFilters'
import PublicationList from './PublicationList'
import {PUBLICATION_DATA} from './data';

const Publication = () => {
  const publications = PUBLICATION_DATA;
  return( 
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>Publication Library</h2>
              </div>
            </div>
          </div>
          <PublicationFilters />
          <div className="row">
            <div className="col-12">
              <div className="content">
                <PublicationList publications={publications} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Publication