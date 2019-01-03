import React, { Component } from 'react';
import image from '../../image/image2.png';
import './home.css'

var divStyle = {
    color: 'black',
    width:'100%',
    margin:0,
    minHeight:'80vh',
    height:'100%',
    backgroundSize:'cover',
    backgroundImage: 'url('+image+')'
    
  };
class Home extends Component {

    render(){
        return (
          
      <div className="row rowmain" style={divStyle}>
      <div className="col-md-8 col-md-offset-2 ">
      
<p className="home-main">Welcome to <span>BLUELOTUS TRAVELS</span></p>
<p className="home-p">Book Flights</p>
<p className="home-p">Search Hotels </p>
<p className="home-p">Plan your trip</p>
      </div></div>

        )        
}
}
export default Home