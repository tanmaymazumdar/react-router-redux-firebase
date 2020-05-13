import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// import { reducer as authReducer } from './Auth'

export default function configureStore(history, initialState) {
	const reducers = {
		account: {
			// auth: authReducer,
		},
	}

	const middleware = [thunk, routerMiddleware(history)]
	const rootReducer = combineReducers({
		...reducers,
		router: connectRouter(history),
	})

	return process.env.NODE_ENV === 'development'
		? createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
		: createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)))
}
