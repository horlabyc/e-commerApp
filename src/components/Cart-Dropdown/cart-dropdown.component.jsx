import React from 'react';
import CustomButton from '../Custom-Button/custom-button.component';
import { connect } from 'react-redux';

import CartItem from '../Cart-Item/cart-item.component';
import './cart-dropdown.styles.scss';

const Cart = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItems
})
export default connect(mapStateToProps)(Cart);