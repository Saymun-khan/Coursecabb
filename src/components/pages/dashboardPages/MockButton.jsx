import React from 'react'

const MockButton = ({array}) => {
    const click = (e) => {
        e.preventDefault()
        console.log(array)
    }
  return (
    <div>
        <button onClick={click}>MOCK BUTTON</button>
    </div>
  )
}

export default MockButton