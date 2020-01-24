import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/Header/Header';

/**
 * App
 * @description component responsible for rendering application routes
 * @returns App component
 */
const App = () => (
    <BrowserRouter>
        <Header />

        <Switch>
            <Route path='/jobs' component={Home} />
            <Redirect exact from='/' to='/jobs' />
        </Switch>
    </BrowserRouter>
)

export default App;
