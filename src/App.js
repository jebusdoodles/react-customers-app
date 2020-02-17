import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import './App.css';

class App extends Component{
  
  renderHome = () => <h1>Home</h1>;
  
  renderCustomerContainer = () => <h1>Customer Container</h1>; 
  
  renderCustomerListContainer = () => <h1>Customer list container</h1>;

  renderCustomerNewContainer = () => <h1>Customer new container</h1>;

  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer}></Route>
          <Route exact path="/customers" component={this.renderCustomerListContainer}></Route>
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer}></Route>
            <Route path="/customer/:dni" component={this.renderCustomerContainer}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;