import {
   ApolloClient,
   InMemoryCache,
} from "@apollo/client";

import { relayStylePagination } from "@apollo/client/utilities";

const onCache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            posts: relayStylePagination()
         },
      },
   },
});

const error = ({ networkError, graphQLErrors }) => {
   console.log('graphQLErrors', graphQLErrors)
   console.log('networkError', networkError)
};


const client = new ApolloClient({
   uri: 'https://graphqlzero.almansi.me/api',
   cache: onCache,
   onError: error
});

export default client