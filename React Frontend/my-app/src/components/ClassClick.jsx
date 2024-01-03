import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('Class clicked')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class on Me</button>
            </div>
        )
    }
}

export default ClassClick