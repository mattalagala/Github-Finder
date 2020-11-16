import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

import axios from "axios";
import "./App.css";
import Search from "./components/users/Search";
import Cart from "./components/users/Cart";

const items = [
	{ id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
	{ id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
	{ id: 3, name: "Sour Cream", price: 3.5, qty: 1 },
];

class App extends Component {
	state = {
		users: [],
		loading: false,
	};
	/*Loads default set of users initially */

	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);
	// 	this.setState({ loading: false, users: res.data });
	// }

	// Retrieves users based on input at ..api.github.com/search/users/
	searchUsers = async (text) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data.items, loading: false });
	};

	// Clear users from state

	clearUsers = () => this.setState({ users: [], loading: false });

	render() {
		return (
			<div className='App'>
				<Navbar title='Github Finder' />

				<div className='container'>
					<Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
					{/* <Cart initialItems={items} /> */}
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}
export default App;
