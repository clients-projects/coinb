import React from 'react'

export default function Footer() {
    return (
        // <ul className='font-Helvetica text-5xl flex'>
        //     <li className='flex'>Forgot password?</li>
        //     <li>Don't have an account?</li>
        //     <li>Privacy Policy</li>
        //     <li>Have an issue with 2-factor authentication?</li>
        // </ul>
        <div className='font-Graphik text-5xl px-2 text-center'>
            <p className='mb-3'>
                <a href='#blank'>Forgot password?</a>
                <a href='#blank' className='px-3'>Don't have an account?</a>
                <a href='#blank'>Privacy Policy</a>
                <br />
            </p>
            <p>
                <a href='#blank'>Have an issue with 2-factor authentication?</a>
            </p>
        </div>
    )
}
