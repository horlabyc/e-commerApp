import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/images/crown.svg';
import { auth } from '../../Firebase/firebase.util';
import { connect } from 'react-redux';
import './header.styles.scss';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
               <Logo /> 
            </Link>
            {currentUser? (<p>Welcome {currentUser.displayName}</p> ): null}
            
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                { currentUser? 
            (<div className="option" onClick = {() => { auth.signOut()}}>SIGN OUT</div> ) : ( <Link className="option" to="/signin">SIGN IN</Link>) }
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
