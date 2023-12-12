import React from 'react'
import Clock from '../components/clock/Clock'
import SearchBar from '../components/searchBar/SearchBar'
import { getSession } from '@auth0/nextjs-auth0';
import AddToGridButton from '../components/addToGridButton/AddToGridButton';
import { redirect } from 'next/navigation';
import Grid from '../components/grid/Grid';

const Dashboard = async () => {

    const session = await getSession();
    const user = session?.user;
    if (user === undefined) {
        redirect('/login')
    }



    return (
        <div className='flex flex-col w-screen h-screen'>
            <div className='flex w-full h-14 border-b-2 border-b-slate-400 items-center justify-between p-4'>
                <Clock />
                <p>Welcome to Nexus manager, <span className='text-green-400 cursor-pointer'> <a href='/api/auth/logout'>{user!.name}</a></span></p>
                <SearchBar />
            </div>
            <Grid />

            {/* <div className='grid flex-1 place-items-center grid-cols-6'>
                <AddToGridButton />
            </div> */}
        </div>
    )


}

export default Dashboard