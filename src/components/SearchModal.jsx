import { useState, useEffect, useRef } from 'react'
import { Modal, TextInput, ModalHeader, ModalBody, Button } from 'flowbite-react'
import { CiLocationArrow1 } from "react-icons/ci";
import { HiSearch } from 'react-icons/hi';

const SearchModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const inputRef = useRef(null);

    // recommendation data sample
    const allRecommendations = [
        'Airpods X365 Pro',
        'Airpods M135',
        'Airpods M135 Lite',
        'Rayband 7 Premium',
        'iwatch V6 Sport',
        'iwatch V6 Classic'
    ];

    useEffect(() => {
        // recommendation filter based on input
        if (searchQuery.trim() === '') {
            setRecommendations(allRecommendations.slice(0, 4));
        } else {
            const filtered = allRecommendations.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
            setRecommendations(filtered.slice(0, 6));
        }
    }, [searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // add search query to recent searches
            const newRecent = [searchQuery, ...recentSearches].slice(0, 3);
            setRecentSearches(newRecent);

            // truly search in here
            console.log('Searching for: ', searchQuery);

            // close modal after search
            // setOpenModal(false);
        }
    }

    const handleOpenModal = () => {
        setOpenModal(true);
        setTimeout(() => {
        inputRef.current?.focus();
        }, 100);
    };

    return (
    <>
        <div className="relative hidden md:block right-10">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input
            type="search"
            id="fake-search" 
            className="block w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 dark:bg-[#292929] dark:border-0 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-0" placeholder="Temukan produk"
            onClick={handleOpenModal}
            readOnly
            required
            />
        </div>

        <Modal show={openModal} size="2xl" onClose={() => setOpenModal(false)} dismissible className='z-99'>
            <ModalBody className="pt-3">
                <form onSubmit={handleSearch} className="w-full p-0 mb-8">
                    <div className="relative w-full">
                        <div className="absolute h-fit my-auto rounded-lg me-2 inset-y-0 left-0 flex items-center p-2 border border-gray-600 pointer-events-none">
                            <HiSearch className="w-5 h-5 text-gray-500" />
                        </div>
                        <TextInput
                            ref={inputRef}
                            type="text"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 bg-transparent border-none rounded-lg focus:border-none focus:ring-0 focus:outline-none ring-0 outline-none shadow-none"
                            placeholder="Search documentation"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input 
                            type="search" id="default-search"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Cari produk..."
                            ref={inputRef}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoComplete="off"
                            required
                        />
                        <button type="submit" className="non-btn text-gray-800 dark:text-white absolute end-2 bottom-0.75 bg-inherit hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-lg text-sm px-2 py-1.5 dark:hover:bg-inherit hover:cursor-pointer">
                            <CiLocationArrow1 className="w-5 h-5" />
                        </button>
                    </div>
                </form>
                {/* Recent Searches */}
                {recentSearches.length > 0 && searchQuery.trim() === '' && (
                    <div className="mb-4">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Recent</h3>
                    <ul className="space-y-2">
                        {recentSearches.map((search, index) => (
                        <li key={index}>
                            <button
                            className="non-btn w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] rounded-lg text-sm"
                            onClick={() => {
                                setSearchQuery(search);
                                inputRef.current?.focus();
                            }}
                            >
                            {search}
                            </button>
                        </li>
                        ))}
                    </ul>
                    </div>
                )}

                {/* Recommendations */}
                <div className="space-y-2">
                    {recommendations.map((item, index) => (
                    <div key={index} className="p-2 hover:bg-gray-100 dark:hover:bg-[#2a2a2a] rounded-lg cursor-pointer">
                        <p className="text-sm">{item}</p>
                    </div>
                    ))}
                </div>

                {/* Credit footer seperti di screenshot */}
                {searchQuery.trim() === '' && (
                    <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                    Search by <span className="font-semibold">[Online Shop]</span>
                    </div>
                )}
            </ModalBody>
        </Modal>
    </>
    )
}

export default SearchModal