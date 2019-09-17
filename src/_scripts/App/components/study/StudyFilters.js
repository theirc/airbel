import React from "react"

const StudyFilters = () => {
  return (
    <>
      <div className="row align-items-center filters">
        <div className="col-md-6 col-lg-3">
          <div className="content">
            Filter by type
          <div className="dropdown" role="group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                <span active-region-filter>All</span>
                <span className="arrow-down"></span>
              </button>
              <ul className="dropdown-menu" data-filter-group="">
                <li className="dropdown-item">
                  <a className="filter" data-filter="all" data-active-text="" data-mixitup-control>all</a>
                </li>
                <li className="dropdown-item">
                  <a className="filter" data-filter="" data-active-text="" data-mixitup-control>Option One</a>
                </li>
                <li className="dropdown-item">
                  <a className="filter" data-filter="" data-active-text="" data-mixitup-control>Option Two</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="content">
            Filter by focus
          <div className="dropdown" role="group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                <span active-region-filter>All</span>
                <span className="arrow-down"></span>
              </button>
              <ul className="dropdown-menu" data-filter-group="">
                <li className="dropdown-item">
                  <a className="filter" data-filter="all" data-active-text="" data-mixitup-control>all</a>
                </li>
                <li className="dropdown-item">
                  <a className="filter" data-filter="" data-active-text="" data-mixitup-control>Option One</a>
                </li>
                <li className="dropdown-item">
                  <a className="filter" data-filter="" data-active-text="" data-mixitup-control>Option Two</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="content">
            Filter by location
          <div className="dropdown" role="group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                <span active-region-filter>All</span>
                <span className="arrow-down"></span>
              </button>
              <ul className="dropdown-menu" data-filter-group="">
                <li className="dropdown-item">
                  <a className="filter" data-filter="all" data-active-text="" data-mixitup-control>all</a>
                </li>
                <li className="dropdown-item">
                  <a className="filter" data-filter="" data-active-text="" data-mixitup-control>Option One</a>
                </li>
                <li className="dropdown-item">
                  <a className="filter" data-filter="" data-active-text="" data-mixitup-control>Option Two</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="content">
            Filter by year
          <div className="dropdown" role="group">
              <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
                <span active-region-filter>All</span>
                <span className="arrow-down"></span>
              </button>
              <ul className="dropdown-menu" data-filter-group="">
                <li className="dropdown-item">
                  <a className="filter" data-filter="all" data-active-text="" data-mixitup-control>all</a>
                </li>
                <li className="dropdown-item">
                  <a className="filter" data-filter="" data-active-text="" data-mixitup-control>Option One</a>
                </li>
                <li className="dropdown-item">
                  <a className="filter" data-filter="" data-active-text="" data-mixitup-control>Option Two</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="content">
            <div className="form-group">
              <label htmlFor="search" className="sr-only">Search</label>
              <input id="search" className="form-control" type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content">
            <button className="btn btn-dark">Reset Filters</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudyFilters