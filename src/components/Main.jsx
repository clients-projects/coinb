import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
//import 'animate.css/animate.min.css'
import Form from './Form'

import '../styles/styles.css'
import Card from '../assets/phone.webp'
import DownloadPlayStore from '../assets/downloadPlayStore.png'
import DownloadAppStore from '../assets/downloadAppStore.png'

const Main = () => {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2])

    return (
        <div className='grid justify-items-center '>
            <div className='pt-16 sm:text-left grid gap-7 justify-items-center'>
                <h1 className='font-semibold text-5xl lg:text-7xl text-white lg:text-center'>
                    The World’s Fastest Growing Crypto App
                </h1>

                <ul className='lg:text-xl text-gray-200'>
                    <li className='flex items-center'>
                        <div className='checkCircle'>
                            <BiCheck className='text-white' />
                        </div>
                        <p style={{lineHeight: '1.3'}}>
                            Join <span className='text-[#129DFF]'>10m+</span>{' '}
                            users buying and selling{' '}
                            <span className='text-[#129DFF]'>100+</span>{' '}
                            cryptocurrencies at true cost
                        </p>
                    </li>
                    <li className='flex items-center py-1'>
                        <div className='checkCircle'>
                            <BiCheck className='text-white' />
                        </div>
                        <p style={{lineHeight: '1.3'}}>
                            Spend with the Crypto.com Visa Card and{' '}
                            <span className='text-[#129DFF]'>get up to 8%</span>{' '}
                            back
                        </p>
                    </li>
                    <li className='flex items-center'>
                        <div className='checkCircle'>
                            <BiCheck className='text-white' />
                        </div>{' '}
                        <p style={{lineHeight: '1.3'}}>
                            Grow your portfolio by{' '}
                            <span className='text-[#129DFF]'>
                                earning up to 14% interest
                            </span>{' '}
                            on your crypto assets
                        </p>
                    </li>
                </ul>

                <div className='flex justify-around mx-6 mt-2'>
                    <img src={DownloadAppStore} alt='' width='139' className='mr-2'/>
                    <img src={DownloadPlayStore} alt='' width='153' />
                </div>

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
