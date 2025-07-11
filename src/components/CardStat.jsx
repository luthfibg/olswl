import { useSidebar } from "../contexts/SidebarContext";

const CardStat = ({ title, value, icon: Icon, iconColor, color, change }) => {
    const isPositive = change.startsWith('🡡 ');
    const { sidebarExpanded } = useSidebar();
    return (
        <div className="bg-white dark:bg-[#272727] rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-[#b3b3b3]">{title}</p>
                    {
                        !sidebarExpanded && title === 'Penjualan Bulanan' ? <p className="text-lg font-bold text-gray-900 dark:text-blue-400 mt-1">{value}</p> : <p className="text-2xl font-bold text-gray-900 dark:text-blue-400 mt-1">{value}</p>
                    }
                </div>
                <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center self-start`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
            </div>
            <div className="mt-4">
                <span className={`inline-flex justify-center items-center rounded-full px-1 ${isPositive ? 'bg-green-100 dark:bg-[#343936]' : 'bg-red-100 dark:bg-[#393434]'}`}>
                <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {change}
                </span>
                </span>
                <span className="text-sm text-gray-400 ml-1">since last month</span>
            </div>
        </div>

    )
}

export default CardStat