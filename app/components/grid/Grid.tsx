'use client'
import React, { useState } from 'react'
import GridLayout from 'react-grid-layout';
import AddToGridButton from '../addToGridButton/AddToGridButton';
import Clock from '../clock/Clock';
import BookTracker from '../bookTracker/BookTracker';
import Calendar from '../calendar/Calendar';
import Github from '../github/Github';
import Tasks from '../tasks/Tasks';
import Ticker from '../ticker/Ticker';
import Tracker from '../tracker/Tracker';
import Image from 'next/image'
import penIcon from '../../../public/penIcon.svg'

const Grid = () => {

    const gridProps = {
        autoSize: true,
        className: "layout",
        cols: 8,
        rowHeight: 30,
        width: 1920,
        onLayoutChange: function (layout: any) { },

    };

    const [displayedModules, setDisplayedmodules] = useState<{ key: number, component: JSX.Element }[]>([]);
    const [showComponent, setShowComponent] = useState(false);
    const [key, setKey] = useState(0);
    const [layout, setLayout] = useState([{ i: 'a', x: 0, y: 0, w: 1, h: 2, static: false }])

    const modules = ["Clock", "Tracker", "GitHub", "Ticker", "Tasks", "Book tracker", "Calendar", "Weather", "Calculator", "Notes", "Momentum tracker", "Pomodoro timer", "Links", "Quote of the day", "Countdown", "Alarm"]

    // TODO: Add all modules to the list
    const addModule = (module: string) => {
        console.log("Adding module");
        setDisplayedmodules((prev) => {
            const newComponents = [...prev];
            switch (module) {
                case "Clock":
                    newComponents.push({ key: key, component: <Clock onClick={() => removeModule(key)} /> });
                    break;
                case "Tracker":
                    newComponents.push({ key: key, component: <Tracker onClick={() => removeModule(key)} /> });
                    break;
                case "GitHub":
                    newComponents.push({ key: key, component: <Github onClick={() => removeModule(key)} /> });
                    break;
                case "Ticker":
                    newComponents.push({ key: key, component: <Ticker onClick={() => removeModule(key)} /> });
                    break;
                case "Tasks":
                    newComponents.push({ key: key, component: <Tasks onClick={() => removeModule(key)} /> });
                    break;
                case "Book tracker":
                    newComponents.push({ key: key, component: <BookTracker onClick={() => removeModule(key)} /> });
                    break;
                case "Calendar":
                    newComponents.push({ key: key, component: <Calendar onClick={() => removeModule(key)} /> });
                    break;
                case "Weather":
                    newComponents.push({ key: key, component: <p>Weather</p> });
                    break;
                case "Calculator":
                    newComponents.push({ key: key, component: <p>Calculator</p> });
                    break;
                case "Notes":
                    newComponents.push({ key: key, component: <p>Notes</p> });
                    break;
                case "Momentum tracker":
                    newComponents.push({ key: key, component: <p>Momentum tracker</p> });
                    break;
                case "Pomodoro timer":
                    newComponents.push({ key: key, component: <p>Pomodoro timer</p> });
                    break;
                case "Links":
                    newComponents.push({ key: key, component: <p>Links</p> });
                    break;
                case "Quote of the day":
                    newComponents.push({ key: key, component: <p>Quote of the day</p> });
                    break;
                case "Countdown":
                    newComponents.push({ key: key, component: <p>Countdown</p> });
                    break;
                case "Alarm":
                    newComponents.push({ key: key, component: <p>Alarm</p> });
                    break;
                default:
                    break;
            }
            return newComponents;
        })
        setKey(key + 1);
        setShowComponent(true);
    }

    const removeModule = (key: number) => {
        console.log("Removing module");
        setDisplayedmodules((prev) => {
            const newComponents = prev.filter(module => module.key !== key);
            return newComponents;
        })
        setShowComponent(true);
    }

    const onLayoutChange = (layout: any) => {
        gridProps.onLayoutChange(layout);
    }

    return (
        <div className='w-screen'>
            <div className='w-full bg-green-200'>
                <div className='flex tooltip tooltip-bottom justify-center content-center' key='c' data-tip='Click to add a new module'>
                    <Image className='cursor-pointer'
                        priority
                        src={penIcon}
                        height={40}
                        alt="New module icon"
                        onClick={() => (document.getElementById('moduleMenu') as any).showModal()} />
                </div>
            </div>
            <dialog id="moduleMenu" className="modal">
                <div className="modal-box h-96 rounded-md border-green-400 border-2 overflow-hidden">
                    <h3 className="font-bold text-lg text-center mt-2 mb-2 text-green-400">Select module</h3>
                    <div className='w-full h-full'>
                        <ul className="menu rounded-box w-full h-full">
                            {modules.map((module, index) => (
                                <li key={index}>
                                    <a className='w-full place-content-center hover:text-green-400 ' onClick={() => addModule(module)}>{module}</a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className=''>
                <GridLayout
                    autoSize={true}
                    className="layout"
                    cols={8}
                    rowHeight={30}
                    width={1920}
                >
                    {showComponent && displayedModules.map((module, index) => <div key={index} data-grid={{ x: 0, y: 0, w: 1, h: 2 }} className='border-2 border-green-400 place-content-center'>{module.component}</div>)}

                </GridLayout>
            </div>
        </div>
    )
}

export default Grid