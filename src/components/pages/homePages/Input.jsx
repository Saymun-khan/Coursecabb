import React from 'react'

const Input = ({Label,Type,Value,clickHandler,Placeholder,Name,Errors,Ref}) => {
  return (
    <>
    <div className="-space-y-px rounded-md shadow-sm">
        <div>
            <input
               name={Name}
               type={Type}
               value={Value}
               required
               ref={Ref}
               className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                onChange={clickHandler}
                placeholder={Placeholder}
            />
        </div>
        <div>
          <h1 className='mt-2 text-red-500'>{Errors}</h1>
        </div>
    </div>
  </>
                      
  )
}

export default Input