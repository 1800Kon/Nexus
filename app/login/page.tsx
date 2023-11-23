import React from 'react'
import Image from 'next/image'
import nexusLogo from '../../public/nexusLogo.svg'
import { Card } from '@mui/material'
function Login() {
    return (
        <div className="flex flex-row h-screen w-screen p-20">
            {/* Logo and salutations */}
            <div className="flex h-full w-7/12 bg-base-100 border-2 rounded-lg place-items-center">
                <div className='flex flex-col text-center space-y-20 items-center m-auto'>
                    <p className='text-4xl'>Welcome to Nexus</p>
                    <Image className=''
                        priority
                        src={nexusLogo}
                        height={144}
                        alt="Nexus Logo"
                    />
                </div>
            </div>
            <div className="divider divider-horizontal divider-white" />
            {/* Login form */}
            <div className="flex h-full w-5/12 bg-base-100 border-2 rounded-lg justify-around items-center">
                <div className='flex flex-col  w-3/4 h-2/4 rounded-md justify-around items-center p-16'>
                    <a href="/api/auth/login"><button className='btn btn-outline btn-lg'>Authenticate</button></a>
                </div>
            </div>
        </div>
    )
}

export default Login