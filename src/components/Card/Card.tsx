import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartPNG from "../../images/shcart.png";
import TestPNG from "../../images/test.png";

const useStyles = makeStyles({
    card: {
        minWidth: 200,
        // maxWidth: 300,
        minHeight: 200,
        // maxHeight: 300,
        // width: "auto",
        margin: "10px",
        // height: "auto"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles({});
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Shop
                </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Lista de cumparaturi
                </Typography>
                    <img src={ShoppingCartPNG} height="50px" alt="img"></img>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => window.open("/shop", "_self")} >Open the app</Button>
                </CardActions>
            </Card>

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Test
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Test the app
                    </Typography>
                    <img height="50px" src={TestPNG} alt="img"></img>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => window.open("/test", "_self")} >Open the app</Button>
                </CardActions>
            </Card>


            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Test
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Test the app
                    </Typography>
                    <img height="50px" src={TestPNG} alt="img"></img>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => window.open("/test", "_self")} >Open the app</Button>
                </CardActions>
            </Card>
        </>
    );
}