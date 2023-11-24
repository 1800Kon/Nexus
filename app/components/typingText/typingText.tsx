'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';


const TypingText = ({ text }: { text: string }) => {
    return (
        <div className='text-4xl'>
            <Typewriter
                options={{
                    delay: 'natural',
                }}
                onInit={(typewriter) => {
                    typewriter.typeString(text)
                        .start();
                }}
            />
        </div>
    )

}

export default TypingText