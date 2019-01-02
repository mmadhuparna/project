import React, { Component } from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import './Availableflights.css'

class ShowFlight extends Component{
  constructor(){
    super();
    this.state = {display:false}
  }

  handleSelect()
  {
    this.props.dispatch({type: 'ADDED_FALSE'})
    console.log(this.props.id);
    this.props.dispatch({type: 'ADD_CONTACT_FULFIELD',payload: this.props.total})
    browserHistory.push("/book-flight");
  }
  render(){
     return (
      //available flight display
       <ul className="booking-list">
         <li>
           <div className="booking-item-container">
             <div className="booking-item" onClick={() => {let ps = this.state.display;ps=!ps;this.setState({display:ps});console.log(this.state.display);}}>
               <div className="row rowlink">
                 <div className="col-md-2 col-sm-2 col-xs-2">
                   <div className="booking-item-airline-logo">
                     <p>{this.props.carrier}</p>
                   </div>
                 </div>
                 <div className="col-md-2 col-sm-2 col-xs-2 ">
                    <p>{this.props.departure_time}</p>
                    <p>{this.props.city}</p>
                       
                 </div>

                 <div className="col-md-2 col-sm-2 col-xs-2 booking-item-arrival">
                    <p>{this.props.arrival_time}</p>
                    <p>{this.props.city}</p>
                 
                 </div>

                 <div className="col-md-2 col-sm-2 col-xs-2 showTotalTime">
                   <p>{this.props.duration}</p>
                   <p>{this.stops}</p>
                 </div>

                 <div className="col-md-2 col-sm-2 showFareAndBook">
                   <span className="booking-item-price"><i className="fa fa-inr"></i>{this.props.total}</span><span></span>
                   </div>
                   <div className="col-md-2 col-sm-2 col-xs-2 ">
                   <button className="submit " type="submit" onClick={this.handleSelect.bind(this)}>Select</button>
                 </div>
               </div>
               
               {/* for smaller screen flight display */}
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
             </div>
            { /*advanced flight details */}
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
           added: state.addContact.bookFlight.added,
           airports: state.airport_details.airportsname,
           flights: state.available_flight.flights,
           tripsDetails: state.available_flight.trips
         }
}

export default connect(mapStateToProps)(ShowFlight);