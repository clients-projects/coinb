import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const NavItem = ({ name, link_path }) => {   

    return (
        <li className='py-3 px-6 lg:px-4  lg:self-center font-semibold text-base flex '>
            <a href={link_path}>
                {name}{' '}
                
            </a>
            {name === 'Products' ? (

                    <AiFillCaretDown className=' text-gray-300' style={{marginLeft: '.2rem'}} />
            ) : ''}
        </li>
    )
}

export default NavItem
