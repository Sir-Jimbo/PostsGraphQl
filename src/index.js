import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import client from './services/appolloClient';
import {
  ApolloProvider,
} from "@apollo/client";


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)