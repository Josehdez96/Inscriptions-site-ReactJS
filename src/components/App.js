import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout.js"
import Badges from "../pages/badges.js"
import BadgeNew from "../pages/BadgeNew.js"
import BadgeDetails from "../pages/BadgeDetailsContainer.js"
import BadgeEdit from "../pages/BadgeEdit.js"
import Home from "../pages/Home.js"
import NotFound from "../pages/NotFound.js"

//Agregamos nuestras dos paginas creadas en una sola
function App() {
    return ( //con el ||Switch|| ya Router solo tiene un hijo y va a renderizar SOLO UNA ruta a la vez, la primera que tome
            <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} /> 
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
            </BrowserRouter>
    );
}

export default App;