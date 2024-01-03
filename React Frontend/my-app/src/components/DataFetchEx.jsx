import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './stylesheet.css'

function DataFetchEx() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [todos, setTodos] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => {
                setLoading(false)
                setTodos(response.data)
                setError('')
            })
            .catch((error) => {
                setLoading(false)
                setTodos({})
                setError('Houston, we have a problem')
            })
    }, []);

    return (
        <React.Fragment>
            {loading ? 'Loading...' : todos.map((todos, index) => {
                return (
                    <div className={todos.completed ? 'greenTrue' : 'redFalse'} key={index}>
                        Title : {todos.title}
                        <br />
                        User ID : {todos.userId}
                        <br />
                        State : {todos.completed ? 'Completed' : 'Not completed'}
                    </div>
                )
                    // OU SINON
                    
                /* let completed = todos.completed

                return (
                    completed ? (

                        <div className='greenTrue' key={index}>
                            Title : {todos.title}
                            <br />
                            UserID : {todos.userId}
                            <br />
                            State : Completed
                        </div>
                    ) : (
                        <div className='redFalse' key={index}>
                            Title : {todos.title}
                            <br />
                            UserID : {todos.userId}
                            <br />
                            State : Not completed
                        </div>
                    )
                ) */
            })}
        </React.Fragment>
    )
}

export default DataFetchEx