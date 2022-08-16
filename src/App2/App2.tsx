import React, { FC } from 'react'

export const App2: FC = () => {
	console.log('[App2] loaded')

	// !!! the below hook breaks App when injected
	// useEffect(() => {
	//     console.log("[App2] loaded in hook")
	// }, [])

	const handleClick = () => {
		console.log('[App2] button was clicked')
	}

	return (
		<div className="app2">
			<p>App 2 (injected)</p>
			<button onClick={handleClick}>App 2 button</button>
		</div>
	)
}
