import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const DarkModeToggle = () => {

  const {toggle, mode:currentMode} = useContext(ThemeContext)

  return (
    <button onClick={toggle} className='w-[42px] h-[24px] border-[1.5px] border-[#53c28b70] rounded-[30px] flex items-center justify-between p-[2px] text-[12px] relative cursor-pointer'>
        <div>🌙</div>
        <div>☀️</div>
        <div className='w-[15px] h-[15px] bg-coolGreen rounded-full absolute' style={currentMode === 'light' ? {left:'2px'} : {right: '2px'}}></div>
    </button>
  )
}

export default DarkModeToggle