import React, { useState, useEffect } from 'react';
import BackgroundImagePNG from "../../images/background.png"
import { TextField, Typography, Button } from "@material-ui/core"

export const Login = (props) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    return (
        <div style={{
            backgroundImage: "url(" + BackgroundImagePNG + ")",
            width,
            height
        }}>
            <div style={{ paddingTop: "2%", display: "inline-grid" }}>
                <Typography>Username</Typography>
                <TextField
                    style={{ color: "white" }}
                    color="primary"
                    required
                    id="outlined-required"
                    label="Required"
                    variant="outlined"
                />
                <Typography>Password</Typography>
                <TextField
                    style={{ color: "white" }}
                    color="primary"
                    required
                    id="outlined-required"
                    label="Required"
                    variant="outlined"
                    type="password"
                />
                <Button>Login</Button>
            </div>
        </div>
    )
}