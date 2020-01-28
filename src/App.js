import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Homepage/homepage.components';
import ShopPage from './Pages/Shop/shopPage.component';
import Header from './components/Header/header.component';
import AuthPage from './Pages/AuthenticationPage/authPage.component';

import { auth } from './Firebase/firebase.util';
import './App.css'; 



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/> 
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={AuthPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
