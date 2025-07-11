import '../loader.css'
import logo from '../assets/logo-dark.png'

const Loader = () => {
  return (
    <div className="loader-page w-screen h-screen flex flex-col justify-center items-center">
        <div className="cube-loader">
            <div className="cube-top flex justify-center items-center text-center text-white">
                <img src={logo} className='h-12' alt="brand logo" />
            </div>
            <div className="cube-wrapper w-full h-full">
                <span style={{ '--i':0 }} className="cube-span"></span>
                <span style={{ '--i':1 }} className="cube-span"></span>
                <span style={{ '--i':2 }} className="cube-span"></span>
                <span style={{ '--i':3 }} className="cube-span"></span>
            </div>
        </div>
        <h3 className='mt-15 text-lg text-gray-800 dark:text-gray-100'>Mohon Tunggu ...</h3>
    </div>
  )
}

export default Loader