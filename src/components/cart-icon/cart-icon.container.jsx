import React from 'react';

import { Mutation} from 'react-apollo';
import { gql }  from 'apollo-boost';

import CartIcon from './cart-icon.component';

// we make a query request
// dynamically using getCollectionsByTitle  
// to pass variables -- like title as a string 
const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
    toggleCartHidden @client
}
`;

const CartIconContainer =()=> (
    // we witll take a query where 
    // query prop is the gql function
    // variables is the match title
<Mutation mutation ={TOGGLE_CART_HIDDEN} >
        {// we will destruct and put the getcollectionbytitle 
         // returnsinto data
           toggleCartHidden => <CartIcon toggleCartHidden ={toggleCartHidden}/>
        }
   </Mutation>
);

export default CartIconContainer; 