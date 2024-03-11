import React from 'react'

const InputProfile = ({Text}) => {
  return (
    <div>
        <div className="grid grid-cols-12 gap-6">
                    
                    <div className="col-span-12 sm:col-span-3 mb-4">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                        {Text}
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className='border-red-300 border-b-2 outline-none focus:border-green-400'
                      />
                    </div>
                    </div>
    </div>
  )
}

export default InputProfile