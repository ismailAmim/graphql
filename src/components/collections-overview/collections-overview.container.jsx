import React from 'react';

import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
 
import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS= gql`
    {
        collections {
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
`
;

const CollectionsOverviewContainer = ()=> (
    <Query query = {GET_COLLECTIONS}>
    {
        ({loading, /* error, */ data })=>{
            /* console.log({loading});
            console.log({error});
            console.log({data}); */
            // errors are just handled with apollo
            if(loading) return <Spinner/>;
            console.log(data.collections);
            return <CollectionsOverview collections={data.collections}/>;
        }
    }
    </Query>
);
export default CollectionsOverviewContainer;