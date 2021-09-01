import React from 'react'
import Form from './Form'

import '../styles/styles.css'
import Card from '../assets/phone.webp'


const Main = () => {

    return (
        <div className='grid justify-items-center '>
            <div className='pt-16 sm:text-left grid gap-7 justify-items-center'>
              


                <div className='mt-10'>
                    <Form />
                </div>
            </div>

            <div className='w-full relative my-20 sm:my-10 lg:my-0 grid justify-center phoneGlow'>
                <div className='grid justify-items-center cardImg'>
                    <img
                        src={Card}
                        alt=''
                        width='100%'
                        height='100%'
                        className=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Main
