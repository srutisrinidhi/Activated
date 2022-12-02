import ActivitiesPage from './ActivitiesPage';
import Dashboard from './Dashboard';
import Maps from './Map';
import './App.css';
import React, { Component } from 'react';
import NavBar from './NavBar';
import icon from './location-icon.png'


const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activitiesVisible: 'block',
      activitiesColor:'#006B83',
      dashboardVisible: 'none',
      dashboardColor:'white',
      mapVisible: 'none',
      mapColor:'white',
      likedActivities: [],
      activities:[],
      likedActivityList:[]
    }
  }
  showActivitiesPage = () => {
    if (this.state.activitiesVisible == 'none'){
      this.setState(prevState => ({
        ...prevState,
        activitiesVisible: 'block',
        activitiesColor:'#006B83',
        dashboardVisible: 'none',
        dashboardColor:'white',
        mapVisible: 'none',
        mapColor:'white'
      }));
    }
  }
  showDashboardPage = () => {
      let liked = JSON.parse(localStorage.getItem("likedActivities"));
      let act = JSON.parse(localStorage.getItem("activities"));
      let likeList = []
      liked.forEach(item =>
        likeList.push(act[item])
      )
      this.setState(prevState => ({
        ...prevState,
        dashboardVisible: 'block',
        dashboardColor:'#006B83',
        activitiesVisible: 'none',
        activitiesColor:'white',
        mapVisible: 'none',
        mapColor:'white',
        likedActivities: liked,
        activities: act,
        likedActivityList:likeList
      }));
      console.log(liked)
  }
  showMapPage = () => {
    let liked = JSON.parse(localStorage.getItem("likedActivities"));
    let act = JSON.parse(localStorage.getItem("activities"));
    let likeList = []
    liked.forEach(item =>
      likeList.push(act[item])
    )
    console.log(likeList)
    if (this.state.mapVisible == 'none'){
      this.setState(prevState => ({
        ...prevState,
        mapVisible: 'block',
        mapColor:'#006B83',
        dashboardVisible: 'none',
        dashboardColor:'white',
        activitiesVisible: 'none',
        activitiesColor:'white',
        likedActivities: liked,
        activities: act,
        likedActivityList:likeList
      }));
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar clickedActivities={this.showActivitiesPage} clickedDashboard={this.showDashboardPage} clickedMap={this.showMapPage} activitiesColor={this.state.activitiesColor} dashboardColor={this.state.dashboardColor} mapColor={this.state.mapColor}></NavBar>
        <div style={{display:this.state.activitiesVisible}}><ActivitiesPage></ActivitiesPage></div>
        <div className='dashboardWrapper' style={{display:this.state.dashboardVisible}}><div className='dashboards'><Dashboard activities={this.state.likedActivityList}></Dashboard></div>
        </div>
        <div style={{display:this.state.mapVisible}}><Maps activities={this.state.likedActivityList} ></Maps></div>
      </div>
    );
  }
}

export default App;
