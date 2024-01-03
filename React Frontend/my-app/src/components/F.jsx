import React from 'react'
import { UserConsumer } from './userContext'

function F() {
    return (
        <div>
            <UserConsumer>
                {
                    username => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        </div>
    )
}

export default F