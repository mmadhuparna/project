import React, { Component } from 'react';
import './Availableflights.css'

class FilterOptions extends Component{

  render(){
    return (
      
      <div className="row filteroptions">
        <h3 className="filterheading">Sort By Filter:</h3>
        <h5 className="heading5">Find your dream flight today</h5>
        <div className="panels-group">
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading">					
                                            <a href="#panel-1" data-toggle="collapse" >Select Airline <span><i className="fa fa-angle-down"></i></span></a>
                                        </div>
                                        
                                        <div id="panel-1" className="panel-collapse collapse">
                                            <div className="panel-body text-left">
                                                <ul className="list-unstyled">
                                                    <li className="custom-check"><input type="checkbox" id="check01" name="checkbox"/>
                                                    <label htmlFor="check01">All Types</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check02" name="checkbox"/>
                                                    <label htmlFor="check02">Aruba Airlines</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check03" name="checkbox"/>
                                                    <label htmlFor="check03">Asiana Airlines</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check04" name="checkbox"/>
                                                    <label htmlFor="check04">American Airlines</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check05" name="checkbox"/>
                                                    <label htmlFor="check05">Delta Stop</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check06" name="checkbox"/>
                                                    <label htmlFor="check06">KingFisher Airlines</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check07" name="checkbox"/>
                                                    <label htmlFor="check07">Lufthansa Airlines</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check08" name="checkbox"/>
                                                    <label htmlFor="check08">Qatar Airlines</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check09" name="checkbox"/>
                                                    <label htmlFor="check09">United Airlines</label></li>
                                                </ul>
                                            </div>
                                        </div>
                                                                            </div>
                                                                            <div class="panel panel-default">
                                        <div className="panel-heading">					
                                            <a href="#panel-2" data-toggle="collapse" >Flight Class <span><i className="fa fa-angle-down"></i></span></a>
                                        </div>
                                        
                                        <div id="panel-2" className="panel-collapse collapse">
                                            <div className="panel-body text-left">
                                                <ul className="list-unstyled">
                                                    <li className="custom-check"><input type="checkbox" id="check10" name="checkbox"/>
                                                    <label htmlFor="check10">All</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check11" name="checkbox"/>
                                                    <label htmlFor="check11">Economy</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check12" name="checkbox"/>
                                                    <label htmlFor="check12">First Class</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check13" name="checkbox"/>
                                                    <label htmlFor="check13">Business</label></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="panel panel-default">
                                        <div className="panel-heading">					
                                            <a href="#panel-3" data-toggle="collapse" >Flight Stops <span><i className="fa fa-angle-down"></i></span></a>
                                        </div>
                                        
                                        <div id="panel-3" className="panel-collapse collapse">
                                            <div className="panel-body text-left">
                                                <ul className="list-unstyled">
                                                    <li className="custom-check"><input type="checkbox" id="check14" name="checkbox"/>
                                                    <label htmlFor="check14">All</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check15" name="checkbox"/>
                                                    <label htmlFor="check15">1 Stop</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check16" name="checkbox"/>
                                                    <label htmlFor="check16">2 Stop</label></li>
                                                    <li className="custom-check"><input type="checkbox" id="check17" name="checkbox"/>
                                                    <label htmlFor="check17">3 Stop</label></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="range-field">
                                        <label>Price Range</label>
                                       
                                        
                                        <input className="slider" type="range" data-slider-min="1000" data-slider-max="1000000" data-slider-step="10000" data-slider-tooltip="show" data-slider-value="4100000"/>
                                    
                                
                            </div>
                            </div>
                                    
                                   
        
    )
  }
}

export default FilterOptions;