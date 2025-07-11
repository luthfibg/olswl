import { menuItems } from '../data/menu-items'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useSidebar } from '../contexts/SidebarContext'
import { Link, useLocation } from 'react-router-dom';
import logoLight from '../assets/logo-light.png'
import logoDark from '../assets/logo-dark2.png'

const SidebarAdmin = () => {
    const location = useLocation();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { sidebarExpanded, setSidebarExpanded } = useSidebar();

    useEffect(() => {
        const darkQuery = window.matchMedia('(prefers-color-scheme: dark');
        setIsDarkMode(darkQuery.matches);

        const handleChange = (e) => setIsDarkMode(e.matches);
        darkQuery.addEventListener('change', handleChange);

        return () => darkQuery.removeEventListener('change', handleChange);
    })
    return (
        <div className={`${sidebarExpanded ? 'w-48' : 'w-16'} bg-white dark:bg-[#191919] shadow-lg transition-all duration-300 ease-in-out`}>
            <div className={`${!sidebarExpanded ? 'items-center' : ''} flex flex-col h-full`}>
                {/* logo */}
                <div className={`flex items-center justify-between py-1 px-4 dark:border-0 border-b border-gray-300 dark:border-[#373737] ${sidebarExpanded ? '' : 'h-14'}`}>
                    {sidebarExpanded && (
                        <img src={isDarkMode ? logoDark : logoLight} className="h-12" alt="Brand Logo" />
                    )}
                    <button onClick={() => setSidebarExpanded(!sidebarExpanded)} className="non-btn rounded-lg hover:bg-gray-100 dark:hover:bg-transparent transition-colors focus:outline-none focus-ring-0">
                        {sidebarExpanded ? (
                            <XMarkIcon className="w-5 h-5 text-gray-600 dark:text-white" />
                        ) : (
                            <Bars3Icon className="w-5 h-5 text-gray-600 dark:text-white" />
                        )}
                    </button>
                </div>

                {/* menu items */}
                <nav className="flex-1 py-4 px-2">
                    <ul className="space-y-0">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={`non-btn non-common-anchor w-full flex items-center p-3 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-blue-400 text-white' : 'text-gray-600 dark:text-white hover:bg-gray-300 dark:hover:bg-[#2a2a2a]'}`}>
                                    <item.icon className="w-4 h-4 flex-shrink-0" />
                                    {sidebarExpanded && (
                                        <span className="ml-3 text-sm">{item.label}</span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SidebarAdmin