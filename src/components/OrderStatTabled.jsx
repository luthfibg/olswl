import { useSidebar } from '../contexts/SidebarContext'
import { useNavigate } from 'react-router-dom';

const OrderStatTabled = ({ title, value, icon: Icon, iconColor, color, change, tableData = [] }) => {
  const navigate = useNavigate();
  const { sidebarExpanded } = useSidebar();
  const isPositive = change.startsWith('🡡 ');

  return (
    <div
      onClick={() => navigate('/admin/orders')}
      className="bg-white dark:bg-[#272727] rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
    >
        <div className="flex items-center justify-between">
            <div className={`overflow-x-auto ${sidebarExpanded ? 'flex-4/10' : 'flex-8/10'} flex self-start`}>
                <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-[#b3b3b3]">{title}</p>
                    {
                        !sidebarExpanded && title === 'Penjualan Bulanan' ? <p className="text-lg font-bold text-gray-900 dark:text-blue-400 mt-1">{value}</p> : <p className="text-2xl font-bold text-gray-900 dark:text-blue-400">{value}</p>
                    }
                </div>
            </div>
            <div className={`relative max-h-[100px] overflow-hidden ${sidebarExpanded ? 'block flex-4/10' : 'hidden'}`}>
                <table className="text-left text-xs text-blue-400 w-full">
                    <tbody>
                        {tableData.slice(0, 3).map((order, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-[#3b3b3b]">
                            <td className="py-1 pr-2 whitespace-nowrap">{order.category}</td>
                            <td className="py-1 text-right">{order.number
                            }</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                {/* Gradient fade bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white dark:from-[#272727] to-transparent pointer-events-none" />
            </div>
            <div className={`w-10 h-10 flex-2/10 ${color} rounded-lg flex items-center justify-center self-start ml-3`}>
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
  );
};

export default OrderStatTabled;
