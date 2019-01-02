import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './component/Flight-Container/flight.css'
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import FlightBooking from  './component/Flight-Container/FlightHome'
import {fetchAirportDetails} from './Actions/actionsFlight'
import { Router,Route,browserHistory,IndexRoute } from "react-router"
import { Provider } from "react-redux";
import Home from './component/Home/Home'
import configureStore from "./Store/store";
import AvailableFlights from './component/Flight-Container/AvailableFlights'
import Submitform from './component/Flight-Container/SubmitForm'
import FlightBookingReturn from './component/Flight-Container/FlightHomeReturn';
import AvailableFlightsRet from './component/Flight-Container/AvailableFlightRet'
import HeaderApp from './component/Header/HeaderApp';
import {fetchCityDetails} from './Actions/actionsFlight';
import HotelSearch from './component/Hotel-Container/HotelSearch';
import {LoginPage} from './component/Login-Register/login'
import {UserAccount} from './component/Login-Register/account'
import {RegisterPage} from './component/Login-Register/register'
import { connect } from 'react-redux';

var divStyle = {
  color: 'black',
  width:'100%',
  marin:0,
  height:'100%',
  padding:0,
  margin:0,
  
  
};
const store=configureStore();
store.dispatch(fetchAirportDetails());
store.dispatch(fetchCityDetails());

class App extends Component {

   
    render() {
      return (
       
        
        <div className="Container" style={divStyle}>
        
        <Provider store={store}>
        <Router history={browserHistory}>
        <Route path="/" component={HeaderApp}>
        <IndexRoute component={Home}/>
        <Route path="flight-search" component={FlightBooking}></Route>
        <Route path="available-flights" component={AvailableFlights}></Route>
        <Route path="flights-return" component={FlightBookingReturn}></Route>
        <Route path="available-flights-ret" component={AvailableFlightsRet}></Route>
        <Route path="book-flight" component={Submitform}></Route>
        <Route path="hotel-search" component={HotelSearch}></Route>
        <Route path="login" component={LoginPage}></Route>
        <Route path="register" component={RegisterPage}></Route>
        <Route path="account" component={UserAccount}></Route>
        
        </Route>
        </Router>
        </Provider>
       
        </div>
        
       
        
        
      )
    }
}

export default App