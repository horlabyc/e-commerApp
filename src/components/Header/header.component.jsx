import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/images/crown.svg';
import { auth } from '../../Firebase/firebase.util';
import { connect } from 'react-redux';
import './header.styles.scss';
import CartIcon from '../Cart-icon/cart-icon.component';
import CartDropdown from '../Cart-Dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
               <Logo /> 
            </Link>
            {currentUser? (<p className="userName">Welcome {currentUser.displayName}</p> ): null}
            
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                { currentUser? (<div className="option" onClick = {() => { auth.signOut()}}>SIGN OUT</div> ) 
                                : ( <Link className="option" to="/signin">SIGN IN</Link>) 
                }
                <CartIcon />
            </div>
            { !hidden? (<CartDropdown />) : (null)}
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
    currentUser, hidden
});

export default connect(mapStateToProps)(Header);
