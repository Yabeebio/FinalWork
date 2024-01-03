import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button.style'

import axios from 'axios'

function AllBlogs() {
	const initialState = {
		loading: true,
		error: '',

		blogs: {}
	}

	const reducer = (state, action) => {
		switch (action.type) {
			case 'FETCH_SUCCESS':
				return {
					loading: false,
					blogs: action.payload,
					error: ''
				}
			case 'FETCH_ERROR':
				return {
					loading: false,
					blogs: '',
					error: "Houston we got a problem"
				}
			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios.get('http://localhost:5000/allblogs')
			.then(response => {
				dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ERROR' })
			})
	}, [])


	return (
		<React.Fragment>
			<div>
				{
					state.loading ? 'Loading...' : state.blogs.map((blog, index) => {
						return (

							<React.Fragment key={index}>
								<div>
									<h1>{blog.titre}</h1>
									<p>{blog.sousTitre}</p>
									<p>{blog.auteur}</p>
									<p>{blog.description}</p>
									<Link to={`/blog/${blog._id}`}>
										<Button backgroundColor="greenyellow">En savoir plus</Button>
									</Link>
								</div>
							</React.Fragment>

						)
					})
				}
			</div >
		</React.Fragment >
	)
}

export default AllBlogs