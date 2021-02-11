import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './homePage';
import Contact from './contactForm';
import History from './historyPage';
import header from './header';


const Routes = function() {
    return (
        <BrowserRouter>
            <div>
                <Route name="Main" component={header} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/new" component={Contact} />
                    <Route path="/history" component={History} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};
export default Routes;