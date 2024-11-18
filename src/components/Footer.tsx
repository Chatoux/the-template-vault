'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#383838] text-[#FFFFFF] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Company Name */}
          <div className="mb-4 md:mb-0">
            <Image src="/images/logo.svg" alt="Company Logo" width={120} height={60} />
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} className="hover:opacity-80" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} className="hover:opacity-80" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="hover:opacity-80" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left md:mb-0">
            <p>Contact us at:</p>
            <p>Email: info@company.com | Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-[#EC5C39]" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;