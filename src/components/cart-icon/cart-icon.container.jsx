import React from 'react';

import { /* Mutation, Query, */ graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import { gql }  from 'apollo-boost';

import CartIcon from './cart-icon.component';

// we make a query request
// dynamically using toggleCartHidden  
// that changes cartHidden property

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
      toggleCartHidden @client
}
`;

const GET_ITEM_COUNT = gql`
{
    itemCount @client
}
`;
// return itemCount from  data
// return toggleCartHidden funct
const CartIconContainer =({ data : {itemCount},toggleCartHidden})=> (
    <CartIcon toggleCartHidden ={toggleCartHidden} 
                      itemCount={itemCount}/>);
     /* <Query query = { GET_ITEM_COUNT }>
    {     
    ({data: {itemCount}})=>( 
      <Mutation mutation ={TOGGLE_CART_HIDDEN} >
        {// we will destruct and put the getcollectionbytitle 
         // returnsinto data
           toggleCartHidden => <CartIcon toggleCartHidden ={toggleCartHidden} 
                                                 itemCount={itemCount}/>
        }
      </Mutation>)
   
    }
 </Query> */
 


export default compose(
    graphql(GET_ITEM_COUNT),
    graphql(TOGGLE_CART_HIDDEN,{name : 'toggleCartHidden'})
    )(CartIconContainer); 