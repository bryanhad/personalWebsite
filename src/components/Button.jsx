import Link from 'next/link'
import React from 'react'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
        <button className='p-5 bg-coolGreen text-white rounded-md max-w-max'>
            {text}
        </button>
    </Link>
  )
}

export default Button