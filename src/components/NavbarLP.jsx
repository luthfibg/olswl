import { useEffect, useState } from 'react';
import logoLight from '../assets/logo-light.png';
import logoDark from '../assets/logo-dark.png';
import { Link } from 'react-router-dom'
import SearchModal from './SearchModal';
import { CiMenuBurger } from "react-icons/ci";
import { UserIcon } from '@heroicons/react/16/solid';
import { useLocation } from 'react-router-dom';


const NavbarLP = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isShopPage = location.pathname === "/shop";


    useEffect(() => {
        const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkQuery.matches);

        const handleChange = (e) => setIsDarkMode(e.matches);
        darkQuery.addEventListener('change', handleChange);

        return () => darkQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white dark:bg-[#3b3b3b] fixed w-full z-20 top-0 start-0 border-0 border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl bg-inherit flex flex-wrap items-center justify-between mx-auto py-2 px-4">
                <a href="#" className='flex items-center space-x-3 rtl:space-x-reverse'>
                    <img src={isDarkMode ? logoDark : logoLight} className='h-10' alt="brand logo" />
                    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Online Shop</span>
                </a>

                {/* Desktop View - lg and xl screens */}
                <div className="hidden lg:flex lg:w-auto lg:order-1 lg:items-center justify-between w-full">
                    <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 dark:border-gray-700">
                        <li>
                            <Link className="block text-sm font-thin py-2 px-3 text-white bg-blue-600 rounded-sm lg:bg-transparent lg:text-blue-400 lg:p-0 lg:dark:text-blue-400" aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link className="block text-sm font-thin py-2 px-3 text-white bg-blue-600 rounded-sm lg:bg-transparent lg:text-blue-400 lg:p-0 lg:dark:text-blue-400" aria-current="page" to="/dashboard">About</Link>
                        </li>
                        <li>
                            <Link className="block text-sm font-thin py-2 px-3 text-white bg-blue-600 rounded-sm lg:bg-transparent lg:text-blue-400 lg:p-0 lg:dark:text-blue-400" aria-current="page" to="/dashboard">Services</Link>
                        </li>
                        <li>
                            <Link className="block text-sm font-thin py-2 px-3 text-white bg-blue-600 rounded-sm lg:bg-transparent lg:text-blue-400 lg:p-0 lg:dark:text-blue-400" aria-current="page" to="/dashboard">Contact</Link>
                        </li>
                        <li>
                            <Link className="block text-sm font-thin py-2 px-3 text-white bg-blue-600 rounded-sm lg:bg-transparent lg:text-blue-400 lg:p-0 lg:dark:text-blue-400" aria-current="page" to="/shop">Belanja</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {!isShopPage && <SearchModal />}
                    <button type="button" className="non-btn hover:border text-gray-800 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center me-2 dark:hover:border-purple-400 dark:focus:ring-purple-800">
                        <UserIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                {!isShopPage && (
                    <div className="flex lg:hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button 
                            onClick={toggleMobileMenu}
                            type="button" 
                            className="non-btn inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls='mobile-menu'
                            aria-expanded={isMobileMenuOpen}
                        >
                            {/* <span className="sr-only">Open main menu</span> */}
                            <CiMenuBurger className="w-6 h-6 text-gray-800 dark:text-gray-400" />
                        </button>
                    </div>
                )}

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden w-full md:order-1" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-[#3b3b3b] rounded-lg shadow-lg mt-2">
                            <div className="px-2 mb-4">
                                <SearchModal />
                            </div>
                            <ul className="flex flex-col space-y-2">
                                <li>
                                    <Link 
                                        className="block text-sm font-thin py-2 px-3 text-gray-800 dark:text-white bg-transparent rounded-sm" 
                                        to="/dashboard"
                                        onClick={toggleMobileMenu}
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="block text-sm font-thin py-2 px-3 text-gray-800 dark:text-white bg-transparent rounded-sm" 
                                        to="/dashboard"
                                        onClick={toggleMobileMenu}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="block text-sm font-thin py-2 px-3 text-gray-800 dark:text-white bg-transparent rounded-sm" 
                                        to="/dashboard"
                                        onClick={toggleMobileMenu}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="block text-sm font-thin py-2 px-3 text-gray-800 dark:text-white bg-transparent rounded-sm" 
                                        to="/dashboard"
                                        onClick={toggleMobileMenu}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        className="block text-sm font-thin py-2 px-3 text-gray-800 dark:text-white bg-transparent rounded-sm" 
                                        to="/shop"
                                        onClick={toggleMobileMenu}
                                    >
                                        Belanja
                                    </Link>
                                </li>
                            </ul>
                            <div className="pt-4">
                                <button 
                                    type='button' 
                                    className="w-full font-medium rounded-lg text-sm px-4 py-2 text-center bg-transparent text-gray-800 dark:text-white"
                                    onClick={toggleMobileMenu}
                                >
                                    Daftar Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavbarLP