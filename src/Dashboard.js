import './Dashboard.css';
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import icon from './location-icon.png'
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";

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
      likedActivities:[],
      myEvents:[]
    }
  }
  makeDraggable = (e) => {
    let draggableEl = e.target;
    console.log(draggableEl)
    new Draggable(draggableEl, {
      itemSelector: '.likedContainer'
    });
  }

  eventClick = (eventClick) => {
    Alert.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close"
    }).then(result => {
      if (result.value) {
        eventClick.event.remove(); // It will remove event from the calendar
        Alert.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };

  render(){
    return (
      <div className="Dashboard">
        <div className='header'>
          <h1>Dashboard</h1>
        </div>
        <div className='containerLike'>
        <span className='likedActivities'>
          <h3>Liked Activities</h3>
          <span className='likedDisplay'>
          {this.props.activities.map(
                    ({src,title,location,coords,description, data},idx) => {
                        return (<div className='likedContainer' data-event={data} onClick={this.makeDraggable}> <img className='images' id="image"
                        src={src} width={200}/>
                        <div className="title-location"> 
                        <h4>{title}</h4>
                        <img className="locationIcon" src={icon} width={20} alt={title}></img>
                        {location}
                        </div> </div>)
                    }
                  )}
          </span>
        </span>
        <span className="calendar"><FullCalendar height={"500px"}
        plugins={[ timeGridPlugin ]}
        initialView="timeGridDay"
        eventClick={this.eventClick}
      />
      </span>
      </div>
      </div>
    );
  }
}

export default Dashboard;
