import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Services', path: '/services' },
        { id: 5, name: 'Blog', path: '/blog' },
        { id: 6, name: 'Portfolio', path: '/portfolio' },
    ];

    const [open, setOpen] = useState(false);


    return (
        <nav className='bg-purple-400 '>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                    open === true ? <XMarkIcon className="h-6 w-6 text-purple-500"/> : <Bars3Icon className="h-6 w-6 text-purple-500" />
                    }
                </span>


            </div>
            <ul className={`md:flex absolute md:static duration-500 pl-8   bg-purple-400 ${open ? 'top-6' : '-top-36'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;