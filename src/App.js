import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import JobDetails from './views/JobDetails/JobDetails';
import NotFound from './views/NotFound/NotFound';

/**
 * App
 * @description component responsible for rendering application routes
 * @returns App component
 */
const App = () => (
    <BrowserRouter>
        <Header />

        <Switch>
            <Route exact path='/jobs' component={Home} />
            <Route path='/jobs/:id' component={JobDetails} />
            <Route path='/404' component={NotFound} />
            <Redirect exact from='/' to='/jobs' />
            <Redirect to='/404' />
        </Switch>
    </BrowserRouter>
)

export default App;
