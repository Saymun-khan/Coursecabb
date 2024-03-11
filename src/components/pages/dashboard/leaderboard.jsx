import React from 'react'
import Navbar from '../homePages/Navbar'
import LeaderBoardComponent from './leaderboardComponent'

const LeaderBoard = () => {
  return (
    <div>
        <Navbar />
        <div>
            <h1 className='text-center p-4 mt-6'>Leaderboard</h1>
            <div className='ml-20'>
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            <LeaderBoardComponent />
            </div>
        </div>
    </div>
  )
}

export default LeaderBoard