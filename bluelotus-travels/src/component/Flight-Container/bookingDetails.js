import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookingDetails extends Component{
    
    
     
    render(){
        
        return (
          <div className="booking">
          <div className="col-md-6 no-padding vr">
          <div id="Fligh_Details" className="booking-item-details">
               <div className="row">
                 <div className="col-md-8">
                   <p>Return Flight Details</p>
                   <hr />
                   <h5 className="list-title">{this.props.tripsDetails.from} to {this.props.tripsDetails.to}</h5>
                   <ul className="list">
                     <li>{this.props.carrier} - {this.props.carrier_no}</li>
                     <li>Economy / Coach Class ( M ), {this.props.aircraft}</li>
                     <li>Departure {this.props.departure_time}  ||||  Arrive {this.props.arrival_time}
                     </li>
                     <li>Duration: {this.props.duration}</li>
                   </ul>
                   <hr />
                   <p>Total trip time: {this.props.duration}</p>
                 </div>
               </div>
             </div>
          </div>
          <div className="col-md-6 no-padding">
          
          </div>
          </div>
        )
      }
    }
    function mapStateToProps(state) {
        return {
                 airports: state.airport_details.airportsname,
                 
                 flights: state.available_flight.flights,
                 returnflights: state.available_flight.retflights,
                 tripsDetails: state.available_flight.trips,
                 rtripsDetails: state.available_flight.rtrips,
                 
                 
               }
            }
            export default connect(mapStateToProps)(BookingDetails)