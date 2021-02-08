import React from 'react';
import {  Route, BrowserRouter, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';
import CreateView from './createView/createView';
import orderRequestListView from './orderRequestView/orderRequestView';


const getRoutes = function() {
    return (
        <BrowserRouter>
            <div>
            <Route name="Main" component={MainView} />
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route path="/create/" component={CreateView} />
                </Switch>
            </div>
        </BrowserRouter>
)
};
export default getRoutes;

//     <Route path="/order-request/" component={ orderRequestListView }/>