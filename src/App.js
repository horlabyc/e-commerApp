import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
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
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    console.log(this.props.currentUser)
    return (
      <div>
        <Header/> 
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/signin" render={() => this.props.currentUser? <Redirect to="/" /> : <AuthPage />}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
