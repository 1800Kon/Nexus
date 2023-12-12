'use client'
import penIcon from '../../../public/penIcon.svg'
import Image from 'next/image'
import Clock from '../clock/Clock'
import Ticker from '../ticker/Ticker'
import { JSX, useState } from 'react'
import Tracker from '../tracker/Tracker'
import Github from '../github/Github'
import Tasks from '../tasks/Tasks'
import BookTracker from '../bookTracker/BookTracker'
import Calendar from '../calendar/Calendar'

const AddToGridButton = () => {
    const [displayedModules, setDisplayedmodules] = useState<{ key: number, component: JSX.Element }[]>([]);
    const [showComponent, setShowComponent] = useState(false);
    const [key, setKey] = useState(0);

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



    return (
        <>
            <div className='tooltip' data-tip='Click to add a new module'>
                <Image className='cursor-pointer'
                    priority
                    src={penIcon}
                    height={144}
                    alt="New module icon"
                    onClick={() => (document.getElementById('moduleMenu') as any).showModal()} />
            </div>
            {showComponent && displayedModules.map(module => <div className='border-2 border-green-400 place-content-center'>{module.component}</div>)}
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
            </dialog >
        </>
    );
}

export default AddToGridButton