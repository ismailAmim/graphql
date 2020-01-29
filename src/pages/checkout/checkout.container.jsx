import React from 'react';

import { Query} from 'react-apollo';
import { gql }  from 'apollo-boost';

import CheckoutPage from './checkout.component';

// we make a query request
// dynamically using getCollectionsByTitle  
// to pass variables -- like title as a string 
const GET_CART_ITEMS_AND_TOTAL = gql`
    {
        cartItems @client
        cartTotal @client
    }
`;

const CheckoutPageContainer =()=> (
    // we witll take a query where 
    // query prop is the gql function
    // variables is the match title
  <Query query ={GET_CART_ITEMS_AND_TOTAL} >
      {// we will destruct and put the getcollectionbytitle 
         // returns into data
           ({ data : { cartItems,cartTotal }}) => (
              <CheckoutPage cartItems ={cartItems} 
                                   total={cartTotal}/>
           )
        }
  </Query>
);

export default CheckoutPageContainer; 