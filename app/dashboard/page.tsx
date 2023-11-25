import React from 'react'
import Clock from '../components/clock/Clock'
import SearchBar from '../components/searchBar/SearchBar'
import { getSession } from '@auth0/nextjs-auth0';
import GridEntry from '../components/gridEntry/GridEntry';

const Dashboard = async () => {
    // const session = await getSession();
    // const user = session?.user;
    return (
        <div className='flex flex-col w-screen h-screen'>
            <div className='flex w-full h-14 border-b-2 border-b-slate-400 items-center justify-between p-4'>
                <Clock />
                {/* Change this to have a check eventually */}
                <p>Welcome to Nexus manager, <span className='text-green-400 cursor-pointer'> <a href='/api/auth/logout'>Kon</a></span></p>
                <SearchBar />
            </div>
            <div className='grid flex-1 place-items-center'>
                <GridEntry />
            </div>
        </div>
    )
}

export default Dashboard