import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import './Map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import icon from './location-icon.png'

let currentHover = -1

class LocationPin extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" id="pin" onMouseEnter={() => this.props.expand(this.props.index)} onMouseLeave={() => this.props.restore(this.props.index)} />
      </div>
    )
  }
}

  class Map extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentHover: -1,
      }
    }
    expand = (index) => {
      this.setState(prevState => ({
        ...prevState,
        currentHover:index
      }))
    }

    restore = (index) => {
      this.setState(prevState => ({
        ...prevState,
        currentHover:-1
      }))
    }
    render(){
      return (
        <div className="map">
          <div className='header'>
              <h1>Map of Activities</h1>
          </div>
          <div>
          <span className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCtMTXsLwFCbfNGghI5scR53cLrEvHXFmE' }}
              defaultCenter={[40.4406,-79.9959]}
              defaultZoom={12}
            >
              {this.props.activities.map(({src,title,location,coords,description}, idx)=>{
                return(
                  <LocationPin classname="pin" index={idx} expand={this.expand} restore={this.restore}
                    lat={coords[0]}
                    lng={coords[1]}
                  />
                )
              })}
              
            </GoogleMapReact>
            </span>
            <span className='likeDisplay'>
                {this.props.activities.map(
                    ({src,title,location,coords,description},idx) => {
                        return (<div className='likedContainer'> <img className='images' id="image"
                        src={src} width={idx===this.state.currentHover?250:200}/>
                        <div className="title-location"> 
                        <h4>{title}</h4>
                        <img className="locationIcon" src={icon} width={20}></img>
                        {location}
                        </div> </div>)
                    }
                  )}
              </span>

          </div>
        </div>
      )
  }
}

export default Map