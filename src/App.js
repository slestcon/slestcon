// import logo from './logo.svg';
import './App.css';

import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

class App extends React.Component {
  
  render() {
		return (
			<div className="App">
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		);
	}

}

export default App;
