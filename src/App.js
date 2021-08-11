import React from 'react';
import { useSelector } from 'react-redux';
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
	const displayFooter = useSelector(state => state.footer.isFooterVisible)

  return (
		<Router>
			<div className="app">
				<HeaderComp />
				<Switch>
					<Route path='/portfolio'>
						<PortfolioComp />
					</Route>
					<Route path='/education'>
						<EducationComp />
					</Route>
					<Route path='/experience'>
						<ExperienceComp />
					</Route>
				</Switch>
				{ displayFooter? <FooterComp /> : null }
			</div>
		</Router>
  );
}

export default App;
