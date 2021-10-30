import './App.css';

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Slestcon2021 from './components/Slestcon2021/Slestcon2021';
import Slestcon2022 from './components/Slestcon2022/Slestcon2022';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Navigation />
				<Switch>
					<Route exact path="/">
						<Redirect to="/Slestcon2022" />
					</Route>
					<Route exact path="/Slestcon2021" component={Slestcon2021} />
					<Route exact path="/Slestcon2022" component={Slestcon2022} />
					<Route exact path="/Faq" component={Faq} />
					<Route exact path="/Contact" component={Contact} />
				</Switch>
			</div>
		);
	}

}

export default App;

