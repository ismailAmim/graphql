import {gql} from 'apollo-boost';

export const typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden : Boolean!
    }
`;
// get cartHidden value on the local cache
const GET_CART_HIDDEN = gql`
{
    cartHidden @client
}
`;
// declare Mutations
export const resolvers ={
    Mutation : {
        toggleCartHidden : (_root,_args, /* _context */{cache}/* , _info */) => {
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
        }
    } 
}