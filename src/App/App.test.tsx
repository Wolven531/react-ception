import React from 'react'
import { render } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
	it('renders view that matches snapshot', () => {
		const view = render(<App />)

		expect(view.asFragment()).toMatchSnapshot()
	})
})
