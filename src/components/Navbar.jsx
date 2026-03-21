import { useState } from 'react';
import { LogoFull } from './Logo';
import { ArrowUpRight } from 'lucide-react';

const Navbar = ({ activeHash }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Products', href: '#products' },
        { name: 'About Us', href: '#about' },
    ];

    const close = () => setMobileMenuOpen(false);

    return (
        <>
            <header className="fixed top-4 left-4 right-4 z-[200] md:relative md:top-auto md:left-auto md:right-auto md:w-full md:flex md:justify-between md:items-center md:py-4 md:mb-4 bg-white/60 backdrop-blur-md rounded-full px-5 py-3 md:bg-transparent md:backdrop-blur-none md:rounded-none md:px-0 md:py-4">
                <nav className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group outline-none" onClick={close}>
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
                        onClick={() => setMobileMenuOpen(o => !o)}
                        aria-label="Toggle Menu"
                    >
                        <span className="font-mono text-[10px] uppercase tracking-widest">
                            {mobileMenuOpen ? 'Close' : 'Menu'}
                        </span>
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`}>
                            <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            <line x1="0" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </button>
                </nav>
            </header>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={close}
            />

            {/* Dropdown Menu */}
            <div className={`fixed left-4 right-4 z-[190] md:hidden overflow-hidden transition-all duration-400 ease-out ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{ top: '72px', maxHeight: mobileMenuOpen ? '400px' : '0', transition: 'max-height 0.4s ease, opacity 0.25s ease' }}>
                <div className="bg-white/90 backdrop-blur-md rounded-[24px] border border-forest/10 shadow-xl p-3 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center justify-between px-4 py-3 rounded-2xl border border-forest/8 hover:bg-forest hover:border-forest hover:text-white text-forest font-sans font-medium text-sm transition-all duration-200 group"
                            onClick={close}
                        >
                            {link.name}
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 transition-opacity" />
                        </a>
                    ))}
                    <a
                        href="#contacts"
                        className="flex items-center justify-between px-4 py-3 rounded-2xl bg-forest text-white font-sans font-medium text-sm transition-all duration-200 group hover:bg-forest/80 mt-1"
                        onClick={close}
                    >
                        Contact Us
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
