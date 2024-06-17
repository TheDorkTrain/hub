import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import './App.css';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {

  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <div>
        <Outlet />
      </div>
    </ApolloProvider>
    </>
  );

}


export default App;

