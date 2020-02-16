import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
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
          <Route exact path="/" component={this.renderHome}></Route>
          <Route exact path="/customers" component={this.renderCustomerListContainer}></Route>
          <Route exact path="/customer/:dni" component={this.renderCustomerContainer}></Route>
          <Route exact path="/customers/new" component={this.renderCustomerNewContainer}></Route>
        </div>
      </Router>
    )
  }
}

export default App;