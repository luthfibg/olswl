import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Swiper, SwiperSlide } from 'swiper/react';
import { trendings } from "../data/data-placeholder";
import { useCurrency } from "../hooks/use-currency";
import 'swiper/css';
import 'swiper/css/pagination';
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
                slidesPerView={1}
                spaceBetween={15}
                pagination={{
                clickable: true,
                }}
                // modules={[Pagination]}
                className="mySwiper cursor-grab"
                breakpoints={{ 
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 5
                    }
                 }}
            >
                { 
                    trendings.map((trending, index) => {
                        const formattedPrice = useCurrency(trending.price);
                        return (
                            <SwiperSlide key={index}>
                                <img src={trending.image} alt='Smartwatch IP68' className='absolute top-0 w-100 h-auto' />
                                <div className="flex flex-col absolute top-2 md:-bottom-1 md:top-auto w-90 bg-[#29292990] rounded-xl p-3 gap-1">
                                    <h3 className="text-lg md:text-md font-['Ubuntu'] text-gray-800 dark:text-gray-100">{trending.product}</h3>
                                    <p className="text-lg font-['Ubuntu'] text-gray-800 dark:text-gray-100">{formattedPrice}</p>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    </div>
  )
}

export default TrendingLP