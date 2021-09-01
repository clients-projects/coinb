import React from 'react'
import { AiOutlineMenu, AiOutlineGlobal } from 'react-icons/ai'

import Logo from '../assets/logo.svg'
import useToggle from './toggle'
import NavItem from './NavItem'

const Nav = () => {
    const [isOn, toggleIsOn] = useToggle()

    let categoryModalStyle = {
        width: isOn ? '100%' : '0',
        visibility: isOn ? 'visible' : 'hidden',
        transform: isOn
            ? 'translateX(0%) translateZ(0px)'
            : 'translateX(600px)',
        transition: 'all .1s',
    }

    let hamburgerStyle =  (
        <div className='flex z-30 relative'>

            <AiOutlineMenu
                className='text-white self-center text-2xl relative cursor-pointer'
                onClick={toggleIsOn}
            />
        </div>
    )

    const categoryModal = (
        <div
            className='fixed top-0 left-0 w-full h-full text-black z-20 pt-28'
            style={categoryModalStyle}
        >
            <ul className='categoryModal'>
                <NavItem name='Products' link_path='/' />
                <NavItem name='Help' link_path='/' />
                <NavItem name='Prices' link_path='/' />

                <div className=' mt-6'>
                 

                    <li className='py-3 px-6 text-black  lg:self-center font-bold text-lg'>
                        <a href='/'>
                            <AiOutlineGlobal />
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    )
    return (
        <nav className='grid grid-cols-nav justify-between align relative mt-8 sm:mt-4 '>
            <div className='w-full items-center justify-between grid gap-y-4 lg:flex '>
                <img
                    src={Logo}
                    alt=''
                    className='max-w-none z-40'
                    width='136'
                />
            </div>

            <div className='modal lg:hidden justify-self-end'>
                {hamburgerStyle}

                {categoryModal}
            </div>

            <ul className='hidden lg:flex align-middle justify-self-end'>
             

                <NavItem name='Products' link_path='/' />
                <NavItem name='Help' link_path='/' />
                <NavItem name='Prices' link_path='/' />


                <li className='py-3 px-6 lg:self-center font-bold text-lg'>
                    <a href='/'>
                        <AiOutlineGlobal />
                    </a>
                </li>
            
            </ul>

        </nav>
    )
}

export default Nav
