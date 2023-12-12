'use client'
import React, { useEffect, useState } from 'react'

interface ClockProps {
  onClick?: () => void;
}

// This module is just a clock.

const Clock: React.FC<ClockProps> = ({ onClick }) => {
  const [time, setTime] = useState('Loading...')

  useEffect(() => {
    setTime(new Date().toLocaleTimeString())
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-row items-center cursor-pointer' onClick={onClick}>
      <p className='text-xl'>{time}</p>
    </div>
  )
}

export default Clock