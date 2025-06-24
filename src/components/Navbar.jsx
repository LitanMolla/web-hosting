import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header className='py-3 shadow-md shadow-gray-200 fixed top-0 left-0 w-full bg-white z-50'>
        <nav className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="w-[200px] z-50">
              <Link to={'/'}><img src={logo} alt="Logo" className='w-full' /></Link>
            </div>

            {/* Hamburger (Mobile) */}
            <div className='lg:hidden z-50'>
              <button onClick={() => setMobileOpen(!mobileOpen)} className='text-2xl text-blue-950 cursor-pointer'>
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden lg:flex gap-5 items-center text-blue-950'>
              <DropdownMenu title="Domain & SSL" items={[
                { label: 'Domain Register', href: '/nnn' },
                { label: 'Domain Transfer', href: '/' },
                { label: 'SSL Certificate', href: '/' }
              ]} />
              <DropdownMenu title="Hosting" items={[
                { label: 'Shared Hosting', href: 'sharedhosting' },
                { label: 'WordPress Hosting', href: '/' },
                { label: 'FFmpeg Hosting', href: '/' },
                { label: 'Reseller Hosting', href: '/' },
              ]} />
              <DropdownMenu title="VPS Hosting" items={[
                { label: 'Linux VPS Hosting', href: 'LinuxVpsHosting' },
                { label: 'Windows VPS Hosting', href: '/' },
                { label: 'cPanel VPS Hosting', href: '/' },
              ]} />
              <DropdownMenu title="Cloud Server" items={[
                { label: 'Managed AWS Cloud', href: '/' },
                { label: 'Managed Vultr Cloud', href: '/' },
                { label: 'Managed DigitalOcean Cloud', href: '/' },
              ]} />
              <DropdownMenu title="Dedicated Server" items={[
                { label: 'BD Server', href: '/' },
                { label: 'US Server', href: '/' },
              ]} />
              <DropdownMenu title="Email" items={[
                { label: 'Business Email', href: '/' },
                { label: 'Gmail Workspace', href: '/' },
              ]} />
              <button className='uppercase text-white bg-blue-500 hover:bg-blue-950 px-6 py-2 font-medium duration-300 rounded-md cursor-pointer'>Log In</button>
            </ul>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white/95 duration-300 overflow-y-auto ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className='px-6 pt-24 pb-10 space-y-6 text-blue-950'>
                <DropdownMenu
                  title="Domain & SSL"
                  items={[
                    { label: 'Domain Register', href: '/' },
                    { label: 'Domain Transfer', href: '/' },
                    { label: 'SSL Certificate', href: '/' }
                  ]}
                  onItemClick={closeMobileMenu}
                />
                <DropdownMenu
                  title="Hosting"
                  items={[
                    { label: 'Shared Hosting', href: 'sharedhosting' },
                    { label: 'WordPress Hosting', href: '/' },
                    { label: 'FFmpeg Hosting', href: '/' },
                    { label: 'Reseller Hosting', href: '/' },
                  ]}
                  onItemClick={closeMobileMenu}
                />
                <DropdownMenu
                  title="VPS Hosting"
                  items={[
                    { label: 'Linux VPS Hosting', href: '/' },
                    { label: 'Windows VPS Hosting', href: '/' },
                    { label: 'cPanel VPS Hosting', href: '/' },
                  ]}
                  onItemClick={closeMobileMenu}
                />
                <DropdownMenu
                  title="Cloud Server"
                  items={[
                    { label: 'Managed AWS Cloud', href: '/' },
                    { label: 'Managed Vultr Cloud', href: '/' },
                    { label: 'Managed DigitalOcean Cloud', href: '/' },
                  ]}
                  onItemClick={closeMobileMenu}
                />
                <DropdownMenu
                  title="Dedicated Server"
                  items={[
                    { label: 'BD Server', href: '/' },
                    { label: 'US Server', href: '/' },
                  ]}
                  onItemClick={closeMobileMenu}
                />
                <DropdownMenu
                  title="Email"
                  items={[
                    { label: 'Business Email', href: '/' },
                    { label: 'Gmail Workspace', href: '/' },
                  ]}
                  onItemClick={closeMobileMenu}
                />
                <button className='uppercase cursor-pointer'>Log In</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="md:pb-10 pb-8"></div>
    </>
  );
};

export default Navbar;
