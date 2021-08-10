import { Link } from 'react-router-dom';

const HeaderComp = () => {
	return (
		<header>
			<h1>Stefan Sjöman</h1>
			<nav>
				<ul>
					<li>
						<Link to='/portfolio'>Portfolio</Link>
					</li>
					<li>
						<Link to='/education'>Education</Link>
					</li>
					<li>
						<Link to='/experience'>Experience</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default HeaderComp;