import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showFooter } from '../redux/footer';
import './portfolio-comp.css';

const PortfolioComp = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(showFooter());
	}, [dispatch])

	return (
		<div className="portfolio-comp tone-in">
			<a href="https://sjoman-grocery-list.herokuapp.com/" rel="noreferrer" target="_blank">
				<h2>Grocery List</h2>
				<p>App for users to add groceries to the same list. Fullstack React app with Firebase.</p>
			</a>
			<a href="https://sjoman-hamsterwars-fullstack.herokuapp.com/" rel="noreferrer" target="_blank">
				<h2>Hamsterwars</h2>
				<p>Voting app for the cutest hamsters. Fullstack React app with Firebase.</p>
			</a>
			<a href="portfolio/Unsplash/index.html" target="_blank">
				<h2>Unsplash Images</h2>
				<p>Image search app with images from Unsplash. Vue app with the Unsplash api.</p>
			</a>
			<a href="portfolio/StarWarsV4/index.html" target="_blank">
				<h2>Star Wars</h2>
				<p>Info app about Star Wars. Vue app with the Star Wars Api, SWAPI.</p>
			</a>
			<a href="portfolio/InsuranceProject/index.html" target="_blank">
				<h2>Insurance Project</h2>
				<p>First assignment in school. Designed from figma mockup with HTML and CSS.</p>
			</a>
			<a href="portfolio/TärningV3/index.html" target="_blank">
				<h2>eDice</h2>
				<p>Just a simple dice. Made with JavaScript, HTML and CSS.</p>
			</a>
		</div>
	);
}

export default PortfolioComp;