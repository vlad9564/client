import React, { useState } from "react";
import { Header } from "../Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../Home/Home";
import { Admin } from "../Admin/Admin";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Login } from "../Login/Login";

export const Main = () => {
    const handleUserLogged = () => {

    }

    let initialStateForLoggUser = false;
    // localStorage.setItem("isAuth", "1");
    const isUserLoggedIn = localStorage.getItem('isAuth');
    if (isUserLoggedIn === "1") { initialStateForLoggUser = true }

    // Check local storage
    const [isLoggedIn, setIsLoggedIn] = useState(initialStateForLoggUser);

    if (isLoggedIn === true) {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route path={["/", "/home"]} exact component={Home} />
                        <Route path={"/admin"} exact component={Admin} />
                        <Route path={"*"} component={PageNotFound} />
                        <Route path={"/login"} component={Login} />
                    </Switch>
                </Router>
            </div>
        )
    }
    else {
        return (
            <Login
            //  changeIsUserLogged={() => { handleUserLogged }}
            ></Login>
        )
    }
}