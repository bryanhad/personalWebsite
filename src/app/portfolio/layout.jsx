import React from 'react'

const layout = ({children}) => {
  return (
    <main>
        <h1 className='text-[100px] font-extrabold'>Our Works</h1>
        {children}
    </main>
  )
}

export default layout