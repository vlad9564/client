import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from "./components/Main/Main";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery, useMutation, } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://traveldevvlad.herokuapp.com/graphql"
});


const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Main />
      </div>
    </ApolloProvider>
  );
}

export default App;
