import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

function DataFetchReducer() {

    const initialState = {
        loading: true,
        error: '',

        posts: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    posts: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    posts: '',
                    error: "Houston we got a problem"
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            dispatch({ type : 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error =>{
            dispatch({type : 'FETCH_ERROR'})
        })
    })

    return (
        <React.Fragment>
            {state.loading ? 'Loading' : state.posts.map((post, index) =>{
                return (
                    <div key={index}>
                        Post title : {post.title}
                        <br />
                        Description : {post.body}
                        <hr />
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default DataFetchReducer