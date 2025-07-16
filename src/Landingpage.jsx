import NavbarLP from './components/NavbarLP'
import HeaderLP from './components/HeaderLP';
import { ArrowRightIcon, FireIcon } from '@heroicons/react/24/outline';
import './tablet-custom.css';
import AdvantagesLP from './components/AdvantagesLP';
import BestSellerLP from './components/BestSellerLP';
import s24u from './assets/S24Ubgless.png';
import smwatch from './assets/p-smwatch.png';
import freelabel from './assets/freelabel.png';
import { Link } from 'react-router-dom';
import TrendingLP from './components/TrendingLP';
import FooterLP from './components/FooterLP';
import CategoryLP from './components/CategoryLP';

const Landingpage = () => {
  return (
    <div className='flex flex-col lp pb-5 overflow-hidden w-[calc(100vw-0.25rem)] mx-auto'>
    
      <NavbarLP />
      <HeaderLP />
      <AdvantagesLP />
      <BestSellerLP />
      <CategoryLP />
      <div className="flex sm:flex-row flex-col mt-20 gap-4 w-[calc(100%-1rem)] mx-auto sm:w-[calc(100%-2rem)]">
        <div className="grid grid-cols-6 relative rounded-2xl flex-6/10 bg-gray-200 dark:bg-[#4b4b4b] overflow-hidden">
          <div className="new-label z-10 flex items-center justify-center gap-2 absolute top-5 -left-10 bg-gradient-to-r from-indigo-900 to-slate-900 px-10 transform -rotate-45">
            <span className='text-md md:text-lg font-["Ubuntu"] font-light text-white'>Diskon 10%</span>
            {/* <StarIcon className="w-6 h-6 text-white" /> */}
          </div>
          <div className="flex flex-col self-end justify-self-start w-60 xl:w-80 mb-10 ms-10 z-5">
            <h4 className="text-xl font-['Ubuntu'] font-bold mb-5">Samsung Galaxy S24 Ultra</h4>
            <p className="font-light w-full mb-3">Kumpulkan poin Event S24 Flash Launch 2025 dan dapatkan diskon 10% untuk pembelian S24 Ultra!</p>
            <Link to="/products" className="bg-transparent flex items-center text-white font-['Ubuntu'] font-light rounded-full py-2 px-5 self-end">
              <span>Lihat Event</span>
              <ArrowRightIcon className="w-5 h-5 ms-2" />
            </Link>
          </div>
          <img src={s24u} alt='S24U' className='w-100 z-2 h-auto absolute -right-10' />
          <span className="text-gray-200 -left-10 absolute bottom-5 dark:text-[#3f3f3f] text-center tracking-tighter font-extrabold h-[80%] whitespace-nowrap lg:whitespace-nowrap text-[6rem] md:text-[12rem] xl:text-[20rem]">S24 Ultra
          </span>
        </div>
        <div className="flex relative flex-col overflow-hidden bg-gray-200 dark:bg-[#4b4b4b] rounded-2xl flex-4/10">
          <div className="flex absolute items-center top-0 h-10 m-5 ps-3 justify-between p-2 rounded-full w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] bg-amber-200 dark:bg-amber-950">
            <span className='font-["Ubuntu"] md:text-lg font-light text-amber-500'>Tersisa: 24</span>
            <FireIcon className="w-14 h-14 text-orange-500 rounded-full shadow-xl shadow-amber-500 bg-none" />
          </div>
          <img src={freelabel} alt='Free Label Logo' className='absolute top-20 left-5 h-12 z-10' />
          <img src={smwatch} alt='Free Smartwatch' className='w-full h-auto' />
          <div className="absolute bottom-10 start-10 w-90 z-5">
            <h4 className="text-lg font-['Ubuntu'] font-light mb-5">Menangkan Smartwatch B-Wheels 143, di event National tronik 2025, dengan mengumpulkan poin sebanyak-banyaknya!</h4>
            <Link to="/products" className="bg-transparent flex items-center text-white font-['Ubuntu'] font-light rounded-full py-2 self-start">
              <span>Kejar Poin!</span>
              <ArrowRightIcon className="w-5 h-5 ms-2" />
            </Link>
          </div>
        </div>
      </div>
      <TrendingLP />
      <FooterLP />
    </div>
  )
}

export default Landingpage