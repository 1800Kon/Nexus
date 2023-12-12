'use client'
import React, { useEffect, useState } from 'react'

interface TasksProps {
    onClick?: () => void;
}

// This module is a task tracker / todo list.

const Tasks: React.FC<TasksProps> = ({ onClick }) => {

    return (
        <div className='flex flex-row items-center cursor-pointer' onClick={onClick}>
            <p className='text-xl'>Tasks</p>
        </div>
    )
}

export default Tasks