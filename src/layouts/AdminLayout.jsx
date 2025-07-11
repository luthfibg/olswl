import SidebarAdmin from '../components/SidebarAdmin';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {

  return (
    <div className="flex h-screen w-screen bg-gray-100 dark:bg-[#3b3b3b]">
      <SidebarAdmin />
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
