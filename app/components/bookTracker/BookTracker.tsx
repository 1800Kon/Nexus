'use client'
import React, { useEffect, useState } from 'react'

interface BookTrackerProps {
    onClick?: () => void;
}

// This module is a ticker that displays the current price of a cryptocurrency.

const BookTracker: React.FC<BookTrackerProps> = ({ onClick }) => {

    return (
        <div className='flex flex-row items-center cursor-pointer' onClick={onClick}>
            <p className='text-xl'>Book Tracker</p>
        </div>
    )
}

export default BookTracker