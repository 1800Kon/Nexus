'use client'
import React, { useEffect, useState } from 'react'

interface GithubProps {
    onClick?: () => void;
}

// This module is a ticker that displays the current price of a cryptocurrency.

const Github: React.FC<GithubProps> = ({ onClick }) => {

    return (
        <div className='flex flex-row items-center cursor-pointer' onClick={onClick}>
            <p className='text-xl'>Github</p>
        </div>
    )
}

export default Github