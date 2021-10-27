import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
	<nav className="nav">
		<ul className="nav">
			<li className="nav-item">
				<NavLink className="nav-link" to="/">Home</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/slestcon2020">Slestcon2020</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/slestcon2021">SlestCon2021</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/slestcon2022">SlestCon2022</NavLink>
			</li>
		</ul>
	</nav>
);

export default Navigation;
