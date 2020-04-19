export const addItemToCart = (cartItems, itemToAdd) => {
    // check if the new item is in cart itmes in state
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
    if(existingCartItem){ // if it is there
        return cartItems.map(cartItem => 
            cartItem.id === itemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem)
    } //else 
    return [...cartItems, {...itemToAdd, quantity: 1}]
}