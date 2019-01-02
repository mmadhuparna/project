import React, { Component } from 'react';

class SearchtitleRet extends Component{

  render(){
    return (
    <div className="row rowleft ">
      <div className="col-md-6 grey">
        <div className="row rowleft">
          <div className="col-md-3 col-xs-3 col-sm-3 vr">Departure </div>
          <div className="col-md-3 col-sm-3 col-xs-3 vr" >Arrival</div>
          <div className="col-md-4 col-sm-2 col-xs-2">Price</div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row rowleft">
          <div className="col-md-3 col-xs-3 col-sm-3 vr">Departure </div>
          <div className="col-md-3 col-sm-3 col-xs-3 vr" >Arrival</div>
          <div className="col-md-4 col-sm-2 col-xs-2">Price</div>
        </div>
      </div>
    </div>
    )
  }
}
export default SearchtitleRet