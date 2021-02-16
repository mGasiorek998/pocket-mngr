import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

import './App.module.css';

import DashboardPage from './DashboardPage/DashboardPage';
import ManagerPage from './ManagerPage/ManagerPage';
import Toolbar from './NavigationBar/Toolbar/Toolbar';
import SideDrawer from './NavigationBar/SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

const App = () => {

    const [sideDrawerToggle, setSideDrawerToggle] = useState(false);

    const sideDrawerToggleHandler = () => {
        setSideDrawerToggle(!sideDrawerToggle);
    }

    // Hide side drawer if backdrop was clicked
    const backdropClickHandler = () => {
        setSideDrawerToggle(false);
    }

    // Decide wether or not display backdrop based on sideDrawerToggle state
    let backdrop;

    if (sideDrawerToggle) {
        backdrop = <Backdrop click={backdropClickHandler} />;
    }

    return (
        <Router>
            <div>
                <Toolbar drawerToggleHandler={sideDrawerToggleHandler} />
                <SideDrawer isShown={sideDrawerToggle} />
                {backdrop}
                <main style={{ marginTop: '10vh' }}>
                    <Switch>
                        <Route exact path='/' component={DashboardPage} />
                        <Route exact path='/dashboard' component={DashboardPage} />
                        <Route exact path='/manager' component={ManagerPage} />
                        <Route exact path='/logout'>
                            <h1>LOGGING OUT</h1>
                        </Route>
                        <Redirect to='/' />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App

// Inject App component to the DOM
const appDiv = document.getElementById("app");
render(<App />, appDiv);