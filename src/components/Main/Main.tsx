import React from "react";
import { Header } from "../Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../Home/Home";
import { Admin } from "../Admin/Admin";
import { PageNotFound } from "../PageNotFound/PageNotFound";

export const Main = () => {

    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path={["/", "/home"]} exact component={Home} />
                    <Route path={"/admin"} exact component={Admin} />
                    <Route path={"*"} component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    )

}