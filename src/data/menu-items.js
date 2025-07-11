import {
  HomeIcon,
  ArrowPathRoundedSquareIcon,
  BanknotesIcon,
  CogIcon,
  UsersIcon,
  CubeIcon,
} from '@heroicons/react/24/outline';

export const menuItems = [
  { icon: HomeIcon, label: 'Dashboard', path: '/admin/dashboard', active: true },
  { icon: CubeIcon, label: 'Pusat Produk', path: '/admin/product-management', active: false },
  { icon: ArrowPathRoundedSquareIcon, label: 'Pusat Pesanan', path: '/admin/orders', active: false },
  { icon: BanknotesIcon, label: 'Pusat Transaksi', path: '/admin/transactions', active: false },
  { icon: UsersIcon, label: 'Pusat Pelanggan', path: '/admin/customers', active: false },
  { icon: CogIcon, label: 'Pengaturan Toko', path: '/admin/settings', active: false },
];