import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from '../pages/Home'
import About from "../pages/About"
import Users from "../pages/Users"

const Routes = () => {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes