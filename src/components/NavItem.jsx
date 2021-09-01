import React from 'react'
import {BiChevronDown} from 'react-icons/bi'

const NavItem = ({ name, link_path, span }) => {   

    return (
        <li className='py-3 px-6 lg:px-4 text-black lg:text-[#aaaaaa] lg:hover:text-white  lg:self-center font-medium text-lg flex justify-between '>
            <a href={link_path}>
                {name}{' '}
                {span ? (
                    <span className='uppercase font-bold text-xs rounded-lg text-white bg-[#129DFF] px-2'>
                        {span}
                    </span>
                ) : (
                    ''
                )}
            </a>
            {name === 'NFT' || name === 'Prices' ? '' : <BiChevronDown className='self-center'/>}
        </li>
    )
}

export default NavItem
