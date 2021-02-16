import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { render } from 'react-dom';
import DashboardPage from './DashboardPage/DashboardPage';
import ManagerPage from './ManagerPage/ManagerPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={DashboardPage} />
                <Route exact path='/dashboard' component={DashboardPage} />
                <Route exact path='/manager' component={ManagerPage} />
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default App

// Inject App component to the DOM:
const appDiv = document.getElementById("app");
render(<App />, appDiv);