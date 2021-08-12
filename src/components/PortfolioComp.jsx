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
			<a href="portfolio/Unsplash/index.html" target="_blank">Unsplash Images</a>
			<a href="portfolio/StarWarsV4/index.html" target="_blank">Star Wars</a>
			<a href="portfolio/BeerProject/index.html" target="_blank">Beer Project</a>
			<a href="portfolio/InsuranceProject/index.html" target="_blank">Insurance Project</a>
			<a href="portfolio/TärningV3/index.html" target="_blank">eDice</a>
		</div>
	);
}

export default PortfolioComp;