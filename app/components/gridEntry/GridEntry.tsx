'use client'
import React, { useEffect } from 'react'
import penIcon from '../../../public/penIcon.svg'
import Image from 'next/image'

const GridEntry: React.FC = () => {
    const modules = ["Clock", "Tracker", "GitHub", "Crypto ticker", "Tasks", "Book tracker", "Calendar", "Weather", "Calculator", "Notes", "Momentum tracker", "Pomodoro timer", "Links", "Quote of the day", "Countdown", "Alarm"]
    return (
        <><div className='tooltip' data-tip='Click to add a new module'>
            <Image className='cursor-pointer'
                priority
                src={penIcon}
                height={144}
                alt="New module icon"
                onClick={() => (document.getElementById('moduleMenu') as any).showModal()} />
        </div>
            <dialog id="moduleMenu" className="modal">
                <div className="modal-box h-96 rounded-md border-green-400 border-2 overflow-hidden">
                    <h3 className="font-bold text-lg text-center mt-2 mb-2 text-green-400">Select module</h3>
                    <div className='w-full h-full'>
                        <ul className="menu rounded-box w-full h-full">
                            {modules.map((module, index) => (
                                <li key={index} className=''>
                                    <a className='w-full place-content-center hover:text-green-400'>{module}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog >
        </>
    );
};

export default GridEntry