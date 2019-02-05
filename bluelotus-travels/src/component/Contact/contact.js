import React, { Component } from 'react';
import image from '../../image/image2.png';
import './contact.css'

var divStyle = {
    color: 'black',
    width:'100%',
    margin:0,
    minHeight:'80vh',
    height:'100%',
    backgroundSize:'cover',
    backgroundImage: 'url('+image+')'
    
  };
class Contact extends Component {

    render(){
        return (
      <div className="row rowmain" style={divStyle}>
      <div className="col-md-8 col-md-offset-2 ">
      
<p className="home-main">Address<span>BLUELOTUS TRAVELS, Hyderabad</span></p>
<p className="home-p">Phone No: 0408697898</p>
<p className="home-p">Email: bltravels@gmail.com </p>
<p className="home-p">Website: xxx.com</p>
      </div></div>

        )        
}
}
export default Contact