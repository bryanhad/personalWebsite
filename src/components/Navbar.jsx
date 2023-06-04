"use client"
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 4,
    title: 'About',
    url: '/about'
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard'
  },
]

const Navbar = () => {
  return (
    <nav className='h-[100px] flex justify-between items-center'>
      <Link href='/' className='font-bold text-lg '>BryanHad</Link>
      <div className='flex items-center gap-[20px]'>
        <DarkModeToggle/>
        {links.map(link => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      </div>
      <button className='p-[5px] bg-coolGreen text-white rounded-md' onClick={() => {
        console.log('logged out')
      }}>Logout</button>
    </nav>
  )
}

export default Navbar