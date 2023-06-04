import React from "react"
import { Switch, Route } from "react-router-dom"

import ImportSPPD from "../pages/ImportSPPD"

const Routes = () => {
    return (
        <Switch>
            <Route path="/">
                <ImportSPPD />
            </Route>
        </Switch>
    )
}

export default Routes