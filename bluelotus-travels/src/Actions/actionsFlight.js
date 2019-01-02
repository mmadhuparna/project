import React from 'react';
import axios from 'axios';
import _ from 'lodash';
export const SORT_FLIGHT = 'sort_flight';

//fetch airport details to search flight
export  function fetchAirportDetails(){
  return dispatch =>{
    fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/airports.json')
    .then(response =>response.json())
    .then( data => {
      const str=[];
      const option=[];
      const airports=[];
      data.map( itr => {
        let city= (itr.city)
        let code = itr.code
        let name = itr.name
       
        
      let flight = (city  + " " + code + " "+ name);
      const temp=(<div style={{paddingLeft:'10px'}}>
                  
                  <span className="code" style={{marginRight:'15px'}}><strong>{itr.city}</strong></span>
                  <span className="code"style={{marginRight:'5px'}}>({itr.code})</span>
                  <span style ={{whiteSpace: 'pre-line'}} className="code">{itr.name}</span><hr/>
                  </div>
                  
                  
                  
                  );
       str.push({value: itr.code, name:itr.city, label: temp});
        option.push({value: itr.code,label: flight, name:itr.city });
        airports.push({code: itr.code,city: itr.city,name: itr.name})
    })
      dispatch({type: "FETCH_DETAILS_FULFILLED",payload: str})
      dispatch({type: "FETCH_DETAILS_FILTER",payload: option})
      dispatch({type: "FETCH_DETAILS",payload: airports})
    })
    .catch((err)=>{
      dispatch({type: "FETCH_DETAILS_REJECTED",payload: err})
    })
  }
}
//fetch data from goibibo api
export function fetchData(requestParam) {
  console.log("requestParam",requestParam);
  
  const url ="http://developer.goibibo.com/api/search/?app_id=e126e1d7&app_key=5648fc2cf56338f6f714475e6a35bc7a";
	
  return function(dispatch) {
    return axios({
      method: 'get',  
      url: url,
		  
       params: {
					  		  "source": requestParam.Origin_Code,
					        "destination": requestParam.Dest_Code,
                  "dateofdeparture": requestParam.start_Date,
                  "dateofarrival": requestParam.end_Date,
                  "seatingclass" : "E",
                  "adults" : 1,
                  "children":0,
                  "infants":0,
                  "counter":100
            		},
            
          headers: {'Content-Type': 'application/json'}
             
          })

        .then(function(response) 
        {
          console.log("RESPONSE......",response);
        const flight_data=response.data;
        console.log("RESPONSE.DATA......",flight_data);
        const availableFlights=[];
        const returnFlights=[];

        //data related to onward flights
        flight_data.data.onwardflights.map((data)=>
        {
          var Total=data.fare.totalfare;
          var Duration = data.duration;
          var segmentAircraft='';
          var departure_time= data.deptime;
          var arrival_time = data.arrtime;
          var departure_date = data.depdate;
          var arrival_date = data.arrtime;
          var stops = data.stops;
          var flight_no = data.flightcode;
          var carrier = data.airline;
          var carrier_no = data.carrierid;

        
          return availableFlights.push({flightcode:flight_no,total: Total,duration: Duration,stops: stops,departure_date: departure_date,arrival_date: arrival_date,departure_time: departure_time,arrival_time: arrival_time,carrier:carrier,carrier_no:carrier_no})
        })

        //data related to return flights
        flight_data.data.returnflights.map((data)=>
        {
          var Total=data.fare.totalfare;
          var Duration = data.duration;
          var segmentAircraft='';
          var departure_time= data.deptime;
          var arrival_time = data.arrtime;
          var departure_date = data.depdate;
          var arrival_date = data.arrtime;
          var stops = data.stops;
          
  
          var flight_no = data.flightcode;
          var carrier = data.airline;
          var carrier_no = data.carrierid;
         
           returnFlights.push({flightcode:flight_no,total: Total,duration: Duration,stops: stops,departure_date: departure_date,arrival_date: arrival_date,departure_time: departure_time,arrival_time: arrival_time,carrier:carrier,carrier_no:carrier_no})
        })
        
        dispatch({type: 'FETCH_FLIGHTS_FULFILLED',payload: availableFlights});
        dispatch({type: 'FETCH_RETURNFLIGHTS_FULFILLED',payload: returnFlights})
        dispatch({type: 'TRIPS_DETAILs',payload: {
          from: requestParam.Origin_Code,
          to: requestParam.Dest_Code,
          date: requestParam.origin_date,
          o_city:requestParam.o_city,
          d_city:requestParam.d_city}})
        dispatch({type: 'RETURNTRIPS_DETAILs_',payload: {
          from: requestParam.Origin_Code,
          to: requestParam.Dest_Code,
          date: requestParam.origin_date,
          retdate:requestParam.dest_date,
          o_city:requestParam.o_city,
          d_city:requestParam.d_city}})
        
      })
        .catch((err)=>{
          dispatch({type: "FETCH_FLIGHTS_REJECTED",payload: err})
          dispatch({type: "FETCH_FLIGHTS_RETURN_REJECTED",payload: err})
        })
    }
  };
    
  export const sortFlight = (sortField) => {
    return {
      type: SORT_FLIGHT,
      sortField: sortField
    }
  }
//cities details to search hotels
  export  function fetchCityDetails(){
    return dispatch =>{
      fetch('https://gist.github.com/JuraSemenenko/184c1d018c3f11b06ef93d04a59bb1e8/raw/cities.json')
      .then(response =>response.json())
      .then( data => {
        const str=[];
        const filter=[];
        const city=[];
        data.map( itr => {
          let name= (itr.name)
          let id = itr.id
          let country = itr.country
         
          
        let mycity = (name  + " " + id + " "+ country);
        const temp=(<div style={{paddingLeft:'10px'}}>
                    
                    <span className="code" style={{marginRight:'15px'}}><strong>{itr.name}</strong></span>
                    <span className="code"style={{marginRight:'5px'}}>({itr.id})</span>
                    <span style ={{whiteSpace: 'pre-line'}} className="code">{itr.country}</span><hr/>
                    </div>
                    
                    
                    
                    );
         str.push({value: itr.id, name:itr.name, label: temp});
          filter.push({value: itr.id,label: mycity, name:itr.name });
          city.push({id: itr.id,country: itr.country,name: itr.name})
      })
        dispatch({type: "FETCH_DETAILS_CITY_FULFILLED",payload: str})
        dispatch({type: "FETCH_DETAILS_CITY_FILTER",payload: filter})
        dispatch({type: "FETCH_DETAILS_CITY",payload: city})
      })
      .catch((err)=>{
        dispatch({type: "FETCH_DETAILS_CITY_REJECTED",payload: err})
      })
    }
  }
  