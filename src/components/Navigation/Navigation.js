import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<div className="container-fluid">
			<NavLink className="navbar-brand" to="/">SlestCon</NavLink>
			
			<button class="navbar-toggler" 
				type="button" 
				data-bs-toggle="collapse" 
				data-bs-target="#navbarSupportedContent" 
				aria-controls="navbarSupportedContent" 
				aria-expanded="false" 
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
		</div>
		<div clas="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<NavLink className="nav-link" to="/Slestcon2021">SlestCon2021</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/Slestcon2022">SlestCon2022</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/Contact">Contact</NavLink>
				</li>
			</ul>
		</div>
		
	</nav>
);

export default Navigation;
