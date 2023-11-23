'use client'
import React, { useEffect } from 'react'
import penIcon from '../../../public/penIcon.svg'
import Image from 'next/image'

const GridEntry: React.FC = () => {
    return (
        <><div className='tooltip' data-tip='Click to add a new module'>
            <Image className='cursor-pointer'
                priority
                src={penIcon}
                height={144}
                alt="New module icon"
                onClick={() => (document.getElementById('moduleDropdown') as any).showModal()} />
        </div>
            <dialog id="moduleDropdown" className="modal">
                <div className="modal-box bg-slate-900 h-96 align-middle items-center">
                    <h3 className="font-bold text-lg">Select module</h3>
                    <div className='dropdown dropdown-open '>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Clock</a></li>
                            <li><a>Tracker</a></li>
                            <li><a>GitHub</a></li>
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