import './ActivitiesPage.css';
import React, { Component } from 'react';
import icon from './location-icon.png'

class ActivitiesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [
        {
          src:'activityImages/schenley.jfif',
          title:'Hiking',
          location:'Schenley Park',
          coords:[40.4367, -79.9448],
          description:'Spend time at the remarkable Phipps Conservatory, enjoy lunch and a concert at the Schenley Park Café and Visitor Center!',
          width:200,
          data: '{ "title": "Hiking", "duration": "02:00" }'
        },
        {
          src:'activityImages/food_tour.jpg',
          title:"Pittsburgh Food Tour",
          location:'Strip District',
          coords:[40.4534, -79.9807],
          description:"Enjoy a historic narrative of the area along with a sampling of cuisine from some of Pittsburgh's best small local businesses and eateries.",
          width:200,
          data: '{ "title": "Pittsburgh Food Tour", "duration": "02:00" }'
        },
        {
          src:'activityImages/carnegie_science_center.jpg',
          title:"Carnegie Science Center",
          location:'One Allegheny Ave. Pittsburgh',
          coords:[40.4457, -80.0182],
          description:"Visit Pittsburgh's best attraction and the most-visited museum, with four floors of interactive exhibits.",
          width:200,
          data: '{ "title": "Carnegie Science Center", "duration": "02:00" }'
        },
        {
          src:'activityImages/duquesne.jpg',
          title:"Duquesne Incline",
          location:'1197 W. Carson St. Pittsburgh',
          coords:[40.4399, -80.0176],
          description:"Enjoy a spectacular panorama of Pittsburgh and its three rivers. Ride to the incline's Observation Deck in the 145-year-old Incline car",
          width:200,
          data: '{ "title": "Duquesne Incline", "duration": "02:00" }'
        },
        {
          src:'activityImages/clipper.jpg',
          title:"Gateway Clipper Fleet",
          location:'350 W. Station Square Dr. Pittsburgh',
          coords:[40.4354, -80.0079],
          description:"We live in a beautiful city and there’s no better way to see her than aboard a Gateway Clipper Riverboat.",
          width:200,
          data: '{ "title": "Gateway Clipper Fleet", "duration": "02:00" }'
        },
        {
          src:'activityImages/carnegie_natural_history.jpg',
          title:"Natural History Museum",
          location:'4400 Forbes Ave. Pittsburgh',
          coords:[40.4433, -79.9500],
          description:"Carnegie Museum of Natural History maintains, preserves, and interprets an extraordinary collection of artifacts, objects, and scientific specimens used to broaden understanding of evolution, conservation, and biodiversity.",
          width:200,
          data: '{ "title": "Natural History Museum", "duration": "02:00" }'
        }
        
      ],
      currentActivity:0,
      likedActivities:[],
      dislikedActivities:[],
    }
  }
  componentDidMount = () => {
    localStorage.setItem("likedActivities", JSON.stringify(this.state.likedActivities));
    localStorage.setItem("activities", JSON.stringify(this.state.activities));
  }
  likeActivity  = () => {
    let newActivity = (this.state.currentActivity + 1)%this.state.activities.length
    while (this.state.likedActivities.includes(newActivity)){
      newActivity = (newActivity + 1)%this.state.activities.length
    }
    let liked = [...this.state.likedActivities,this.state.currentActivity]
    this.setState(prevState => ({
      ...prevState,
      currentActivity: newActivity,
      likedActivities: liked
    }));
    localStorage.setItem("likedActivities", JSON.stringify(liked));
  }
  dislikeActivity  = () => {
    let newActivity = (this.state.currentActivity + 1)%this.state.activities.length
    while (this.state.likedActivities.includes(newActivity)){
      newActivity = (newActivity + 1)%this.state.activities.length
    }
    let disliked = [...this.state.dislikedActivities,this.state.currentActivity]
    this.setState(prevState => ({
      ...prevState,
      currentActivity: newActivity,
      dislikedActivities: disliked
    }));
  }
  render(){
    return (
      <div className="ActivitiesPage">
        <div className='header'>
          <h1 className='title'>Activated</h1>
          <div className='location'>
            <img className="locationIcon" src={icon} width={20} alt="location icon"></img>
            <span className="city">Pittsburgh</span>
          </div>
        </div>
        <br/>
        <div className='activitySelection'>
          <span className="likeIcon"><img src={'activityImages/check.png'} width={200} onClick={this.likeActivity} alt="like"/></span>
          <span className='container'>
            <img className="activityImage" src={this.state.activities[this.state.currentActivity].src} alt={this.state.activities[this.state.currentActivity].title} width={500} height={300}/>
            <div className="top-left"> <h1>{this.state.activities[this.state.currentActivity].title}</h1></div>
            <div className="top-right">
              <img className="locationIcon" src={icon} width={20}></img>
              {this.state.activities[this.state.currentActivity].location}
            </div>
            <div className="centered">{this.state.activities[this.state.currentActivity].description}</div>
          </span>
          <span className="likeIcon"><img src={'activityImages/cross.png'} width={200} onClick={this.dislikeActivity} alt="dislike"/></span>
        </div>
      </div>
    );
  }
}

export default ActivitiesPage;
