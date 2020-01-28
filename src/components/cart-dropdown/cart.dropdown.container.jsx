import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartDropdown from './cart-dropdown.component';

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
}
`;
const GET_CART_ITEMS = gql`
   
    cartItems @client
}
`;

const CartDropdownContainer =()=> (
    // we witll take a query where 
    // query prop is the gql function
    // variables is the match title
<Mutation mutation ={TOGGLE_CART_HIDDEN} >
        {
          toggleCartHidden => (
              <Query query ={GET_CART_ITEMS} >
              {  
                ({data : { cartItems }}) => 
                    (<CartDropdown 
                        toggleCartHidden = {toggleCartHidden} 
                               cartItems = {cartItems}
                    />)
              }
              </Query>)
        }
</Mutation>

);

export default CartDropdownContainer; 