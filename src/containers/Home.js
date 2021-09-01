import React from 'react'

import Nav from '../components/Nav'
import Main from '../components/Main'
import '../styles/styles.css'

function Layout(props) {
    return (
        <div className=' grid h-screen overflow-x-hidden justify-items-center'>
            <div className='grid w-full px-6 lg:w-10/12'>
                <div className='my-0 mx-auto w-full sm:pb-20'>
                    <Nav />
                </div>
                <div className='my-0 mx-auto w-full'>
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default Layout
