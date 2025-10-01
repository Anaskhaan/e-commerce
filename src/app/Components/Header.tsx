"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isProductsOpen, setIsProductsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className='fixed top-0 left-0 right-0 z-50 w-full bg-my-purple text-white text-sm md:text-base font-medium'>
        <div className='max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2'>
          <p className='text-center md:text-left'>
            🚀 Free shipping on orders over $50!
          </p>
          <Link
            href='/products'
            className='bg-white text-purple-700 hover:bg-gray-100 transition-all duration-300 px-4 py-1 rounded-full text-xs md:text-sm font-semibold transform hover:scale-105'>
            Shop Now
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className='fixed top-10 left-0 right-0 w-full bg-white text-black shadow-lg z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-4'>
            {/* Logo */}
            <Link href='/' onClick={handleNavClick}>
              <Image
                src='/logo.webp'
                alt='Logo'
                width={150}
                height={50}
                className='object-contain transition-transform duration-300 hover:scale-105'
              />
            </Link>

            {/* Desktop Nav */}
            <nav className='hidden md:flex space-x-8 text-md font-medium relative'>
              {navItems.map((item) =>
                item.name === "Products" ? (
                  <div
                    key={item.name}
                    className='relative group cursor-pointer'>
                    <button
                      className={`flex items-center gap-1 hover:text-my-purple transition-all duration-300 transform hover:scale-105 ${
                        pathname.startsWith("/products")
                          ? "text-my-purple font-semibold"
                          : ""
                      }`}>
                      Products{" "}
                      <ChevronDown
                        size={16}
                        className='transition-transform duration-300 group-hover:rotate-180'
                      />
                    </button>
                    {/* Dropdown */}
                    <div className='absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-xl rounded-lg w-48 z-50 border border-gray-100 overflow-hidden animate-fadeIn'>
                      <Link
                        href='/products/smart-alert-watch'
                        onClick={handleNavClick}
                        className='block px-4 py-3 hover:bg-my-purple hover:text-white transition-all duration-300 border-b border-gray-100 last:border-b-0'>
                        Smart Alert Watch
                      </Link>
                      <Link
                        href='/products/smart-alert-nacklace'
                        onClick={handleNavClick}
                        className='block px-4 py-3 hover:bg-my-purple hover:text-white transition-all duration-300 border-b border-gray-100 last:border-b-0'>
                        Smart Alert Nacklace
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`hover:text-my-purple transition-all duration-300 transform hover:scale-105 ${
                      pathname === item.href
                        ? "text-my-purple font-semibold"
                        : ""
                    }`}>
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className='focus:outline-none transition-transform duration-300 hover:scale-110 p-2 rounded-lg hover:bg-gray-100'>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className='md:hidden bg-my-purple text-white px-6 pb-6 space-y-1 z-50 relative shadow-2xl animate-slideDown'>
            <Link
              href='/'
              onClick={handleNavClick}
              className={`block py-3 px-2 border-b border-white/20 hover:bg-white/10 transition-all duration-300 rounded-lg ${
                pathname === "/"
                  ? "text-yellow-300 font-semibold bg-white/5"
                  : ""
              }`}>
              Home
            </Link>

            {/* Products with toggle */}
            <div>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`flex justify-between items-center w-full py-3 px-2 border-b border-white/20 hover:bg-white/10 transition-all duration-300 rounded-lg ${
                  pathname.startsWith("/products")
                    ? "text-yellow-300 font-semibold bg-white/5"
                    : ""
                }`}>
                <span>Products</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProductsOpen && (
                <div className='ml-4 space-y-1 mt-1 animate-fadeIn'>
                  <Link
                    href='/products/product1'
                    onClick={handleNavClick}
                    className='block py-2 px-4 hover:bg-white/10 transition-all duration-300 rounded-lg border-l-2 border-white/30'>
                    Product 1
                  </Link>
                  <Link
                    href='/products/product2'
                    onClick={handleNavClick}
                    className='block py-2 px-4 hover:bg-white/10 transition-all duration-300 rounded-lg border-l-2 border-white/30'>
                    Product 2
                  </Link>
                </div>
              )}
            </div>

            <Link
              href='/about'
              onClick={handleNavClick}
              className={`block py-3 px-2 border-b border-white/20 hover:bg-white/10 transition-all duration-300 rounded-lg ${
                pathname === "/about"
                  ? "text-yellow-300 font-semibold bg-white/5"
                  : ""
              }`}>
              About
            </Link>
            <Link
              href='/contact'
              onClick={handleNavClick}
              className={`block py-3 px-2 hover:bg-white/10 transition-all duration-300 rounded-lg ${
                pathname === "/contact"
                  ? "text-yellow-300 font-semibold bg-white/5"
                  : ""
              }`}>
              Contact
            </Link>
          </div>
        )}
      </header>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;
