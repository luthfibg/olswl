import { SparklesIcon, BoltIcon, DevicePhoneMobileIcon, DeviceTabletIcon, MicrophoneIcon } from '@heroicons/react/24/outline'

const CategoryLP = () => {

    const categories = [
        { icon: SparklesIcon, name: 'Aksesori' },
        { icon: DevicePhoneMobileIcon, name: 'Smartphone' },
        { icon: DeviceTabletIcon, name: 'Tablet' },
        { icon: MicrophoneIcon, name: 'Audio' },
        { icon: BoltIcon, name: 'Daya' },
    ];

    const getCardClass = (index, totalItems) => {
        const isLastItem = index === totalItems - 1;
        const isOddTotal = totalItems % 2 === 1;

        // Base class all cat cards
        const baseClasses = 'flex rounded-2xl h-full py-10 gap-3 justify-center items-center flex-col dark:bg-[#292929] bg-gray-100';

        // If last item is odd, make full width
        if (isLastItem && isOddTotal) {
            return `${baseClasses} w-full md:w-[calc(20%-0.6rem)]`;
        }

        return `${baseClasses} w-[calc(50%-0.375rem)] md:w-[calc(20%-0.6rem)]`;
    }

    return (
        <div className="flex flex-col justify-center items-center rounded-2xl w-[calc(100%-1rem)] mx-auto sm:w-[calc(100%-2rem)] h-fit gap-5 mt-15">
            <div className="title-section">
                <h3 className='text-center text-2xl font-["Ubuntu"] font-light'>Berdasarkan Kategori</h3>
            </div>
            <div className="content-section flex flex-wrap gap-3 w-full h-full">
                {categories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                        <div key={index} className={getCardClass(index, categories.length)}>
                            <div className='flex justify-center items-center p-8 rounded-full bg-purple-300 dark:bg-[#3b3b3b]'>
                                <IconComponent className="w-12 h-12 text-gray-800 dark:text-purple-500" />
                            </div>
                            <h3 className='font-light text-xl text-center'>{category.name}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default CategoryLP