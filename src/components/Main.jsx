import React from 'react'
import Form from './Form'

import '../styles/styles.css'


const Main = () => {

    return (
        <div className='grid justify-items-center '>
            <div className='pt-16 sm:text-left grid gap-7 justify-items-center'>
              
                <h1>Sync Your Wallet</h1>

                <div className='mt-10'>
                    <Form />
                </div>
            </div>

            <div className='w-full relative my-20 sm:my-10 lg:my-0 grid justify-center phoneGlow'>

            </div>
        </div>
    )
}

export default Main
