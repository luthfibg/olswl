import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import p1 from '../assets/p-case.png'
import p2 from '../assets/p-charger.png'
import p3 from '../assets/p-earphone.png'
import p4 from '../assets/p-pb.png'

const BestSellerLP = () => {
    return (
        <div className="flex flex-col w-[calc(100%-1rem)] mx-auto mt:10 rounded-2xl sm:w-[calc(100%-2rem)] md:h-[60vh] xl:h-[28rem]">
            <div className="flex justify-between items-center px-5 py-2">
                <h3 className="text-2xl font-light text-gray-800 font-['Ubuntu'] dark:text-white">Best Seller</h3>
                <button className="non-btn flex justify-center px-3 py-2 rounded-full cursor-pointer hover:border hover:border-purple-500 items-center gap-2 text-gray-800 dark:text-white">
                    <span className='text-md md:text-lg font-["Ubuntu"] font-light text-purple-500'>Selengkapnya</span>
                    <ArrowRightCircleIcon className="w-6 h-6 md:w-7 md:h-7 ms-2 text-gray-800 dark:text-white stroke-[1]" />
                </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 h-full w-full">
                <div className="boxa1 relative overflow-hidden flex flex-col flex-grow justify-center text-gray-800 dark:text-white items-center p-2 rounded-2xl bg-gray-100 dark:bg-[#4b4b4b]">
                    <img src={p1} alt='Casing HP' className='w-100 h-auto' />
                    <div className="absolute left-0 w-8 h-full bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 flex justify-center items-center">
                        <p className="text-white text-lg font-light font-['Ubuntu'] transform rotate-180 uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Terlaris 2024</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center h-12 z-2 bg-gray-200 dark:bg-[#2a2a2a]">
                        <p className="text-lg sm:text-md text-dark-800 dark:text-white">Casing HP Universal H2P2</p>
                    </div>
                </div>
                <div className="boxa2 relative overflow-hidden flex flex-col flex-grow justify-center text-gray-800 dark:text-white items-center p-2 rounded-2xl bg-gray-100 dark:bg-[#4b4b4b]">
                    <img src={p2} alt='Charger HP' className='w-100 h-auto' />
                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center h-12 z-2 bg-gray-200 dark:bg-[#2a2a2a]">
                        <p className="text-lg sm:text-md text-dark-800 dark:text-white">2A Type-C FC3.0</p>
                    </div>
                </div>
                <div className="boxa3 relative overflow-hidden flex flex-col flex-grow justify-center text-gray-800 dark:text-white items-center p-2 rounded-2xl bg-gray-100 dark:bg-[#4b4b4b]">
                    <img src={p3} alt='Earphone' className='w-100 h-auto' />
                    <div className="absolute left-0 w-8 h-full bg-gradient-to-t from-green-700 via-teal-500 to-cyan-300 flex justify-center items-center">
                        <p className="text-white text-lg font-light font-['Ubuntu'] transform rotate-180 uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Review Terbaik</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center h-12 z-2 bg-gray-200 dark:bg-[#2a2a2a]">
                        <p className="text-lg sm:text-md text-dark-800 dark:text-white">Vixen F44 BT Headset</p>
                    </div>
                </div>
                <div className="boxa4 relative overflow-hidden flex flex-col flex-grow justify-center text-gray-800 dark:text-white items-center p-2 rounded-2xl bg-gray-100 dark:bg-[#4b4b4b]">
                    <img src={p4} alt='Powerbank' className='w-100 h-auto' />
                    <div className="absolute left-0 w-8 h-full bg-gradient-to-t from-red-700 to-purple-600 flex justify-center items-center">
                        <p className="text-white text-lg font-light font-['Ubuntu'] transform rotate-180 uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Top Quality</p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center h-12 z-2 bg-gray-200 dark:bg-[#2a2a2a]">
                        <p className="text-lg sm:text-md text-dark-800 dark:text-white">Baseas H10800</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellerLP