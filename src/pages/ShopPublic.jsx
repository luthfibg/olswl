import React, { useState } from 'react'
import NavbarShop from '../components/NavbarShop'
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';

const ShopPublic = () => {

  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { key: 'all', label: 'Semua' },
    { key: 'accessories', label: 'Aksesoris Gadget' },
    { key: 'smartphone', label: 'Smartphone' },
    { key: 'tablet', label: 'Tablet' },
    { key: 'power', label: 'Daya' },
  ];

  return (
    <div className='flex flex-col h-screen'>
        <NavbarShop />
        <div class="border-b border-gray-200 dark:border-gray-600 flex items-center justify-center">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              {
                tabs.map((tab) => (
                  <li key={tab.key} class="me-2">
                    {/* <a href="#" class="">
                        {tab.label}
                    </a> */}
                    <button className={`non-btn inline-flex text-md md:text-[1rem] font-light items-center justify-center py-2 px-4 border-b-2 rounded-t-lg group
                  ${activeTab === tab.key
                    ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400'
                    : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`} onClick={() => setActiveTab(tab.key)}>
                      {tab.label}
                    </button>
                  </li>
                ))
              }
            </ul>
        </div>
        <div className="flex-1 flex overflow-auto flex-col pb-5 items-center font-['Ubuntu'] dark:text-gray-500 justify-center h-full w-screen mx-auto sp">
          {activeTab === 'all' && (
            <>
              <GlobeAsiaAustraliaIcon className="w-70 h-70 mb-2 text-gray-500" />
              <h2 className='text-2xl'>Semua</h2>
            </>
          )}
          {activeTab === 'accessories' && (
            <>
              <GlobeAsiaAustraliaIcon className="w-70 h-70 mb-2 text-gray-500" />
              <h2 className='text-2xl'>Aksesoris Gadget</h2>
            </>
          )}
          {activeTab === 'smartphone' && (
            <>
              <GlobeAsiaAustraliaIcon className="w-70 h-70 mb-2 text-gray-500" />
              <h2 className='text-2xl'>Smartphone</h2>
            </>
          )}
          {activeTab === 'tablet' && (
            <>
              <GlobeAsiaAustraliaIcon className="w-70 h-70 mb-2 text-gray-500" />
              <h2 className='text-2xl'>Tablet</h2>
            </>
          )}
          {activeTab === 'power' && (
            <>
              <GlobeAsiaAustraliaIcon className="w-70 h-70 mb-2 text-gray-500" />
              <h2 className='text-2xl'>Daya</h2>
            </>
          )}
        </div>
    </div>
  )
}

export default ShopPublic