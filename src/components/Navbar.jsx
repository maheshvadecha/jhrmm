import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<div>
				<ul>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/project">Project</Link>
					</li>
					<li>
						<Link to="/service">Service</Link>
					</li>
					<li>
						<Link to="/skill">Skill</Link>
					</li>
					<li>
						<Link to="/technology">Technology</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
