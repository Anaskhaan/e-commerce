"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
} from "lucide-react";
import React from "react";

interface FooterSection {
  title: string;
  links: { name: string; href: string; external?: boolean }[];
}

interface SocialLink {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
}

interface Badge {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const Footer: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const footerSections: FooterSection[] = [
    {
      title: "Products",
      links: [
        {
          name: "Smart Alert Necklace",
          href: "/products/smart-alert-nacklace",
        },
        { name: "Smart Alert Watch", href: "/products/smart-alert-watch" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Mission", href: "/about#mission" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faqs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing email:", email);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  const badges: Badge[] = [
    { label: "24/7 Monitoring", icon: Shield },
    { label: "HIPAA Compliant", icon: CheckCircle },
    { label: "30-Day Guarantee", icon: Heart },
    { label: "US-Based Support", icon: Phone },
  ];

  return (
    <footer className='bg-gradient-to-br from-gray-900 to-purple-900 text-white'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Top Section - Newsletter & Contact */}
        <div className='grid lg:grid-cols-2 gap-8 mb-12 pb-8 border-b border-gray-700'>
          {/* Newsletter Subscription */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Shield className='w-6 h-6 text-purple-400' />
              <h3 className='text-xl font-bold'>Stay Protected & Informed</h3>
            </div>
            <p className='text-gray-300 max-w-md'>
              Subscribe to our newsletter for safety tips, product updates, and
              exclusive offers.
            </p>

            {isSubscribed ? (
              <div className='flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg'>
                <CheckCircle className='w-5 h-5' />
                <span>
                  Thank you for subscribing! Check your email for confirmation.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className='flex gap-2 max-w-md'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors'
                  required
                />
                <button
                  type='submit'
                  className='bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2'>
                  <Send className='w-4 h-4' />
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold mb-4'>24/7 Support</h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors'>
                <Phone className='w-5 h-5 text-purple-400' />
                <a href='tel:+1-800-LIFE-ALARM' className='font-semibold'>
                  1-800-LIFE-ALARM
                </a>
              </div>
              <div className='flex items-center gap-3 text-gray-300 hover:text-white transition-colors'>
                <Mail className='w-5 h-5 text-purple-400' />
                <a
                  href='mailto:support@lifealarm.com'
                  className='font-semibold'>
                  support@lifealarm.com
                </a>
              </div>
              <div className='flex items-center gap-3 text-gray-300'>
                <MapPin className='w-5 h-5 text-purple-400' />
                <span className='font-semibold'>24/7 Monitoring Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8'>
          {/* Brand Section */}
          <div className='lg:col-span-1 space-y-4'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center'>
                <Heart className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold'>Life Alarm</span>
            </div>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Trusted medical alert systems keeping seniors and families safe
              with 24/7 monitoring, automatic fall detection, and instant
              emergency response.
            </p>

            {/* Social Links */}
            <div className='flex gap-3 pt-2'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110'
                  aria-label={social.label}>
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className='space-y-4'>
              <h4 className='font-bold text-lg hidden md:block'>
                {section.title}
              </h4>
              <button
                onClick={() => toggleSection(section.title)}
                className='flex items-center justify-between w-full md:hidden'>
                <h4 className='font-bold text-lg'>{section.title}</h4>
                {openSections[section.title] ? (
                  <ChevronUp className='w-5 h-5' />
                ) : (
                  <ChevronDown className='w-5 h-5' />
                )}
              </button>
              <div
                className={`space-y-2 ${
                  openSections[section.title] ? "block" : "hidden md:block"
                }`}>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className='block text-gray-300 hover:text-white transition-colors duration-200 py-1 hover:translate-x-1 transform'>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-gray-700'>
          {badges.map((badge, index) => (
            <div
              key={index}
              className='flex items-center gap-3 text-center md:text-left'>
              <div className='w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0'>
                <badge.icon className='w-5 h-5 text-purple-400' />
              </div>
              <span className='text-sm font-semibold'>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='bg-gray-950 py-6'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-gray-400 text-sm text-center md:text-left'>
              © {new Date().getFullYear()} Life Alarm. All rights reserved.
              Protecting families since 2010.
            </div>
            <div className='flex gap-6 text-sm text-gray-400'>
              <Link
                href='/privacy'
                className='hover:text-white transition-colors'>
                Privacy
              </Link>
              <Link
                href='/terms'
                className='hover:text-white transition-colors'>
                Terms
              </Link>
              <Link
                href='/sitemap'
                className='hover:text-white transition-colors'>
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
