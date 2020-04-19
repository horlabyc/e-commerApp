import React from 'react';
import CustomButton from '../Custom-Button/custom-button.component';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selector';
import CartItem from '../Cart-Item/cart-item.component';
import './cart-dropdown.styles.scss';

const Cart = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )
            }
        </div>
        <CustomButton onClick={ () => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(Cart));