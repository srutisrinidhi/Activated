import './NavBar.css';

import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="NavBar">
        <span className="browse" style={{color:this.props.activitiesColor}} onClick={()=>this.props.clickedActivities()}> Browse Activities </span>
        <span className="dashboard" style={{color:this.props.dashboardColor}} onClick={()=>this.props.clickedDashboard()}> Dashboard </span>
        <span className="mapNav" style={{color:this.props.mapColor}} onClick={()=>this.props.clickedMap()}> Map </span>
        <hr></hr>
      </div>
    );
  }
}

export default NavBar;
