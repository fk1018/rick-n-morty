import React from 'react';
import { Store } from './Store';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FavPage from './FavPage';
export default function App(props: any): JSX.Element {
	const { state } = React.useContext(Store);

	return (
		<React.Fragment>
			<Router>
				<header className="header">
					<div>
						<h1>Rick and Morty</h1>
						<p>Pick your favorite episode!!!</p>
					</div>
					<div>
						<Link to="/">Home</Link>
						<Link to="/favs">Favorite(s): {state.favorites.length}</Link>
					</div>
				</header>
				<Switch>
					<Route path="/Favs">
						<FavPage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</React.Fragment>
	);
}
