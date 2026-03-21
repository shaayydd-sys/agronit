import React, { useState, useEffect } from 'react';
import { LogoFull } from './Logo';
import { X, ArrowUpRight } from 'lucide-react';

const Navbar = ({ activeHash }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Products', href: '#products' },
        { name: 'About Us', href: '#about' },
    ];

    return (
        <>
            <header className="fixed top-4 left-4 right-4 z-[100] md:relative md:top-auto md:left-auto md:right-auto md:w-full md:flex md:justify-between md:items-center md:py-4 md:mb-4 bg-white/50 backdrop-blur-md rounded-full px-5 py-3 md:bg-transparent md:backdrop-blur-none md:rounded-none md:px-0 md:py-4">
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
                        className="md:hidden flex items-center gap-2 p-2 focus:outline-none text-forest"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <span className="font-mono text-[10px] uppercase tracking-widest">Menu</span>
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <line x1="0" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </nav>
            </header>
            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-[600] bg-black/60 backdrop-blur-md transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileMenuOpen(false)}
            />
            <div
                className={`fixed top-0 right-0 z-[610] w-[85vw] max-w-sm bg-white border-l border-forest/10 p-8 flex flex-col transition-transform duration-500 h-[100dvh] rounded-l-[32px] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-end items-center mb-8">
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-center w-11 h-11 rounded-2xl border border-forest/10 bg-white/60 hover:bg-forest hover:border-forest hover:text-white text-forest transition-all duration-200"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <ul className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="flex items-center justify-between px-5 py-4 rounded-2xl border border-forest/10 bg-white/60 hover:bg-forest hover:border-forest hover:text-white text-forest font-sans font-medium text-base transition-all duration-200 group"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                                <ArrowUpRight className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-forest/10">
                    <a href="#contacts" className="flex items-center justify-between px-5 py-4 rounded-2xl bg-forest text-white font-sans font-medium text-base transition-all duration-200 group hover:bg-forest/80" onClick={() => setMobileMenuOpen(false)}>
                        Contact Us
                        <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
