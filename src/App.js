import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import './App.css';
import HeaderComp from './components/Header-Comp';

function App() {
  return (
		<Router>
			<div className="App">
				<HeaderComp />
				<Switch>
					<Route path='/portfolio'>
						Portfolio!!!
					</Route>
					<Route path='/education'>
						Education!!!
					</Route>
					<Route path='/experience'>
						Experience!!!
					</Route>
				</Switch>

			</div>


		</Router>
  );
}

export default App;
