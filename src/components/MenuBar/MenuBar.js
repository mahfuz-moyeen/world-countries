import React, { useState } from 'react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const MenuBar = () => {
    const [open,setOpen] = useState(false)
    const links = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'Countries', link: '/countries' },
        { id: 3, name: 'About', link: '/about' }
    ]
    return (
        <nav className=' sticky top-0'>
            <div className='bg-indigo-600'>
                <div className='w-6 h-6 cursor-pointer md:hidden' onClick={()=>setOpen(!open)}>
                {open ? <XIcon/> : <MenuAlt1Icon/>}
                </div>
                <ul className={`text-lg bg-indigo-600 md:w-11/12 w-full flex flex-col md:flex-row justify-center items-center md:justify-end md:mr-10 gap-3 md:static absolute ${open ? 'top-5' : 'top-[-120px]'}`}>
                    {
                        links.map(link => <CustomLink
                            key={link.id}
                            to={`${link.link}`}
                        >{link.name}</CustomLink>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default MenuBar;