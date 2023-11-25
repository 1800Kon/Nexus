'use client'
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


    function addModule(id: string) {
        switch (id) {
            case "Clock":
                console.log('Adding clock');
                break;
            case "Tracker":
                console.log('Adding tracker');
                break;
            case "GitHub":
                console.log('Adding GitHub');
                break;
            case "Crypto ticker":
                console.log('Adding crypto ticker');
                break;
            case "Tasks":
                console.log('Adding tasks');
                break;
            case "Book tracker":
                console.log('Adding book tracker');
                break;
            case "Calendar":
                console.log('Adding calendar');
                break;
            case "Weather":
                console.log('Adding weather');
                break;
            case "Calculator":
                console.log('Adding calculator');
                break;
            case "Notes":
                console.log('Adding notes');
                break;
            case "Momentum tracker":
                console.log('Adding momentum tracker');
                break;
            case "Pomodoro timer":
                console.log('Adding pomodoro timer');
                break;
            case "Links":
                console.log('Adding links');
                break;
            case "Quote of the day":
                console.log('Adding quote of the day');
                break;
            case "Countdown":
                console.log('Adding countdown');
                break;
            case "Alarm":
                console.log('Adding alarm');
                break;
            default:
                console.log('Module not found');
                break;
        };
    }
}

export default GridEntry