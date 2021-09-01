import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const NavItem = ({ name, link_path, span }) => {   

    return (
        <li className='py-3 px-6 lg:px-4  lg:self-center font-semibold text-xs flex justify-between '>
            <a href={link_path}>
                {name}{' '}
                
            </a>
            {name === 'Products' ? (
                <AiFillCaretDown className='self-center' />
            ) : ''}
        </li>
    )
}

export default NavItem
