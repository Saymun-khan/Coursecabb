import React from 'react'

const AuthText = ({AuthText}) => {
  return (
    <div>
         <div className="flex items-center justify-between">

                <div className="text-sm mb-2">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    {AuthText}
                </a>
                </div>
            </div>
    </div>
  )
}

export default AuthText