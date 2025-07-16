// data.js
import {
  UsersIcon,
  BanknotesIcon,
  ArrowPathRoundedSquareIcon,
  CubeIcon,
  ArrowsUpDownIcon,
  EyeIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { FaRegCheckCircle } from "react-icons/fa";

import smwatch from '../assets/p-smwatch.png'
import ipad1 from '../assets/p-ipad-air.png'
import ipad2 from '../assets/p-ipad-air2.png'
import whiteairpods from '../assets/p-white-airpods.png'
import galaxytab9 from '../assets/p-galaxy-tab9.png'
import btspeaker from '../assets/p-bt-speaker.png'
import btspeaker2 from '../assets/p-bt-speaker2.png'
import s25u from '../assets/S25U.png'
import gfit3 from '../assets/p-galaxy-fit3.png'


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

export const advantages = [
  {
    title: 'Kualitas Terjamin',
    description: 'Produk kami telah melewati beberapa tahap pengujian untuk memastikan kualitasnya.',
    icon: FaRegCheckCircle,
  },
  {
    title: 'Pengiriman Cepat',
    description: 'Kami menggunakan jasa pengiriman terbaik untuk menjaga keamanan dankecepatan pengiriman produk.',
    icon: FaRegCheckCircle,
  },
  {
    title: 'Pelayanan Pelanggan',
    description: 'Tim kami siap membantu pelanggan dengan cepat dan profesional.',
    icon: FaRegCheckCircle,
  },
  {
    title: 'Pengembalian Barang',
    description: 'Kami menyediakan sistem pengembalian barang dengan cepat dan mudah.',
    icon: FaRegCheckCircle,
  },
];

export const trendings = [
  {
    product: 'Smartwatch IP68',
    price: 499000,
    image: smwatch,
  },
  {
    product: 'Speaker Bluetooth',
    price: 399000,
    image: btspeaker,
  },
  {
    product: 'Ipad Air',
    price: 7599000,
    image: ipad1,
  },
  {
    product: 'Airpods Pro',
    price: 3599000,
    image: whiteairpods,
  },
  {
    product: 'Ipad Pro',
    price: 10599000,
    image: ipad2,
  },
  {
    product: 'Samsung Galaxy Tab 9',
    price: 5299000,
    image: galaxytab9,
  },
  {
    product: 'Bluetooth Speaker M6',
    price: 910000,
    image: btspeaker2,
  },
  {
    product: 'Galaxy S25 Ultra',
    price: 16969000,
    image: s25u,
  },
  {
    product: 'Samsung Galaxy Fit 3',
    price: 3255000,
    image: gfit3,
  },
];