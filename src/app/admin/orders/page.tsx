"use client";

import { useEffect, useState } from "react";

type Product = {
  name: string;
  plan: string;
  price: number;
};

type Order = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  product: Product;
  createdAt: string;
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/admin/orders");
      const data = await res.json();

      if (data.success) {
        const parsedOrders = data.orders.map((o: any) => ({
          ...o,
          product:
            typeof o.product === "string" ? JSON.parse(o.product) : o.product,
        }));
        setOrders(parsedOrders);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRevenue = orders.reduce(
    (sum, order) => sum + (order.product?.price || 0),
    0
  );

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-lg text-gray-600'>Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='mb-8'>
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8'>
            <div>
              <h1 className='text-4xl font-bold text-gray-900 mb-2'>
                Order Management
              </h1>
              <p className='text-gray-600'>
                Manage and track all customer orders
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-4 text-center'>
                <p className='text-sm text-gray-600 mb-1'>Total Orders</p>
                <p className='text-2xl font-bold text-gray-900'>
                  {orders.length}
                </p>
              </div>
              <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-4 text-center'>
                <p className='text-sm text-gray-600 mb-1'>Total Revenue</p>
                <p className='text-2xl font-bold text-green-600'>
                  ${totalRevenue.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6'>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex-1 relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </div>
                <input
                  type='text'
                  placeholder='Search orders by customer, email, or product...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200'
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className='px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200'>
                <option value='all'>All Status</option>
                <option value='pending'>Pending</option>
                <option value='completed'>Completed</option>
                <option value='shipped'>Shipped</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Grid */}
        <div className='grid gap-6'>
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className='bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden'>
              <div className='p-6'>
                <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                      <svg
                        className='w-6 h-6 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900 text-lg'>
                        {order.name}
                      </h3>
                      <p className='text-gray-600 text-sm'>{order.email}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <span className='bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full'>
                      Completed
                    </span>
                    <span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>
                      ${order.product?.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4'>
                  <div>
                    <p className='text-sm text-gray-600 mb-1'>Product</p>
                    <p className='font-medium text-gray-900'>
                      {order.product?.name}
                    </p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-600 mb-1'>Plan</p>
                    <p className='font-medium text-gray-900 capitalize'>
                      {order.product?.plan}
                    </p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-600 mb-1'>Phone</p>
                    <p className='font-medium text-gray-900'>{order.phone}</p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-600 mb-1'>Order Date</p>
                    <p className='font-medium text-gray-900'>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className='mb-4'>
                  <p className='text-sm text-gray-600 mb-1'>Shipping Address</p>
                  <p className='font-medium text-gray-900'>{order.address}</p>
                </div>

                <div className='flex justify-between items-center pt-4 border-t border-gray-200'>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                    {new Date(order.createdAt).toLocaleString()}
                  </div>
                  <div className='flex gap-2'>
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200'>
                      View Details
                    </button>
                    <button className='px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-200'>
                      Process
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className='text-center py-12'>
            <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-10 h-10 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
                />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              No orders found
            </h3>
            <p className='text-gray-600'>Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <div className='bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6 border-b border-gray-200'>
              <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold text-gray-900'>
                  Order Details
                </h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className='text-gray-400 hover:text-gray-600 transition-colors duration-200'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='p-6 space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                    Customer Information
                  </h3>
                  <div className='space-y-3'>
                    <div>
                      <p className='text-sm text-gray-600'>Full Name</p>
                      <p className='font-medium'>{selectedOrder.name}</p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-600'>Email</p>
                      <p className='font-medium'>{selectedOrder.email}</p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-600'>Phone</p>
                      <p className='font-medium'>{selectedOrder.phone}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                    Order Information
                  </h3>
                  <div className='space-y-3'>
                    <div>
                      <p className='text-sm text-gray-600'>Order ID</p>
                      <p className='font-medium'>#{selectedOrder.id}</p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-600'>Order Date</p>
                      <p className='font-medium'>
                        {new Date(selectedOrder.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className='text-sm text-gray-600'>Status</p>
                      <span className='bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full'>
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Shipping Address
                </h3>
                <p className='text-gray-900 bg-gray-50 p-4 rounded-xl'>
                  {selectedOrder.address}
                </p>
              </div>

              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Product Details
                </h3>
                <div className='bg-gray-50 rounded-xl p-4'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='font-medium text-gray-900'>
                        {selectedOrder.product?.name}
                      </p>
                      <p className='text-gray-600 capitalize'>
                        {selectedOrder.product?.plan} Plan
                      </p>
                    </div>
                    <p className='text-xl font-bold text-blue-600'>
                      ${selectedOrder.product?.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-6 border-t border-gray-200 flex justify-end gap-3'>
              <button
                onClick={() => setSelectedOrder(null)}
                className='px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium'>
                Close
              </button>
              <button className='px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 font-medium'>
                Print Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
