import React, { Component } from 'react';
import {fetchData} from '../../Actions/actionsFlight'
import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css';
import DatePicker from 'react-datepicker';
import FlightBookingReturn from './FlightHomeReturn'
import 'react-datepicker/dist/react-datepicker.css';
import image from '../../image/bgimage1.png'
import moment from 'moment';
import './flight.css'
import { connect } from 'react-redux';
import {browserHistory} from 'react-router'

var divStyle = {
  color: 'black',
  width:'100%',
  
  marin:0,
  minHeight:'100vh',
  height:'auto',
  backgroundImage: 'url('+image+')'
  
};

const classes = [
    {value: 'Economy',label: 'Economy'},
    {value: 'Premium Economy',label: 'Premium Economy'},
    {value: 'Business' ,label: 'Business'},
    {value: 'FirstClass', label: 'FirstClass'}
];


class FlightBooking extends Component {

  constructor(props){
    super(props);
    this.state = {
      from: '', 
      to: '', 
      departure_date: null,
      return_date: null,
      cls: 'Economy'
    };
    this.handleChange=this.handleChange.bind(this);
    
  }

handleInput(e)
{
  this.setState({from: e});
}
handleInput2(e)
{
  this.setState({to: e});
}
handlerSubmit(){
    this.props.dispatch({type: 'FETCHED_FALSE'})
    this.props.dispatch({type: 'ADDED_FALSE'})
  if(this.state.from===this.state.to)
  {
    alert('Error: Departure and Destination cant be same');
  }
  else
  {
      const date=new Date(this.state.departure_date);
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var dt = date.getDate();
      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }

      const data={
        Origin_Code : this.state.from.value,
        Dest_Code : this.state.to.value,
        start_Date: year+ month + dt,
        end_date : year+ month + dt
      }
     
      this.props.dispatch(fetchData(data));
      browserHistory.push("/available-flights")
  }

}
handleChange(e)
{
   this.setState({departure_date: e});
   
}

onclick(){
  browserHistory.push("/flights-return")
}
render() {

  const filterOptions = createFilterOptions({ options: this.props.filters });
   const filterclasses = createFilterOptions({ classes });
    return (
      
     <div className="row rowmain" style={divStyle} >
     
      <div className=" col-md-6 col-lg-6 col-sm-6 col-md-offset-3 col-lg-offset-3 col-sm-offset-3" >
      <h3 className="formheading">Search Flight</h3>
      <form onSubmit={this.handlerSubmit.bind(this)} >
      <div className="form-group">
      <label className="radio-inline"><input type="radio" defaultChecked name="optradio"/>one-way</label>
      <label className="radio-inline"><input type="radio" name="optradio" onChange ={this.onclick.bind(this)}/>Round-trip</label>

      </div>
        <div className="form-group">
							
								<h5>From</h5>
                <Select name="from_airport" className="class1" value={this.state.from} options={this.props.airport_details} filterOptions={filterOptions} onChange={this.handleInput.bind(this)}  placeholder="Type Departure City"/>
							</div>
							<div className="form-group">
								<h5>To</h5>
								  <Select name="to_airport" className="class1" value={this.state.to} options={this.props.airport_details} filterOptions={filterOptions} onChange={this.handleInput2.bind(this)} placeholder="Type Destination City"/>
							</div>
							<div className="clear"></div>
							
								<div className="form-group">
									<h5>Departure Date</h5>
                   <DatePicker className="class1" monthsShown={1}
                 selected = {this.state.departure_date}
                 onChange={this.handleChange} 
                
                  ></DatePicker>
								</div>
               
								<div className="clear"></div>
							
							<div className="form-group">
								<h5>Class</h5>
                <Select name="class"  value={this.state.cls} className="class1 required" options={classes} filterOptions={filterclasses} onChange={val => this.setState({cls: val})} />
              </div>
								<div className="clear"></div>
							<div className="clear"></div>

						<button type="submit" className="btn btn-primary"  onClick={this.handlerSubmit.bind(this)} disabled={!Boolean(this.state.from && this.state.to && this.state.departure_date)}>Search Flights</button>
        
        </form>
     </div>
     
    </div>

     )
 }
}
function mapStateToProps(state) {
  return { airport_details: state.airport_details.airport_details,
           filters: state.airport_details.filter,
           flights: state.available_flight.flights
           
         }
}

export default connect(mapStateToProps)(FlightBooking)