import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './Landingpage'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManagement from './pages/ProductManagement'
import { SidebarProvider } from './contexts/SidebarContext'
import Orders from './pages/Orders'
import Transaction from './pages/Transaction'
import Customers from './pages/Customers'
import EventNPromotion from './pages/EventNPromotion'
import StoreCenter from './pages/StoreCenter'
import Loader from './components/Loader'
import Example from './assets/example'

function App() {
  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path='/loader' element={<Loader />} />
          <Route path='/example' element={<Example />}/>
          <Route path='/admin' element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product-management" element={<ProductManagement />} />
            <Route path="orders" element={<Orders />} />
            <Route path="transactions" element={<Transaction />} />
            <Route path="customers" element={<Customers />} />
            <Route path="event-and-promotion" element={<EventNPromotion />} />
            <Route path="settings" element={<StoreCenter />} />
          </Route>
        </Routes>
      </Router>
    </SidebarProvider>
  )
}

export default App
