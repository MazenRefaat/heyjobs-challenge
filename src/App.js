import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
const Header = React.lazy(()=> import('./components/Header/Header'));
const Home = React.lazy(()=> import('./views/Home/Home'));
const JobDetails = React.lazy(()=> import('./views/JobDetails/JobDetails'));
const NotFound = React.lazy(()=> import('./views/NotFound/NotFound'));
/**
 * App
 * @description component responsible for rendering application routes
 * @returns App component
 */
const App = () => (
    <React.Suspense fallback={<div>Loading...</div>}>
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
    </React.Suspense>
)

export default App;
