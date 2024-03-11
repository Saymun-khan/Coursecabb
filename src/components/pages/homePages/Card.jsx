import React from 'react'

const Card = ({ImgsrcOne,ImgsrcTwo,TextOne,TextTwo,TextThree}) => {
  return (
    <div>
        <div className='card'>
            <div>
                <img src={ImgsrcOne} alt='pic' />
                <h1>{TextOne}</h1>
            </div>
            <div>
                <img src={ImgsrcTwo} alt='pic' />
                <h1>{TextTwo}</h1>
            </div>
            <div>
                <img src={ImgsrcTwo} alt='pic' />
                <h1>{TextThree}</h1>
            </div>
        </div>
    </div>
  )
}

export default Card