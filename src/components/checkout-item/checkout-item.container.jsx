import React from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

import { gql } from 'apollo-boost';

import CheckoutItem from './checkout-item.component';

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart ($item : Item!) {
        addItemToCart (item: $item) @client
    }
`;

const REMOVE_ITEM_TO_CART = gql`
    mutation RemoveItemToCart ($item : Item!) {
        removeItemToCart (item: $item) @client
    }
`;

const CLEAR_ITEM_TO_CART = gql`
    mutation ClearItemToCart ($item : Item!) {
        clearItemFromCart (item: $item) @client
    }
`;

const CollectionItemContainer = ({  
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    ...otherProps
})=> (
    <CheckoutItem 
        {...otherProps}
        addItem = { item => addItemToCart({variables : { item }})}
        removeItemFromCart = { item => removeItemFromCart({variables : { item }})}
        clearItemFromCart = { item => clearItemFromCart({variables : { item }})}
        />
    
);

export default compose (
    graphql(ADD_ITEM_TO_CART,{name: 'addItemToCart'}),
    graphql(REMOVE_ITEM_TO_CART,{name: 'removeItemFromCart'}),
    graphql(CLEAR_ITEM_TO_CART,{name: 'clearItemFromCart'})
    )(CollectionItemContainer);