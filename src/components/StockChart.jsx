import React from 'react'

const StockChart = () => {
  return (
    <div className="col-span-2 bg-white dark:bg-[#272727] rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Komposisi Stok</h3>
        <div className="h-64 bg-gray-50 dark:bg-[#3b3b3b] rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-white">Pie chart will be here</p>
        </div>
    </div>
  )
}

export default StockChart