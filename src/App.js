import React, { Component } from 'react';
import {withRouter} from 'react-router';
import {Switch, Route} from "react-router-dom";
import Login from './Components/Login';
import Courses from './Components/Courses';
import Main from './Components/Main';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/" component={Main}/>
        </Switch>
      </div>
    );
  }
}



export default withRouter(App);
