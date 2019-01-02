import React, { Component } from 'react';
//import {fetchData} from './actions'
import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import image from '../../image/image3.png'
import { connect } from 'react-redux';
import './hotel.css'


var divStyle = {
  color: 'black',
  width:'100%',
  marin:0,
  minHeight:'100vh',
  height:'100%',
  backgroundImage: 'url('+image+')'
  
};

class HotelSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: '', 
      
      departure_date: null,
      return_date: null,
      
    };
    
    
  }

handleInput(e)
{
  this.setState({city: e});
}
  

render() {

  const filterOptions = createFilterOptions({ options: this.props.filters })
    return (
      
     <div className="row rowmain" style={divStyle} >
     
     <div className=" col-md-6 col-lg-6 col-sm-6 col-md-offset-3 col-lg-offset-3 col-sm-offset-3" >
      <h3 className="formhotel">Search Hotel</h3>
      <form className="hotelform">
      
        <div className="form-group">
							
								<h5>City</h5>
                <Select name="from_airport"  value={this.state.city} options={this.props.city_details} filterOptions={filterOptions} onChange={this.handleInput.bind(this)} placeholder="Enter City Name"/>
							</div>
							
							<div className="clear"></div>
							
              <div className="date">
                            <div className="row">
                            <div className="col-md-6 col-sm-6">
								<div className="form-group">
                                
									<h5>Check-In</h5>
                  <DatePicker className="form-control" monthsShown={1}
                 selected = {this.state.departure_date}
                 onChange={this.handleChange} 
                  />
								</div></div>
                 <div className="col-md-6 col-sm-6">         
                <div className="form-group">
									<h5>Check-Out</h5>
                  <DatePicker className="form-control" monthsShown={1}
                 selected = {this.state.return_date}
                 onChange={this.handleChangereturn} 
                  />
                  </div>
                  </div></div>		</div>
               
								<div className="clear"></div>
                <div className="date">
                            <div className="row">
                            <div className="col-md-6 col-sm-6">
								<div className="form-group">
                                
									<h5>Guests</h5>
                  <select className="form-control" name="Guest">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  </select>
								</div></div>
                 <div className="col-md-6 col-sm-6">         
                <div className="form-group">
									<h5>Rooms</h5>
                  <select className="form-control" name="Guest">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  </select>
                  </div>
                  </div></div>		</div>
							
								<div className="clear"></div>
							<div className="clear"></div>

						<button type="submit" className="btn btn-primary">Search</button>
        
        </form>
     </div>
     
    </div>

     )
 }
}


function mapStateToProps(state) {
  return { city_details: state.city_details.city_details,
           filters: state.city_details.filter,
           
           
         }
}

export default connect(mapStateToProps)(HotelSearch)