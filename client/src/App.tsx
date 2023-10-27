import React from 'react';
import logo from './logo.svg';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client';

import './App.css';

import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';


const httpLink = createHttpLink({
	uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
	link: httpLink,

	cache: new InMemoryCache(),
});

function App() {
	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
