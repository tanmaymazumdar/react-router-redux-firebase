import React, { useMemo, createContext, useContext } from 'react'

/**
 * Create a firebase context for FirebaseProvier.
 */
export const FirebaseContext = createContext(null)

/**
 * The Firebase Context Api
 *
 * @example <caption>Basic</caption>
 *
 * import { FirebaseProvider } from './hooks/FirebaseProvider'
 * import 'firebase/auth'
 * import 'firebase/database'
 * ...
 *
 * const config = {
 *     appId: process.env.REACT_APP_APP_ID,
 *     apiKey: process.env.REACT_APP_API_KEY,
 *     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
 *     databaseURL: process.env.REACT_APP_DATABASE_URL,
 *     projectId: process.env.REACT_APP_PROJECT_ID,
 *     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
 *     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
 * }
 *
 * <FirebaseProvier
 *    config={config}
 *    firebase={firebase}
 * >
 *     <App />
 * </FirebaseProvider>
 *
 * @param {React.children} children The provided children.
 * @param {React.children} firebase The firebase object.
 * @param {React.children} config The firebase config object.
 */
export const FirebaseProvider = ({ children, firebase, config }) => {
	const extendedFirebase = useMemo(() => {
		const extendedFirebase = firebase.initializeApp(config)

		return {
			name: extendedFirebase.name,
			auth: extendedFirebase.auth(),
		}
	}, [firebase, config])
	return <FirebaseContext.Provider value={extendedFirebase}>{children}</FirebaseContext.Provider>
}

/**
 * @name useFirebase
 * @description React hook that provides `firebase` object.
 * @returns {object} - Firebase instance
 * @example <caption>Basic</caption>
 * import { useFirebase } from './hooks/FirebaseProvider'
 *
 * export default function AddData() {
 *   const firebase = useFirebase()
 *
 *   function addTodo() {
 *     const exampleTodo = { done: false, text: 'Sample' }
 *     return firebase.push('todos', exampleTodo)
 *   }
 *
 *   return (
 *     <div>
 *       <button onClick={addTodo}>
 *         Add Sample Todo
 *       </button>
 *     </div>
 *   )
 * }
 */
export const useFirebase = useContext(FirebaseContext)
