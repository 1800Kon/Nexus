'use client'
import React, { useEffect, useState } from 'react'

interface TrackerProps {
    onClick?: () => void;
}

// This module is a tracker that displays something no clue what yet.

const Tracker: React.FC<TrackerProps> = ({ onClick }) => {

    return (
        <div className='flex items-center justify-center cursor-pointer h-full' onClick={onClick}>
            <p className='text-xl'>Tracker</p>
        </div>
    )
}

export default Tracker