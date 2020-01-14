import React from "react";

import { List, ListItem, ListItemText, Divider, Checkbox } from "@material-ui/core"
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";


const query = loader("./getProducts.graphql");


function ListOfProductsElement() {
    const { loading, error, data } = useQuery(query);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.products.map(({ id, name }) => (
        <ListItem button>
            <ListItemText primary={name} />
            <Checkbox title="Checkbox"></Checkbox>
        </ListItem>
    ));
}


export const ListOfProducts: React.FC = () => {

    return (
        <div style={{
            overflowY: "scroll",
            height: "400px"
        }}>
            <List component="nav" aria-label="mailbox folders">
                <ListOfProductsElement />
            </List>
        </div>
    )
}