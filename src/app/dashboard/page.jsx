"use client"
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'


const DashBoard = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log(data)


  return (
    <div>DashBoardPage</div>
  )
}

export default DashBoard