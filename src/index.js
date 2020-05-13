import React from 'react'
import { render } from 'react-dom'

import { FirebaseProvider } from './hooks/FirebaseProvider'
import config from './config'
import App from './App'

render(
	<FirebaseProvider firebase={window.firebase} config={config}>
		<App />
	</FirebaseProvider>,
	document.getElementById('root'),
)
