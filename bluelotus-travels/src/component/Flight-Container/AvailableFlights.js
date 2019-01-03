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
          <div className="row ">
          <div className ="col-md-12 details">
          <div className="row ">
          <div className="col-md-3 ">
         <center><h3 className="booking-title">{this.props.tripsDetails.o_city+" to " +this.props.tripsDetails.d_city}
         
          </h3>
          <p className="para">{this.props.flights.length+" Flights Available"} </p>
          </center> </div>
          <div className="col-md-5 ">
          <center><h3>Departure</h3>
           <p className="para">{this.props.tripsDetails.date}</p></center></div>
           <div className="col-md-2">
          <center><h3>Passenger</h3>
           <p className="para">1 adult</p></center></div>
           <div className="col-md-2">
          <center><h3>Class</h3>
           <p className="para">Economy</p></center></div>
          </div></div></div>

          <div className="row">
          {/*
          <Sidebar sidebar={sidebarContent}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}></Sidebar>
          */}
            <div className="col-md-3" id="Filters">
          <FilterOptions />
          
          </div>
          
            <div className="col-md-9 col-sm-12 col-xs-12 searchdet">
            <div className="row rowleft">
            <span><button className="shrinkFilter btn btn-info " onClick={(e) => {let ps = this.state.sidebarOpen;this.setState({sidebarOpen:!ps})}}>FILTER</button></span>
              {/* <Sort />   */}
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