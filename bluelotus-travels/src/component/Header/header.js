import React, { Component } from 'react';
import '../Flight-Container/flight.css'
import {Link} from 'react-router';
import { Navbar, Nav, NavItem, } from "react-bootstrap";
import { connect } from 'react-redux';
import { userActions } from '../../Actions/userActions';

class Header extends React.Component{

  handleLogout(id){
    return (e) => this.props.dispatch(userActions.logout(id));
    }

 render(){
const {user} = this.props;
 const loginOrProfile = () => {
         
  if(this.props.user){
   return(
<Navbar inverse>
<Nav pullRight>
<NavItem eventKey={1} className="capital">
<span className="welcome">Welcome back! </span> 
{user.username}</NavItem>
<NavItem eventKey={1} href="/" onClick={this.handleLogout(user.id)} className="capital">
Logout</NavItem>

</Nav>
   </Navbar>)}
else{
  return(
<Navbar inverse>

<Nav pullRight>
 
<NavItem eventKey={1} href="/login">Login</NavItem>
<NavItem eventKey={1} href="/Register">Register</NavItem>
</Nav>
  </Navbar>);
};
    }
   
    return(
      <div>
        {loginOrProfile(user)}
        <Navbar collapseOnSelect >
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand"><span><i className="fa fa-plane"></i>  BLUELOTUS</span>TRAVELS</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    
    <Nav pullRight>
      <NavItem eventKey={1} href="/">
        Home
      </NavItem>
      <NavItem eventKey={2} href="flight-search">
        Flights
      </NavItem>
      <NavItem eventKey={2} href="hotel-search">
        Hotels
      </NavItem>
      <NavItem eventKey={2} href="#">
       Contact
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    );
  };
};
  
function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication
  return {
      user,
      users
  };

}
export default connect(mapStateToProps)(Header);
