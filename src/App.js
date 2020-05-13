import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = _ => {
	return (
		<div>
			<h2>Home</h2>
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

const App = _ => (
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

export default App
