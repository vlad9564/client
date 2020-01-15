import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from "./components/Main/Main";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery, useMutation, } from "@apollo/react-hooks";
import { ThemeProvider, makeStyles, Theme, createStyles } from "@material-ui/core"
import { defaultTheme } from "./components/Theme/Theme";

const client = new ApolloClient({
  uri: "https://traveldevvlad.herokuapp.com/graphql"
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // backgroundColor: "#a39193",
      height: "",
      width: "100%"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "white"
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles({});
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApolloProvider client={client}>
        <div className="App" >
          <Main />
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
