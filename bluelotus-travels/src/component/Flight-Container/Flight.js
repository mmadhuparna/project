import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './flight.css'
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import FlightBooking from  './FlightHome'
import {fetchAirportDetails} from './actions'
import { Router,Route,browserHistory } from "react-router"
import { Provider } from "react-redux";
import Home from '../Home'
import configureStore from "./store";
import AvailableFlights from './AvailableFlights'
import Submitform from './SubmitForm'
import FlightBookingReturn from './FlightHomeReturn';
import AvailableFlightsRet from './AvailableFlightRet'
import Header from '../header';
import {fetchCityDetails} from '../Flight-Container/actions'
import HotelSearch from '../Hotel-Container/HotelSearch';


var divStyle = {
  color: 'black',
  width:'100%',
  marin:0,
  minHeight:'100vh',
  height:'100%',
  padding:0,
  margin:0
  
};
const store=configureStore();
store.dispatch(fetchAirportDetails());
store.dispatch(fetchCityDetails());
class Flight extends Component {

   
    render() {
      return (
        <div>
        <Header/>
        <div className="Container" style={divStyle}>
        <Provider store={store}>
        <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="flight-search" component={FlightBooking}></Route>
        <Route path="available-flights" component={AvailableFlights}></Route>
        <Route path="flights-return" component={FlightBookingReturn}></Route>
        <Route path="available-flights-ret" component={AvailableFlightsRet}></Route>
        <Route path="book-flight" component={Submitform}></Route>
        <Route path="hotel-search" component={HotelSearch}></Route>
        
        </Router>
        </Provider>
        </div>
        </div>
        
        
      )
    }
}
export default Flight;