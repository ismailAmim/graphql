import React from 'react';

import { Query} from 'react-apollo';
import { gql }  from 'apollo-boost';

import Header from './header.component';

// we make a query request
// dynamically using getCollectionsByTitle  
// to pass variables -- like title as a string 
const GET_CART_HIDDEN = gql`
{
    cartHidden @client
}
`;

const HeaderContainer =()=> (
    // we witll take a query where 
    // query prop is the gql function
    // variables is the match title
<Query query ={GET_CART_HIDDEN} >
        {// we will destruct and put the getcollectionbytitle 
         // returnsinto data
            ({data: {cartHidden}})=> <Header hidden ={cartHidden}/>    
        }
   </Query>
);

export default HeaderContainer; 