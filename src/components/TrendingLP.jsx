import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import smwatch from '../assets/p-smwatch.png'
import ipad1 from '../assets/p-ipad-air.png'
import ipad2 from '../assets/p-ipad-air2.png'
import whiteairpods from '../assets/p-white-airpods.png'
import galaxytab9 from '../assets/p-galaxy-tab9.png'
import btspeaker from '../assets/p-bt-speaker.png'
import btspeaker2 from '../assets/p-bt-speaker2.png'
import s25u from '../assets/S25U.png'
import gfit3 from '../assets/p-galaxy-fit3.png'


import '../swiper-custom.css';

const TrendingLP = () => {
  return (
    <div className="trending flex flex-col justify-items-center w-[calc(100%-1rem)] mx-auto sm:w-[calc(100%-2rem)] h-fit gap-3 mt-15">
        <div className="flex justify-between items-center px-5 py-2">
            <h3 className="text-2xl font-light text-gray-800 font-['Ubuntu'] dark:text-white">Trending</h3>
            <button className="non-btn flex justify-center px-3 py-2 rounded-full cursor-pointer hover:border hover:border-purple-500 items-center gap-2 text-gray-800 dark:text-white">
                <span className='text-md md:text-lg font-["Ubuntu"] font-light text-purple-500'>Selengkapnya</span>
                <ArrowRightIcon className="w-6 h-6 md:w-7 md:h-7 ms-2 text-gray-800 dark:text-white stroke-[1]" />
            </button>
        </div>
        <div className="">
            <Swiper
                slidesPerView={5}
                spaceBetween={15}
                pagination={{
                clickable: true,
                }}
                // modules={[Pagination]}
                className="mySwiper cursor-grab"
            >
                <SwiperSlide>
                    <img src={smwatch} alt='Smartwatch IP68' className='absolute top-0 w-100 h-auto' />
                    <h3 className="text-lg font-['Ubuntu'] absolute bottom-10 text-gray-800 dark:text-gray-100">Smartwatch IP68</h3>
                    <p className="text-md font-['Ubuntu'] absolute bottom-0 text-gray-800 dark:text-gray-100">Rp.499.000</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={btspeaker} alt='Casing HP' className='w-100 h-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ipad1} alt='Casing HP' className='w-100 h-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={whiteairpods} alt='Casing HP' className='w-100 h-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ipad2} alt='Casing HP' className='w-100 h-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={galaxytab9} alt='Casing HP' className='w-100 h-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={btspeaker2} alt='Casing HP' className='w-100 h-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={s25u} alt='Casing HP' className='w-100 h-auto' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={gfit3} alt='Casing HP' className='w-100 h-auto' />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default TrendingLP