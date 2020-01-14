import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import { Login } from "../Login/Login"
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
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

export function Header(props) {

    const [open, setOpen] = React.useState(false);


    const handleOpenDialog = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    debugger;
    const classes = useStyles({});
    const onSignOut = () => {
        // localStorage.clear();
        // window.open("/login");
        // props.history.push('/login');
        // return <Login />   
        window.close();
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography variant="h6" className={classes.title}>
                        Apps
                     </Typography> */}
                    <Link className={classes.title} to="/" >Apps</Link>

                    <Button color="inherit" onClick={handleOpenDialog}>Help</Button>
                    <Button color="inherit" onClick={onSignOut}>Sign Out</Button>
                </Toolbar>
            </AppBar>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                           Google, even when no apps are running.
                        </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
