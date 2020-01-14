import React, { useState } from "react";
import { TextField, Typography, Button, Grid } from "@material-ui/core"
import { useQuery, useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";


const addProductQuery = loader("./Add.graphql");


export const Add = () => {
    const [addProduct] = useMutation(addProductQuery);
    const [product, setProduct] = useState(null);

    const handleChangeProduct = (event) => {
        debugger;
        setProduct(event.target.value);
    }

    const handleAdd = () => {

        addProduct({
            variables: {
                name: product
            }
        })
    }

    return (
        <div>
            <TextField id="standard-basic" label="Product name" onChange={handleChangeProduct} />
            <Button onClick={handleAdd}>Add</Button>
        </div>
    )
}