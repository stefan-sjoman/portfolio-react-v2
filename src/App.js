import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import HeaderComp from './components/HeaderComp';
import PortfolioComp from './components/PortfolioComp';
import EducationComp from './components/EducationComp';
import ExperienceComp from './components/ExperienceComp';
import FooterComp from './components/FooterComp';

function App() {
  return (
		<Router>
			<div className="app">
				<HeaderComp />
				<Switch>
					<Route path='/portfolio'>
						<PortfolioComp />
						<FooterComp />
					</Route>
					<Route path='/education'>
						<EducationComp />
						<FooterComp />
					</Route>
					<Route path='/experience'>
						<ExperienceComp />
						<FooterComp />
					</Route>
				</Switch>
			</div>
		</Router>
  );
}

export default App;
