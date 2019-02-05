import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Container, Row} from 'reactstrap';
import Header from './header';

class HeaderApp extends React.Component {
  render() {
    return (
      <div>

        <Header
          user={this.props.user} 
        />

            {this.props.children}
          
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: state.authentication
      
  };
}

export default connect(mapStateToProps)(HeaderApp)