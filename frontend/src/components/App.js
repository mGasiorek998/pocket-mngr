// React imoprts
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

// Style import
import './App.module.css';

// React Components imports
import DashboardPage from './DashboardPage/DashboardPage';
import ManagerPage from './ManagerPage/ManagerPage';
import Toolbar from './NavigationBar/Toolbar/Toolbar';
import SideDrawer from './NavigationBar/SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

// Redux imports
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {

    const [sideDrawerToggle, setSideDrawerToggle] = useState(false);

    // handle toggling for the side drawer to show or to hide:
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
        <Provider store={store}>
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
        </Provider>
    )
}

export default App

// Inject App component to the DOM
const appDiv = document.getElementById("app");
render(
    <App />
    , appDiv);