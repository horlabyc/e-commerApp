import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Homepage/homepage.components';
import ShopPage from './Pages/Shop/shopPage.component';
import Header from './components/Header/header.component';
import AuthPage from './Pages/AuthenticationPage/authPage.component';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './Firebase/firebase.util';
import './App.css'; 

import { setCurrentUser } from './redux/user/user.actions';


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { currentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          currentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      } else {
        currentUser(userAuth)
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/> 
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={AuthPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  currentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
