import React, { Component } from 'react';
import ReactMapGL, {Marker, Popup, FlyToInterpolator, NavigationControl} from 'react-map-gl';

import axios from 'axios';

import ProjectPin from './project-pin';
import ProjectInfo from './project-info';



const MAPBOX_TOKEN = 'pk.eyJ1Ijoib2N1cG9wIiwiYSI6ImNqa3ZnOTc4cTBicjAzc29iZWNrZHQwa3kifQ.PDkTbHFNjtqvXZTK14eUiw';
const mapStyle = 'mapbox://styles/ocupop/cjmi9o5hdf1fw2rnqfzylmypb';
let PROJECTS = [];

class Map extends Component {
  constructor(props) {
    super(props);

    if(props.project) {
      this.state = { 
        viewport: props.viewport,
        project: props.project,
        popupInfo: null
      }
    } else  {
      this.state = {
        viewport: {
          width: 400,
          height: 400,
          latitude: 34.3360215,
          longitude: 17.5675027,
          zoom: 1,
          bearing: 0,
          pitch: 0,
        },
        project: '',
        popupInfo: null
      };
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
    
    axios.get(`/data/projects.json`)
    .then(res => {
      PROJECTS = res.data;
      if(this.state.project){
        PROJECTS = PROJECTS.filter((project) => project.name == this.state.project);
        console.log('filtered', PROJECTS);
      }
      this.setState({ projects: PROJECTS });
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _onViewportChange = viewport => this.setState({
    viewport: {...this.state.viewport, ...viewport}
  });


  _resize = () => this._onViewportChange({
    width: this.props.width || document.getElementById('Map').clientWidth,
    height: this.props.height || document.getElementById('Map').clientHeight
  });

  _updateViewport = (viewport) => {
    this.setState({viewport});
  }

  _renderProjectMarker = (project, index) => {
    return (
      <Marker key={`marker-${index}`}
        longitude={project.longitude}
        latitude={project.latitude} >
        <ProjectPin size={30} onClick={() => this.setState({popupInfo: project})} />
      </Marker>
    );
  }

  _renderPopup() {
    const {popupInfo} = this.state;

    return popupInfo && (
      <Popup tipSize={3}
        anchor="bottom"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        onClose={() => this.setState({popupInfo: null})} >
        <ProjectInfo info={popupInfo} />
      </Popup>
    );
  }

  _goToViewport = ({longitude, latitude}) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 3000
    });
  };

  render() {
    const {viewport, settings} = this.state;
    
    return (
      <div>
        <ReactMapGL
          {...viewport}
          {...settings}
          onViewportChange={this._onViewportChange}
          mapStyle={mapStyle}
          dragToRotate={false}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          scrollZoom={false}>
          <div style={{position: 'absolute', right: 10, top: 10}}>
            <NavigationControl onViewportChange={this._onViewportChange} />
          </div>

          { PROJECTS.map(this._renderProjectMarker) }

          {/* {this._renderPopup()} */}
        </ReactMapGL>
      </div>
    );
  }
}


export default Map;
