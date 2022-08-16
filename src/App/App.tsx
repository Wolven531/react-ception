import React, { useEffect } from 'react'
import './App.css'

export function App() {
	useEffect(() => {
		console.log('[App] loaded, about to require App2')

		require('../App2')
	}, [])

	const handleClick = () => {
		console.log('[App] button was clicked')
	}

	return (
		<div
			className="app"
			id="app"
		>
			<h1>React 18</h1>
			<p>App 1</p>
			<button onClick={handleClick}>App button</button>
			<hr />
			<div id="placeholder"></div>
		</div>
	)
}
