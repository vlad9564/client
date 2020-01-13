import React from 'react';
import _404 from "../../images/404.png";

export const PageNotFound: React.FC = () => {
    const cssStyel = {
        text: {
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "70px"
        },
        image: {
            marginTop: "20px"
        }
    }
    return (
        <div>
            <div style={cssStyel.text}>
                404
                </div>
            <div style={cssStyel.text}>
                Page not found
                </div>
            <div style={cssStyel.image}>
                <img src={_404} alt="Logo" height="200px"></img>
            </div>
        </div>
    );
}