import { useSidebar } from '../contexts/SidebarContext'
import { useNavigate } from 'react-router-dom';

const TopProductsStatTabled = ({ title, icon: Icon, iconColor, color, tableData = [] }) => {
  const navigate = useNavigate();
  const { sidebarExpanded } = useSidebar();

  return (
    <div
      onClick={() => navigate('/admin/product-management')}
      className="bg-white dark:bg-[#272727] rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div className="overflow-x-auto flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-[#b3b3b3]">{title}</p>
          <div className="relative max-h-[100px] overflow-hidden mt-1">
            <table className="text-left text-xs text-blue-400 w-full">
              <tbody>
                {tableData.slice(0, 3).map((product, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-[#3b3b3b]">
                    <td className="py-1 pr-2 whitespace-nowrap">{product.name}</td>
                    <td className="py-1 text-right">{
                        sidebarExpanded ? `${product.qty} ${product.unit}` : `${product.qty}`
                    }</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Gradient fade bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-white dark:from-[#272727] to-transparent pointer-events-none" />
          </div>
        </div>
        <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center self-start ml-3`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default TopProductsStatTabled;
