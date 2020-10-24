import React, { Fragment, Component } from "react";
import PropTypes from 'prop-types';
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar title='Github Finder' />
				<h1>Hello </h1>
			</div>
		);
	}
}
export default App;
