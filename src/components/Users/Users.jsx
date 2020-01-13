import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery, useMutation, } from "@apollo/react-hooks";
import { loader } from 'graphql.macro';
const query = loader("./getUsers.graphql");


// const client = new ApolloClient({
//     uri: "https://traveldevvlad.herokuapp.com/graphql"
// });


function ListOfUsers() {
    const { loading, error, data } = useQuery(query);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;



    return data.users.map(({ id, name, age }) => (
        <div key={id}>
            <p>
                {name}{age}
            </p>
        </div>
    ));

}

export function Users() {
    return (
        <div>
            <ListOfUsers></ListOfUsers>
        </div>
    )
}
