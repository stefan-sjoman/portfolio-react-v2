import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { hideFooter } from '../redux/footer';
import './header-comp.css';

const HeaderComp = () => {
	const dispatch = useDispatch();

	return (
		<header>
			<Link to='/'><h1 onClick={() => dispatch(hideFooter())}>Stefan Sjöman</h1></Link>
			<nav>
				<ul>
					<li>
						<NavLink to='/portfolio' activeClassName='selected'>Portfolio</NavLink>
					</li>
					<li>
						<NavLink to='/education' activeClassName='selected'>Education</NavLink>
					</li>
					<li>
						<NavLink to='/experience' activeClassName='selected'>Experience</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default HeaderComp;