import { NavLink } from 'react-router-dom';

import './header-comp.css';

const HeaderComp = () => {

	return (
		<header>
			<NavLink to='/'><h1>Stefan Sjöman</h1></NavLink>
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