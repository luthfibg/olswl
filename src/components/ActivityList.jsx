import React from 'react'

const ActivityList = () => {
  return (
    <div className="bg-white dark:bg-[#272727] rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Aktivitas</h3>
        <div className="space-y-4">
            {[1,2,3,4].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-800 dark:text-gray-100">Pengguna baru terdaftar</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">2 menit lalu</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ActivityList