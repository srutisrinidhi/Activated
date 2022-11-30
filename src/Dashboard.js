import './Dashboard.css';

import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [
        {
          src:'activityImages/schenley.jfif',
          title:'Hiking',
          location:'Schenley Park',
          description:'blah blah'
        },
        {
          src:'activityImages/food_tour.jpg',
          title:"'BURGH BITS AND BITES FOOD TOUR",
          location:'Strip District',
          description:"Enjoy a historic narrative of the area along with a sampling of cuisine from some of Pittsburgh's best small local businesses and eateries."
        },
        {
          src:'activityImages/carnegie_science_center.jpg',
          title:"'Carnegie Science Center",
          location:'One Allegheny Ave. Pittsburgh',
          description:"Visit Pittsburgh's best attraction and the most-visited museum, with four floors of interactive exhibits."
        },
        {
          src:'activityImages/duquesne.jpg',
          title:"DUQUESNE INCLINE",
          location:'1197 W. Carson St. Pittsburgh',
          description:"Enjoy a spectacular panorama of Pittsburgh and its three rivers. Ride to the incline's Observation Deck in the 145-year-old Incline car"
        },
        {
          src:'activityImages/clipper.jpg',
          title:"GATEWAY CLIPPER FLEET",
          location:'350 W. Station Square Dr. Pittsburgh',
          description:"We live in a beautiful city and there’s no better way to see her than aboard a Gateway Clipper Riverboat."
        },
        {
          src:'activityImages/carnegie_natural_history.jpg',
          title:"CARNEGIE MUSEUM OF NATURAL HISTORY",
          location:'4400 Forbes Ave. Pittsburgh',
          description:"Carnegie Museum of Natural History, one of the four Carnegie Museums of Pittsburgh, is among the top natural history museums in the country. It maintains, preserves, and interprets an extraordinary collection of artifacts, objects, and scientific specimens used to broaden understanding of evolution, conservation, and biodiversity."
        }
      ],
      likedActivities:[]
    }
  }

  render(){
    return (
      <div className="Dashboard">
        <div className='header'>
          <h1>Dashboard</h1>
        </div>
        <div className='likedActivities'>
          <h3>Liked Activities</h3>
        </div>
      </div>
    );
  }
}

export default Dashboard;
