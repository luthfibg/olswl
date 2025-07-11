// data.js
import {
  UsersIcon,
  BanknotesIcon,
  ArrowPathRoundedSquareIcon,
  CubeIcon,
  ArrowsUpDownIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

export const topProducts = [
  {
    name: 'Airpads AE690',
    qty: 12,
    unit: 'pcs',
  },
  {
    name: 'Baseas PB100',
    qty: 6,
    unit: 'pcs',
  },
  {
    name: 'San MicroSD',
    qty: 4,
    unit: 'pcs',
  },
];

export const allOrders = [
  {
    category: 'Baru',
    number: 12,
  },
  {
    category: 'Proses',
    number: 6,
  },
  {
    category: 'Selesai',
    number: 1216,
  }
]

export const cards = [
  {
    title: 'Penjualan Bulanan (Rupiah)',
    type: 'value',
    value: '2,534,000',
    change: '🡡 8%',
    color: 'bg-amber-200',
    iconColor: 'text-amber-800',
    icon: BanknotesIcon,
  },
  {
    title: 'Produk Terlaris',
    type: 'top-products-table',
    value: '456',
    change: '🡡 3%',
    color: 'bg-orange-200',
    iconColor: 'text-orange-800',
    icon: CubeIcon,
    tableData: topProducts,
  },
  {
    title: 'Total Pelanggan',
    type: 'value',
    value: '287',
    change: '🡡 12%',
    color: 'bg-blue-200',
    iconColor: 'text-blue-800',
    icon: UsersIcon,
  },
  {
    title: 'Pesanan',
    type: 'orders-stat-table',
    value: '1,234',
    change: '🡡 15%',
    color: 'bg-purple-200',
    iconColor: 'text-purple-800',
    icon: ArrowPathRoundedSquareIcon,
    tableData: allOrders,
  },
  {
    title: 'Keuntungan Perbulan',
    type: 'value',
    value: '3.2%',
    change: '🡣 2%',
    color: 'bg-stone-200',
    iconColor: 'text-stone-800',
    icon: ArrowsUpDownIcon,
  },
  {
    title: 'Kunjungan Web Tahunan',
    type: 'value',
    value: '75,678',
    change: '🡡 22%',
    color: 'bg-indigo-200',
    iconColor: 'text-indigo-800',
    icon: EyeIcon,
  },
];