import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
	return (
		<div>
			<nav className='navbar bg-primary'>
				<h1>{title}</h1>
			</nav>
		</div>
	);
};

Navbar.defaultProps = {
	title: "Github Finder",
	icon: "fab fa-github",
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
