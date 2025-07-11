import { FaRegCheckCircle } from "react-icons/fa";

const AdvantagesLP = () => {
    return (
        <div className="flex gap-3 font-['Ubuntu'] w-[calc(100%-1rem)] mx-auto sm:w-[calc(100%-2rem)] h-[20vh] mt-20 mb-10">
            <div className="box1 flex py-5 justify-start items-center gap-3 w-full rounded-2xl">
                <div className="icon-wrapper rounded-full p-4 bg-gray-100 dark:bg-gray-800">
                    <FaRegCheckCircle className='text-3xl text-purple-500' />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className='font-bold text-2xl text-purple-400'>Kualitas Terjamin</h3>
                    <p className='text-sm lg:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="box2 flex justify-start items-center gap-3 w-full rounded-2xl">
                <div className="icon-wrapper rounded-full p-4 bg-gray-100 dark:bg-gray-800">
                    <FaRegCheckCircle className='text-3xl text-purple-500' />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className='font-bold text-2xl text-purple-400'>Kualitas Terjamin</h3>
                    <p className='text-sm lg:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="box3 flex justify-start items-center gap-3 w-full rounded-2xl">
                <div className="icon-wrapper rounded-full p-4 bg-gray-100 dark:bg-gray-800">
                    <FaRegCheckCircle className='text-3xl text-purple-500' />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className='font-bold text-2xl text-purple-400'>Kualitas Terjamin</h3>
                    <p className='text-sm lg:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="box4 flex justify-start items-center gap-3 w-full rounded-2xl">
                <div className="icon-wrapper rounded-full p-4 bg-gray-100 dark:bg-gray-800">
                    <FaRegCheckCircle className='text-3xl text-purple-500' />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className='font-bold text-2xl text-purple-400'>Kualitas Terjamin</h3>
                    <p className='text-sm lg:text-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
        </div>
    )
}

export default AdvantagesLP