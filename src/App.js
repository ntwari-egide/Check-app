/**
 * @author: ntwari egide
 * @description App component
 */

import './App.css';

import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createStore} from "redux"
import {combineReducers} from "redux"
import {Provider } from 'react-redux'
import SignupComponent from "./components/views/signup-component"
import SigninComponent from "./components/views/signin-component"
import UserProfileComponent from "./components/views/user-profile"
import DashboardComponent from "./components/views/dashboard"
import LogoutComponent from "./components/views/Logout"

class App extends Component {

  render() {

    const store = createStore(combineReducers({
  }))

    return (
      <div className="App">  
        <Fragment>
            <Provider store={store}>
                <Router>
                  <Switch>
                    <Route path="/signup" exact component={SignupComponent} />
                    <Route path="/" exact component={SigninComponent} />
                    <Route path="/signin" exact component={SigninComponent} />
                    <Route path="/dashboard" exact component={DashboardComponent} />
                    <Route path="/profile" exact component={UserProfileComponent} />
                    <Route path="/logout" exact component={LogoutComponent} />
                  </Switch>
                </Router>
            </Provider>
        </Fragment>
        
      </div>
    );
  }
}


export default App;
