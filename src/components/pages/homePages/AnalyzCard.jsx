import React from 'react'

const AnalyzCard = ({Number,Text}) => {
  return (
    <div>
        <div className='analyzecard'>
            <h1>{Number}</h1>
            <p>{Text}</p>
        </div>
    </div>
  )
}

export default AnalyzCard