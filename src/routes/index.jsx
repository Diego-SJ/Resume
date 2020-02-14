import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Paths
import { HOME, ABOUT, RESUME, PORTFOLIOS, CONTACT } from './routes';

// Components
import Home from '../components/home';
import About from '../components/about';
import Resume from '../components/resume';
import Contact from '../components/contact';
import Portfolios from '../components/portfolios';

export default function index() {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path={HOME} component={Home} />
					<Route exact path={ABOUT} component={About} />
					<Route exact path={RESUME} component={Resume} />
					<Route exact path={PORTFOLIOS} component={Portfolios} />
					<Route exact path={CONTACT} component={Contact} />
				</Switch>
			</Fragment>
		</Router>
	);
}
