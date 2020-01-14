import React, { useState } from "react";
import { Header } from "../Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../Home/Home";
import { Admin } from "../Admin/Admin";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Login } from "../Login/Login";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";

export const Main = () => {
    const handleUserLogged = () => {

    }

    let initialStateForLoggUser = false;
    // localStorage.setItem("isAuth", "1");

    // Check local storage

    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path={["/", "/home"]} exact component={Home} />
                    <Route path={"/admin"} exact component={Admin} />
                    <Route path={"/shop"} component={ShoppingCart} />
                    <Route path={"*"} component={PageNotFound} />

                </Switch>
            </Router>
        </div>
    )
}