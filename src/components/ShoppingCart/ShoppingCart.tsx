import React from "react";
import { Add } from './Add/Add'
import { Grid } from "@material-ui/core"
import { ListOfProducts } from "./ListOfProducts/ListOfProducts";


export const ShoppingCart: React.FC = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6} >
                <Add />
            </Grid>
            <Grid item xs={6} >
                <ListOfProducts />
            </Grid>
        </Grid>
    )
}