import React from 'react';

import { Query} from 'react-apollo';
import { gql }  from 'apollo-boost';

import CollectionPage from './collection.component';
import Spinner from '../../components/spinner/spinner.component';

// we make a query request
// dynamically using getCollectionsByTitle  
// to pass variables -- like title as a string 
const GET_COLLECTION_BY_TTITLE = gql`
    query getCollectionsByTitle($title : String!) {
        getCollectionsByTitle( title : $title ){
            id 
            title
            items {
                id 
                name
                price
                imageUrl
            }
        }
    }
`;

const CollectionPageContainer =({ match })=> (
    // we witll take a query where 
    // query prop is the gql function
    // variables is the match title
  <Query query ={GET_COLLECTION_BY_TTITLE} 
     variables ={{title: match.params.collectionId }}>
       {// we will destruct and put the getcollectionbytitle 
         // returns into data
           ({loading, data : { getCollectionsByTitle }}) => {
           if (loading) return <Spinner/>
           return <CollectionPage collection ={ getCollectionsByTitle }/>;
           }
        }
  </Query>
);

export default CollectionPageContainer; 