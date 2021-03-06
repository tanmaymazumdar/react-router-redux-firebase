import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useFirebase } from './hooks/FirebaseProvider'

const Home = _ => {
	const firebase = useFirebase()
	const { state, dispatch } = firebase

	return (
		<div>
			{state.count}
			<h2>Home</h2>
			<button onClick={_ => dispatch({ type: 'increment' })}>+</button>
		</div>
	)
}

const About = _ => {
	return (
		<div>
			<h2>About</h2>
		</div>
	)
}

const Dashboard = () => {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	)
}

/**
 * Define initial critical route.
 */
const App = _ => {
	const fb = useFirebase()
	// TODO Add check for authentication

	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/dashboard'>
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
