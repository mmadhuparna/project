import React, { Component } from 'react';
import {connect} from 'react-redux';

import ShowFlightRet from './ShowFlightRet';
//import bookingDetails from './bookingDetails';


class AllFlightsReturn extends Component{
  constructor(){
    super();
    this.state = {display:false, data: [],
    returndata: [],
    

  }
  this.onclick = this.onclick.bind(this);
  }
onclick(){
  {let ps = this.state.display
    ;ps=!ps;
    this.setState({display:ps})
}
} 
  componentWillMount(){
    var count=0;
    
    this.props.flights.map(data=>
    {
      count++;
      const total=data.total;
      this.state.data.push(<ShowFlightRet total={total} aircraft={data.aircraft} duration={data.duration} departure_time={data.departure_time} arrival_time={data.arrival_time} stops={data.stops} carrier={data.carrier} carrier_no={data.carrier_no}
        departure_date={data.departure_date} arrival_date={data.arrival_date} key={count} id={count} onclick={this.onclick}  ></ShowFlightRet>);
    });

    if(this.props.sortBy === 'price'){
      this.state.data.sort(function(fobj, sobj){
        if(fobj.total < sobj.total) return -1;
        if(fobj.total > sobj.total) return 1;
        return 0;
      });
    }
    if(this.props.sortBy === 'stops'){
      this.state.data.sort(function(fobj, sobj){
        if(fobj.stops < sobj.stops) return -1;
        if(fobj.total > sobj.total) return 1;
      });
    }
    this.props.returnflights.map(data=>
      {
        count++;
        const total=data.total;
        this.state.returndata.push(<ShowFlightRet total={total} aircraft={data.aircraft} duration={data.duration} departure_time={data.departure_time} arrival_time={data.arrival_time} stops={data.stops} carrier={data.carrier} carrier_no={data.carrier_no}
          departure_date={data.departure_date} arrival_date={data.arrival_date} key={count} id={count} />);
      })

  }
  render(){
    return (
      <div className="row rowleft">
      <div className="col-md-6 no-padding  ">
      <p className="rtdetail">{this.props.tripsDetails.o_city} to {this.props.tripsDetails.d_city} on {this.props.rtripsDetails.date}</p>
      <p className="para" style={{paddingLeft:"15px"}}>{this.props.flights.length +" "+ "Flights"}</p>
      <div className="vrmain">
      {this.state.data}</div>
     
      </div>
      <div className="col-md-6 no-padding">
      <p className="rtdetail">{this.props.tripsDetails.d_city} to {this.props.tripsDetails.o_city} on {this.props.rtripsDetails.retdate}</p>
     
      <p className="para" style={{paddingLeft:"15px"}}>{this.props.returnflights.length +" "+ "Flights"}</p>
      {this.state.returndata}
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
export default connect(mapStateToProps)(AllFlightsReturn)