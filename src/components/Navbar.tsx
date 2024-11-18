"use client";

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#383838] px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#F4F4F3] text-lg font-semibold">
          <Link href="/" className="hover:text-[#EC5C39]">MyWebsite</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/consultation" label="Consultation" />
          <NavLink href="/contact" label="Contact" />
        </div>
        <div className="md:hidden">
          <button className="text-[#F4F4F3]">Menu</button>
        </div>
      </div>
    </nav>
  );
};

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: NavLinkProps) => (
  <Link href={href} className="px-4 py-2 text-[#F4F4F3] hover:text-[#EC5C39]">{label}</Link>
);

export default Navbar;