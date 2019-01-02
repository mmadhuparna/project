import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './login.css'
import { userActions } from '../../Actions/userActions';

class UserAccount extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    
    handleLogout(id){
        return (e) => this.props.dispatch(userActions.logout(id));
        }

    render() {
        const { user, users } = this.props;
        return (
            <div className="row">
            <div className="col-md-2 col-md-offset-2"></div>
            <div className="col-md-6 col-md-offset-3">
                <h3 className="mainheading"> {user.firstName} {user.lastName}</h3>
                <h5>Contact Details:</h5>
                <p>Email Address: {user.email} </p>
                <p>Phone No:{user.phoneNo}</p>  
                <p>
                    <a href="/" onClick={this.handleLogout(user.id)}>Logout</a>
                </p>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication
    return {
        user,
        users
    };
}

const connectedUserPage = connect(mapStateToProps)(UserAccount);
export { connectedUserPage as UserAccount };