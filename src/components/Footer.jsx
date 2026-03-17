import React from 'react';
import { LogoFull } from './Logo';
import { ArrowUpRight, Globe2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full px-4 md:px-12 pb-6 pt-6 font-sans">

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6 lg:mb-8">

                {/* Card 1: Logo + Tagline (dark hero) */}
                <div className="bento-card dark-card !bg-forest text-white lg:col-span-2 flex flex-col justify-between min-h-[240px] border-none">
                    <LogoFull className="h-7 w-auto text-white" fill="currentColor" />
                    <div>
                        <p className="font-garamond italic text-2xl text-sage leading-snug mb-4">
                            "Architecting supply chains<br />the world depends on."
                        </p>
                        <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                            DMCC Free Zone — Dubai, UAE
                        </div>
                    </div>
                </div>

                {/* Card 2: Products links */}
                <div className="bento-card bg-cream border border-sage/20 flex flex-col justify-between min-h-[240px]">
                    <div className="font-mono text-[10px] text-forest/50 uppercase tracking-widest border border-forest/15 rounded-full px-3 py-1 self-start">
                        Products
                    </div>
                    <div className="flex flex-col gap-3 mt-6">
                        {['Caprolactam', 'Urea (Carbamide)', 'Ammonium Nitrate', 'Cyclohexanone', 'Ammonium Sulphate'].map(p => (
                            <a key={p} href="#products" className="font-sans text-sm text-forest/70 hover:text-forest transition-colors duration-200 flex items-center justify-between group/link">
                                {p}
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity -rotate-0" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Card 3: Company links */}
                <div className="bento-card bg-white border border-forest/8 flex flex-col justify-between min-h-[240px]">
                    <div className="font-mono text-[10px] text-forest/50 uppercase tracking-widest border border-forest/15 rounded-full px-3 py-1 self-start">
                        Company
                    </div>
                    <div className="flex flex-col gap-3 mt-6">
                        {[
                            { label: 'Who We Are', href: '#about' },
                            { label: 'Our Foundation', href: '#about' },
                            { label: 'Milestones', href: '#about' },
                            { label: 'Leadership', href: '#about' },
                        ].map(({ label, href }) => (
                            <a key={label} href={href} className="font-sans text-sm text-forest/70 hover:text-forest transition-colors duration-200 flex items-center justify-between group/link">
                                {label}
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                    <a href="#contacts" className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-forest border-b border-forest/20 pb-1 hover:border-gold hover:text-gold transition-colors self-start">
                        Contact the Desk
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                </div>

                {/* Card 4: Contact info (gold accent) */}
                <div className="bento-card !bg-[#E9C984] text-forest border-none lg:col-span-2 flex flex-col justify-between min-h-[180px]">
                    <div className="flex items-center justify-between">
                        <div className="font-mono text-[10px] text-forest/60 uppercase tracking-widest border border-forest/20 rounded-full px-3 py-1 bg-white/30">
                            Get in Touch
                        </div>
                        <Globe2 className="w-5 h-5 text-forest/50" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="flex flex-col gap-2">
                            <a href="mailto:info@agronit.com" className="font-sans text-base font-medium text-forest hover:opacity-70 transition-opacity">
                                info@agronit.com
                            </a>
                            <a href="tel:+971000000000" className="font-mono text-sm text-forest/70 hover:text-forest transition-colors">
                                +971 00 000 0000
                            </a>
                        </div>
                        <a href="#contacts" className="w-12 h-12 rounded-full bg-forest flex items-center justify-center shadow-md hover:bg-forest/80 transition-colors flex-shrink-0">
                            <ArrowUpRight className="w-5 h-5 text-sage -rotate-0" />
                        </a>
                    </div>
                </div>

                {/* Card 5: Status + copyright (full width bottom bar styled as card) */}
                <div className="bento-card bg-white border border-forest/8 lg:col-span-2 flex flex-col md:flex-row items-center justify-between gap-4 !py-6 !px-8 min-h-0">
                    <div className="font-mono text-[10px] text-forest/40 uppercase tracking-widest text-center md:text-left">
                        © 2026 AGRONIT TRADING FZCO — DMCC, Dubai, UAE. All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
