import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Homepage/homepage.components';
import ShopPage from './Pages/Shop/shopPage.component';
import Header from './components/Header/header.component';
import AuthPage from './Pages/AuthenticationPage/authPage.component';

import { auth, createUserProfileDocument } from './Firebase/firebase.util';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
      
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
