import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<div className="text-cyan-300 flex justify-evenly pt-5">
				<img
					src={require('../assets/image/jhrmmLogo.jpg')}
					width='140'
					height='140'
				/>
				<ul className="flex justify-end gap-4 text-base font-serif py-4">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					{/* <li>
						<Link to="/contact">Contact</Link>
					</li> */}
					<li>
						<Link to="/project">Project</Link>
					</li>
					<li>
						<Link to="/service">Service</Link>
					</li>
					<li>
						<Link to="/team">Teams</Link>
					</li>
					<li>
						<Link to="/technology">Technology</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
