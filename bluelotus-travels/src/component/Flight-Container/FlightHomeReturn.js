import React, { Component } from 'react';
import {fetchData} from '../../Actions/actionsFlight'
import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css';
import DatePicker from 'react-datepicker';
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
  height:'100%',
  backgroundImage: 'url('+image+')'
  
};

const classes = [
    {value: 'Economy',label: 'Economy'},
    {value: 'Premium Economy',label: 'Premium Economy'},
    {value: 'Business' ,label: 'Business'},
    {value: 'FirstClass', label: 'FirstClass'}
];


class FlightBookingReturn extends Component {

  constructor(props){
    super(props);
    this.state = {
      from: '', 
      to: '', 
      departure_date: null,
      return_date: null,
      cls: 'Economy',
      
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleChangereturn=this.handleChangereturn.bind(this);
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

      const retdate=new Date(this.state.return_date);
      var ryear = retdate.getFullYear();
      var rmonth = retdate.getMonth()+1;
      var rdt = retdate.getDate();
      if (rdt < 10) {
        rdt = '0' + rdt;
      }
      if (month < 10) {
        rmonth = '0' + rmonth;
      }

      const data={
        Origin_Code : this.state.from.value,
        Dest_Code : this.state.to.value,
        start_Date: year+ month + dt,
        end_Date : ryear+ rmonth + rdt,
        o_city: this.state.from.name,
        d_city: this.state.to.name,
        origin_date: dt+"-"+month+"-"+year,
        dest_date: rdt+"-" +rmonth+"-"+ryear
      }
     
      this.props.dispatch(fetchData(data));
      browserHistory.push("/available-flights-ret")
  }

}
handleChange(e)
{
   this.setState({departure_date: e});
   
}
handleChangereturn(e)
{
   this.setState({return_date: e});
   
}
onclick(){
  browserHistory.push("/flight-search")
}

render() {

  const filterOptions = createFilterOptions({ options: this.props.filters });
   const filterclasses = createFilterOptions({ classes });
    return (
     <div className="row rowmain" style={divStyle}>
     <div className=" col-md-6 col-lg-6 col-sm-6 col-md-offset-3 col-lg-offset-3 col-sm-offset-3" >
      <h3 className="formheading">Search Flight</h3>
      <form onSubmit={this.handlerSubmit.bind(this)} >
      <div className="form-group">
      <label className="radio-inline"><input type="radio"  name="optradio" onChange ={this.onclick.bind(this)}/>one-way</label>
      <label className="radio-inline"><input type="radio" defaultChecked name="optradio" />Round-trip</label>

      </div>
        <div className="form-group">
							
								<label>From</label>
                <Select name="from_airport" value={this.state.from} options={this.props.airport_details} name={JSON.stringify(this.state.from)} filterOptions={filterOptions} onChange={this.handleInput.bind(this)}  placeholder="Type Departure City"/>
							</div>
							<div className="form-group">
								<h5>To</h5>
								  <Select name="to_airport" value={this.state.to} options={this.props.airport_details} name={JSON.stringify(this.state.to)} filterOptions={filterOptions} onChange={this.handleInput2.bind(this)} placeholder="Type Destination City"/>
							</div>
							<div className="clear"></div>
							<div className="date">
                            <div className="row">
                            <div className="col-md-6">
								<div className="form-group">
                                
									<h5>Departure Date</h5>
                  <DatePicker className="form-control" monthsShown={1}
                 selected = {this.state.departure_date}
                 onChange={this.handleChange} 
                  />
								</div></div>
                 <div className="col-md-6">         
                <div className="form-group">
									<h5>Return Date</h5>
                  <DatePicker className="form-control" monthsShown={1}
                 selected = {this.state.return_date}
                 onChange={this.handleChangereturn} 
                  />
                  </div>
                  </div>		</div>
								<div className="clear"></div>
							</div>
							<div className="form-group">
								<h5>Class</h5>
                <Select name="class"  value={this.state.cls} options={classes} filterOptions={filterclasses} onChange={val => this.setState({cls: val})} />
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
  return  { airport_details: state.airport_details.airport_details,
    filters: state.airport_details.filter,
    flights: state.available_flight.flights,
    returnflights:state.available_flight.retflights
  }
         }


export default connect(mapStateToProps)(FlightBookingReturn)