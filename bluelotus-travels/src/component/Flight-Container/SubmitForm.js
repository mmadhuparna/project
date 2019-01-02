import React, { Component } from 'react';
import './submitform.css'
import { connect } from 'react-redux';
class Submitform extends Component {
  render() {

    return (<div>{this.props.added?(
      <div className="mybody">
      <div className="main-form">
      <h3>Enter Details</h3>
      <form className="myform" id="agile-form">
      <fieldset>
      

<div className="agile-group required-control">
  <label className="agile-label" htmlFor="agilefield-1">First Name<span className="agile-span-asterisk"> *</span></label>
  <div className="agile-field-xlarge agile-field">
	<input maxLength="250" id="agilefield-1" name="first_name" type="text" placeholder="Enter first name" className="agile-height-default" required="true"></input>
  </div>
  <div className="agile-custom-clear"></div>
</div>

<div className="agile-group required-control">
  <label className="agile-label" htmlFor="agilefield-6">Last Name<span className="agile-span-asterisk"> *</span></label>
  <div className="agile-field-xlarge agile-field">
	<input maxLength="250" id="agilefield-6" name="last_name" type="text" placeholder="Enter last name" className="agile-height-default" required="true"/>
  </div>
  <div className="agile-custom-clear"></div>
</div>

<div className="agile-group">
  <label className="agile-label" htmlFor="agilefield-3">Email<span className="agile-span-asterisk"> *</span></label>
  <div className="agile-field-xlarge agile-field">
	<input maxLength="250" id="agilefield-3" name="email" type="email" placeholder="Enter email" className="agile-height-default" required="true"/>
  </div>
  <div className="agile-custom-clear"></div>
</div>

<div className="agile-group">
  <label className="agile-label" htmlFor="agilefield-2">Phone</label>
  <div className="agile-field-xlarge agile-field">
	<input maxLength="250" id="agilefield-2" name="phone" type="text" placeholder="Enter work phone" className="agile-height-default"/>
  </div>
  <div className="agile-custom-clear"></div>
</div>


<div className="agile-group">
  <label className="agile-label">&nbsp;</label>
  <div className="agile-field agile-button-field">
    <button type="submit" className="agile-button">Submit</button>
    <br></br><span id="agile-error-msg"></span>
  </div>
</div>

      </fieldset>
      </form>
      </div>
      </div>
    ):(<h3>Loading...</h3>)}</div>)
  }
}

function mapStateToProps(state) {
  return {
           added: state.addContact.added,
           tripsDetails: state.available_flight.trips,
           price: state.addContact.bookFlight,
           flights: state.available_flight.flights,
         }
}

export default connect(mapStateToProps)(Submitform)