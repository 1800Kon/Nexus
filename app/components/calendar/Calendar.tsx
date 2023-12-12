'use client'
import React, { useEffect, useState } from 'react'

interface CalendarProps {
    onClick?: () => void;
}

// This module is a ticker that displays the current price of a cryptocurrency.

const Calendar: React.FC<CalendarProps> = ({ onClick }) => {

    return (
        <div className='flex flex-row items-center cursor-pointer' onClick={onClick}>
            <p className='text-xl'>Calendar</p>
        </div>
    )
}

export default Calendar