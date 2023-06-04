import React from "react"
import { Switch, Route } from "react-router-dom"

import ImportSPPD from "../pages/ImportSPPD"
import Trips from "../pages/Trips"

const Routes = () => {
    return (
        <Switch>
            <Route path="/trips">
                <Trips />
            </Route>
            <Route path="/">
                <ImportSPPD />
            </Route>
        </Switch>
    )
}

export default Routes