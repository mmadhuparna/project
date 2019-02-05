import React, { Component } from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import './Availableflights.css'

class ShowFlightRet extends Component{
  constructor(){
    super();
    this.state = {display:false}
  }

  handleSelect()
  {
    this.props.dispatch({type: 'ADDED_FALSE'})
    console.log(this.props.id);
    this.props.dispatch({type: 'ADD_CONTACT_FULFIELD',payload: this.props.total});
    
  }

  
  render(){
     return (
      //show flight details
       <ul className="booking-list">
         <li>
           <div className="booking-item-container">
             <div className="booking-item" onClick={() => {let ps = this.state.display;ps=!ps;this.setState({display:ps});console.log(this.state.display);}}>
               <div className="row ">
                 <div className="col-md-2 col-sm-2 col-xs-2">
                   <div className="booking-item-airline-logo">
                   <center><p>{this.props.carrier}</p>
                     <p className="nbold">{this.props.flightcode}</p></center>
                   </div>
                 </div>
                 <div className="col-md-2 col-sm-2 col-xs-2 ">
                 <center> <p>{this.props.departure_time}</p>
                   <p className="nbold">{this.props.stops+"stops"}</p> </center>
                 </div>

                 <div className="col-md-2 col-sm-2 col-xs-2 booking-item-arrival">
                    <center><p className = 'bold'>{this.props.arrival_time}</p>
                    <p className="nbold">{this.props.duration}</p></center>
                </div>

                 <div className="col-md-3 col-sm-3 showFareAndBook">
                 <center> <span className="booking-item-price"><i className="fa fa-inr"></i>{this.props.total}</span></center>
                   </div>
                   <div className="col-md-3 col-sm-3 col-xs-2 ">
                   <center> <button className="submit " type="submit" onClick={this.handleSelect.bind(this)}>Select</button></center>
                 </div>
               </div>
{/*
               <div className="row mobile">
               <div className="col-xs-2">
               <div className="booking-item-airline-logo">
                     <p>{this.props.carrier}</p>
                   </div></div>
               <div className="col-xs-8">
               <span>{this.props.departure_time}</span>
               <span className="duration">--------------</span>
               <span>{this.props.arrival_time}</span>
               </div>
               <div className="col-xs-2">{this.props.total}</div>
             </div>
*/}
             </div>

            
            {this.state.display ? (
             <div id="Fligh_Details" className="booking-item-details">
               <div className="row">
                 <div className="col-md-8">
                   <p>Flight Details</p>
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
           ) : null
           }
          
           </div>
         </li>
       </ul>
       
     );
  }
}
function mapStateToProps(state) {
  return {
           added: state.addContact.bookFlight,
           airports: state.airport_details.airportsname,
           flights: state.available_flight.flights,
           tripsDetails: state.available_flight.trips
         }
}

export default connect(mapStateToProps)(ShowFlightRet);