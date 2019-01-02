import React, { Component } from 'react';
import { sortFlight } from '../../Actions/actionsFlight';
import { connect } from 'react-redux';
class Sort extends Component{
  clickSort (field) {
    this.props.sortFlight(field);
  }
  render(){
    return (
        <span className="nav-drop booking-sort "><strong>SORT:</strong>
                
                  <select className="nav-drop-menu dropdown" name="Sort">
                    <option value="Price">Price(Low To High) onClick={this.clickSort.bind(this, 'total')}</option>
                    <option value="Duration">Duration onClick={this.clickSort.bind(this, 'duration')}</option>
                    <option value="Stops">Stops</option>
                    <option value="Arrival">Arrival</option>
                    <option value="Departure">Departure</option>
                  </select>
              </span>
    )
  }
}
function mapStateToProps (state) {
  return { flight: state.available_flight }
}

export default connect(mapStateToProps, { sortFlight })(Sort);
