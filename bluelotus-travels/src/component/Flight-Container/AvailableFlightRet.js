import React, { Component } from 'react';
import AllFlightsReturn from './AllFlightsReturn';
import FilterOptions from './FilterOptions';
import './Availableflights.css'
import {connect} from "react-redux"
import Sidebar from 'react-sidebar';
import Sort from './sort';
import Searchtitle from './SearchTitle';
//import BookingDetails from './bookingDetails';

class AvailableFlightsRet extends Component{
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
          <div className="col-md-3 vr">{/*this.props.flights.length*/}
         <center> <h3 className="booking-title">{this.props.tripsRet.o_city} to {this.props.tripsRet.d_city}
         
          </h3></center> </div>
        <div className="col-md-6 vr">
          <div className="row">
           <div className="col-md-6">
             <center><h5>Departure</h5>
             <p>{this.props.tripsRet.date}</p>
             </center>
           </div>

           <div className="col-md-6">
             <center><h5>Arrival</h5>
             <p>{this.props.tripsRet.retdate}</p>
             </center>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
          
          <div className="row">
          <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
               
          </Sidebar>
          
          <div className="col-md-3" id="Filters">
          <FilterOptions  />
          </div>
          
          <div className="col-md-9 col-sm-12 searchdet">
           <div className="row rowleft">
            <span><button className="shrinkFilter btn btn-info " onClick={(e) => {let ps = this.state.sidebarOpen;this.setState({sidebarOpen:!ps})}}>FILTER</button></span>
              <Sort />
          </div>
              <Searchtitle/>
              <AllFlightsReturn />
            </div>
          </div>
          <div className="row">
          <div className="col-md-12 bg">
          
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
           fetched: state.available_flight.fetched,
           returnflights: state.available_flight.retflights,
           tripsRet: state.available_flight.rtrips,
           rfetched: state.available_flight.fetched
           
         }
}

export default connect(mapStateToProps)(AvailableFlightsRet)