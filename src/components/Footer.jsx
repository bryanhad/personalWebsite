"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {

  const links = [
    {
      image: '/1.png', 
      alt: 'Instagram Account',
      href: ''
    },
    {
      image: '/2.png', 
      alt: 'Github Account',
      href: ''
    },
    {
      image: '/3.png', 
      alt: 'WhatsApp Contact',
      href: ''
    },
  ]

  return (
    <footer className="h-[50px] flex items-center justify-between">
      <div>&copy; 2023 BryanH. All rights reserved.</div>
      <div className="flex items-center gap-[10px]">
        {links.map(link => (
          <Link key={link.alt} href={link.href}>
            <Image className="opacity-[0.6] cursor-pointer hover:opacity-[0.8]" src={link.image} alt={`Bryan Hadinata's ${link.alt}`} width={15} height={15}/>
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer