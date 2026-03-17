import React, { useState, useEffect } from 'react';
import { LogoFull, LogoCompact } from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeHash }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Products', href: '#products' },
        { name: 'About Us', href: '#about' },
    ];

    return (
        <>
            <header className="w-full flex justify-between items-center py-4 mb-4 z-[100] relative">
                <nav className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group outline-none" onClick={() => setMobileMenuOpen(false)}>
                        <LogoFull className="h-6 md:h-8 w-auto min-w-[100px] text-forest" fill="currentColor" />
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-8 font-sans font-medium text-sm">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`nav-link ${activeHash === link.href ? 'active' : ''} text-forest`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a href="#contacts" className="btn text-forest border-forest hover:bg-forest hover:text-white rounded-[100px] px-6 py-2 transition-colors">
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 rounded-full focus:outline-none"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </nav>
            </header>
            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-[600] bg-forest/40 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileMenuOpen(false)}
            />
            <div
                className={`fixed top-0 right-0 bottom-0 z-[610] w-[85vw] max-w-sm bg-forest border-l border-sage/10 p-8 flex flex-col transition-transform duration-500 cubic-bezier-[0.25, 0.46, 0.45, 0.94] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center mb-16">
                    <LogoCompact className="h-10 w-auto text-sage" fill="currentColor" />
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 text-sage hover:text-white transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>
                </div>

                <ul className="flex flex-col gap-8 text-2xl font-garamond italic">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-white hover:text-gold transition-colors block"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-sage/10">
                    <a href="#contacts" className="btn btn-filled w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                        Contact Us
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
