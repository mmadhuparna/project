import React, { Component } from 'react';
import AllFlights from './AllFlights';
import FilterOptions from './FilterOptions';
import './Availableflights.css'
import {connect} from "react-redux"
import Sidebar from 'react-sidebar';
import Sort from './sort';
import Searchtitle from './SearchTitle'

class AvailableFlights extends Component{
  constructor(){
    super();
    this.state={sidebarOpen: false};
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this); 
    }
    
    

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
      
    }
  

  render(){
    var sidebarContent = <div className="sidebar"><FilterOptions /></div>;
     return (
      <div >
      
      {this.props.fetched?(
          <div className="container-fluid searchflght">
          <div className="row">
          <div className ="col-md-12 details">
          <div className="row">
          <div className="col-md-3">{/*this.props.flights.length*/}
         <center> <h6 className="booking-title">{this.props.tripsDetails.from+" to " +this.props.tripsDetails.to}
         
          </h6></center> </div>
          <div className="col-md-6">
          <center><p>Departure</p><br/>
           <p>{this.props.tripsDetails.date}</p></center></div>
          </div></div></div>
          <div className="row">
          <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
               
            </Sidebar>
          
          
          <div className="col-md-3" id="Filters">
          <FilterOptions />
          </div>
          
            <div className="col-md-9 col-sm-12 col-xs-12 searchdet">
            <div className="row rowleft">
            <span><button className="shrinkFilter btn btn-info " onClick={(e) => {let ps = this.state.sidebarOpen;this.setState({sidebarOpen:!ps})}}>FILTER</button></span>
              <Sort />
</div>
               <Searchtitle/>
              <AllFlights />
            </div>
          </div>
          </div>
         
          )

          :(<h3>Loading...</h3>)
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
           airports: state.airport_details.airportsname,
           flights: state.available_flight.flights,
           tripsDetails: state.available_flight.trips,
           fetched: state.available_flight.fetched
         }
}

export default connect(mapStateToProps)(AvailableFlights)