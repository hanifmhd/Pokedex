import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import React from 'react';
import Router from './src/routes';

const client = new ApolloClient({
  uri: 'https://pokemon-fclzip.pahamify.com/',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          project: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}
