import React from 'react'
import { BiMenu } from 'react-icons/bi'

import Logo from '../assets/logo.svg'
import useToggle from './toggle'
import NavItem from './NavItem'

const Nav = () => {
    const [isOn, toggleIsOn] = useToggle()

    let categoryModalStyle = {
        width: isOn ? '100%' : '0',
        visibility: isOn ? 'visible' : 'hidden',
        // transform: isOn
        //     ? 'translateY(0%) translateZ(0px)'
        //     : 'translateY(600px)',
        transition: 'all .3s',
    }

    let hamburgerStyle = (
        <div className='flex z-30 relative border-2 border-white' style={{padding: '1px 5px', borderRadius: '3px'}}>
            <BiMenu
                className='text-white self-center text-2xl relative cursor-pointer'
                onClick={toggleIsOn}
            />
        </div>
    )

    const categoryModal = (
        <div
            className='fixed top-0 left-0 w-full h-full z-20 bg-[#3882cde6]'
            style={categoryModalStyle}
        >
            <div className='categoryModal'>
                <hr className='mt-3 border-t border-[#ffffff26]' />
                <ul className='ml-4 ease-in animate-pulse delay-100'>
                    <NavItem name='Products' link_path='/' />
                    <NavItem name='Help' link_path='/' />
                    <NavItem name='Prices' link_path='/' />
                </ul>
            </div>

            <div
                className='nav-collapse collapse in'
                id='application_menu'
                style={{ height: '74px' }}
            >
                <ul className='nav clearfix'>
                    <li className='dropdown dropdown-hover' id='resources_menu'>
                        <a
                            className='dropdown-toggle'
                            data-toggle='dropdown'
                            href='#blank'
                        >
                            Products <b className='caret'></b>
                        </a>
                        <ul
                            className='dropdown-menu fadeIn animated-fast'
                            role='menu'
                            aria-labelledby='dLabel'
                        >
                            <li className='home '>
                                <a href='/'>Buy/Sell Cryptocurrency</a>
                            </li>
                            <li>
                                <a
                                    href='#blank'
                                    className='external-link'
                                >
                                    Coinbase Pro
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#blank'
                                    className='external-link'
                                >
                                    Coinbase Prime
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#blank'
                                    className='external-link'
                                >
                                    Developer Platform
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#blank'
                                    className='external-link'
                                >
                                    Coinbase Commerce
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href='/help' target='_blank'>
                            Help
                        </a>
                    </li>
                </ul>
                <ul className='nav clearfix'>
                    <li>
                        <a href='/price'>Prices</a>
                    </li>
                    <li className='active signin'>
                        <a href='/signin'>Sign In</a>
                    </li>
                    <li style={{marginTop:'-1px'}} className=' signup'>
                        <a href='/signup' className='btn'>
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
    return (
        <nav className='grid grid-cols-nav justify-between px-8 align relative mt-6 '>
            <div className='w-full items-center justify-between grid gap-y-4 lg:flex '>
                <img
                    src={Logo}
                    alt=''
                    className='max-w-none z-50'
                    width='112'
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


           
            
            </ul>

        </nav>
    )
}

export default Nav
