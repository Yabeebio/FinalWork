import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button clicked")
    }
  
    return (
    <div>
        <button type="button" onClick={clickHandler}>Click on Me</button>
    </div>
  )
}

export default FunctionClick