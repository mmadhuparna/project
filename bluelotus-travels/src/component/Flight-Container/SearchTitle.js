import React, { Component } from 'react';

class Searchtitle extends Component{

  render(){
    return (
        <div className="row rowleft srhtitle">
        <div className="col-md-3 col-xs-3 col-sm-3 vr">Departure </div>
        <div className="col-md-3 col-sm-3 col-xs-3 vr" >Arrival</div>
        <div className="col-md-2 col-sm-2 col-xs-2 vr">Duration</div>
        <div className="col-md-4 col-sm-2 col-xs-2">Price</div>
        </div>
    )
  }
}
export default Searchtitle