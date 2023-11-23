'use client'
import React, { useEffect, useState } from 'react'

const Clock: React.FC = () => {
  const [time, setTime] = useState('Loading...')

  useEffect(() => {
    setTime(new Date().toLocaleTimeString())
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-row items-center'>
      <p className='text-xl'>{time}</p>
    </div>
  )
}

export default Clock