import { UserCircleIcon } from "@heroicons/react/24/solid"
import { BellIcon } from "@heroicons/react/24/outline"
const Header = () => {
  return (
    <header className="bg-white dark:bg-[#3b3b3b] shadow-sm dark:shadow-lg dark:border-gray-200 h-14">
        <div className="flex h-full items-center my-auto justify-between px-6 py-1">
            <div>
                <p className="text-md font-semibold text-gray-800 dark:text-white">Ringkasan Dashboard</p>
            </div>

            <div className="flex items-center space-x-4">
                <button className="non-btn p-1 rounded-lg hover:bg-blue-100 dark:hover:bg-[#2a2a2a] bg-gray-100 dark:bg-[#4e4e4e] relative">
                    <BellIcon className="w-5 h-5 text-gray-600 dark:text-white" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="non-btn flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a]">
                    <UserCircleIcon className="w-6 h-6 text-gray-600 dark:text-white" />
                    <span className="text-sm font-medium text-gray-700 dark:text-blue-400">Alim Muhammad</span>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header