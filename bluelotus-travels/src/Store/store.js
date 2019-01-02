import { applyMiddleware,createStore } from "redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import  { airport_details, available_flight,city_details,addContact }  from '../Reducers/reducersFlight';
import { combineReducers } from "redux";
import {authentication} from '../Reducers/authenticationReducer';
import {registration} from '../Reducers/registrationReducer';
import {users} from '../Reducers/userReducer';
import {alert} from '../Reducers/alertReducer';


const middleware = applyMiddleware(promise(),thunk,createLogger())
const reducer= combineReducers({
  authentication,
  registration,
  users,
  alert,
  airport_details,
  available_flight,
  city_details,
  addContact
})

export default function configureStore(preloadedState) {
  return createStore(reducer,preloadedState,middleware)
}

