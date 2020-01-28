import {gql} from 'apollo-boost';
import { addItemToCart, getCartItemCount} from './cart.utils';

export const typeDefs = gql`
    extend type Item {
        quantity : Int
    }
    extend type Mutation {
        ToggleCartHidden : Boolean!
        AddItemToCart(item: Item! ) : [Item]!
    }
`;
// get cartHidden value on the local cache
const GET_CART_HIDDEN = gql`
{
    cartHidden @client
}
`;
const GET_ITEM_COUNT = gql`
{
    itemCount @client
}
`;

const GET_CART_ITEMS = gql`
{
    cartItems @client
}
`;
// declare Mutations
export const resolvers ={
    Mutation : {
        toggleCartHidden : (_root, _args, /* _context */{cache}/* , _info */) => {
            // read cartHidden value
            // then write writeQuery
            const {cartHidden} = cache.readQuery({
                query: GET_CART_HIDDEN
                });

            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data:  {cartHidden : !cartHidden }
            })
            return !cartHidden;
        }, 
        addItemToCart : (_root,/* _args*/ {item}, {cache})=>{
            const { cartItems } = cache.readQuery({
                query : GET_CART_ITEMS
            });

            const newCartItems = addItemToCart(cartItems, item);
            
            cache.writeQuery({
                query: GET_ITEM_COUNT,
                data: { itemCount: getCartItemCount(newCartItems)}
            });
            
            cache.writeQuery({
                query : GET_CART_ITEMS,
                data :{ cartItems : newCartItems}
            });
            //console.log(cartItems);
            return newCartItems;
        }
    } 
}