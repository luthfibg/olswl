import { FaRegCheckCircle } from "react-icons/fa";
import { advantages } from "../data/data-placeholder";
import '../tablet-custom.css';

const AdvantagesLP = () => {
    return (
        <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-3 font-['Ubuntu'] w-[calc(100%-1rem)] mx-auto sm:w-[calc(100%-2rem)] h-fit mt:10 sm:mt-20 mb-10 advantages-container">
            {
                advantages.map((advantage, index) => {
                    const IconComponent = advantage.icon
                   return (
                        <div key={index} className={`box${index + 1} flex py-5 justify-start items-center gap-3 w-full rounded-2xl`}>
                            <div className="icon-wrapper rounded-full lg:p-3 sm:h-full p-4 sm:p-2 bg-gray-100 dark:bg-gray-800">
                            
                                <IconComponent className='text-3xl text-purple-500' />
                            </div>
                            <div className="flex flex-col gap-0 sm:gap-4 sm:self-start">
                                <h3 className='font-bold text-2xl text-purple-400'>{advantage.title}</h3>
                                <p className='text-lg sm:text-sm font-light sm:font-medium lg:text-[1rem]'>{advantage.description}</p>
                            </div>
                        </div>
                   )
                })
            }
        </div>
    )
}

export default AdvantagesLP