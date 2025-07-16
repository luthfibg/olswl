import headerImage from '../assets/header.png'
import '../tablet-custom.css';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';


const HeaderLP = () => {
    return (
        <header className="w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] mt-20 overflow-hidden relative mx-auto h-[60vh] lg:h-[calc(100vh-156px)] lg:mt-20 bg-gray-100 flex flex-col md:justify-center md:items-end dark:bg-[#292929] rounded-2xl header-sq gap-5 p-5 mb-10 sm:mb-0">
        <div className="grid grid-cols-4 self-start md:grid-cols-6 gap-2 w-full h-[60%] md:h-full z-3">
            <div className="flex items-end col-start-1 md:col-start-2 lg:col-start-4 col-end-5 lg:col-end-6 tablet-col-1">
                <span className="font-['Ubuntu'] text-3xl lg:text-5xl">Pilih kelengkapan</span>
            </div>
            <div className="flex items-start col-start-1 lg:col-start-3 col-end-7 lg:col-end-6 tablet-col-2">
                <span className="font-['Ubuntu'] text-3xl lg:text-5xl">gadget kesayanganmu</span>
            </div>
            <div className="flex items-center col-start-1 md:col-start-4 lg:col-start-5 col-end-7 lg:col-end-7 self-start md:self-center md:row-span-3 tablet-col-3">
                <p className='text-xl lg:text-[1.2rem] sm:text-md font-light'>Lorem, tempore facilis itaque porro, debitis aperiam ipsa maiores accusamus odio excepturi provident nisi voluptas eius dolorum?</p>
            </div>
            <div className="flex items-center col-start-3 md:col-start-4 lg:col-start-5 col-end-7 lg:col-end-7 md:row-span-1 tablet-col-4">
                <button type="button" className="non-btn backdrop-blur-sm flex items-center text-gray-800 hover:text-gray-600 border border-gray-800 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                    <span className='text-md md:text-lg font-["Ubuntu"] font-light'>Lihat Produk</span>
                    <ArrowRightCircleIcon className="w-6 h-6 md:w-7 md:h-7 ms-2 text-gray-800 dark:text-white stroke-[1]" />
                </button>
            </div>
        </div>
        <span className="text-gray-200 absolute bottom-5 dark:text-[#3f3f3f] text-center tracking-wider font-extrabold whitespace-preline lg:whitespace-nowrap text-[8rem] md:text-[10rem] xl:text-[12rem]">Online
            Shop
        </span>
        <img src={headerImage} className='absolute left-0 -bottom-20 w-[100%] sm:w-[70%] md:w-[50%] z-2 header-img' alt="header image - luxury airpods" />
        </header>
    )
}

export default HeaderLP