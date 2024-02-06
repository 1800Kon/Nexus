'use client'
import React, { useEffect, useState } from 'react'

interface TickerProps {
    onClick?: () => void;
}

// This module is a ticker that displays the current price of a cryptocurrency.

const Ticker: React.FC<TickerProps> = ({ onClick }) => {

    return (
        <div className='flex items-center justify-center cursor-pointer h-full' onClick={onClick}>
            <p className='text-xl'>Ticker</p>
        </div>
    )
}

export default Ticker