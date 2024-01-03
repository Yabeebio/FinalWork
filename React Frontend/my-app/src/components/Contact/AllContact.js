import React, { useEffect, useReducer } from 'react'
import axios from 'axios'


function AllContact() {

	const initialState = {
		loading: true,
		error: '',

		contacts: {}
	}

	const reducer = (state, action) => {
		switch (action.type) {
			case 'FETCH_SUCCESS':
				return {
					loading: false,
					contacts: action.payload,
					error: ''
				}
			case 'FETCH_ERROR':
				return {
					loading: false,
					contacts: '',
					error: "Houston we got a problem"
				}
			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios.get('http://localhost:5000/')
			.then(response => {
				dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ERROR' })
			})
	}, [])


	return (
		<div>
			{
				state.loading ? 'Loading...' : state.contacts.map((contact, index) => {
					return (
						<React.Fragment key={index}>
							<h1>{contact.nom}</h1>
						</React.Fragment>
					)
				})
			}
		</div>
	)
}

export default AllContact