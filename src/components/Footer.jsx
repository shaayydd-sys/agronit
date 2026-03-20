import { LogoFull } from './Logo';
import { ArrowUpRight } from 'lucide-react';

const Footer = ({ activeHash }) => {
    return (
        <footer className="w-full px-3 sm:px-4 md:px-12 pb-4 md:pb-6 lg:pb-8 pt-4 md:pt-6 lg:pt-8 font-sans">

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6 lg:mb-8">

                {/* Card 1: Logo + Tagline (dark hero) */}
                <div className="bento-card dark-card !bg-forest text-white lg:col-span-2 flex flex-col justify-between min-h-[280px] border-none">
                    <LogoFull className="h-7 w-auto text-white" fill="currentColor" />
                    <div>
                        <p className="font-garamond italic text-2xl text-sage leading-snug mb-4">
                            "Architecting supply chains<br />the world depends on."
                        </p>
                        <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                            License No. DMCC-1007790
                        </div>
                    </div>
                </div>

                {/* Card 2: Products links */}
                <div className="bento-card bg-cream border border-sage/20 flex flex-col justify-between">
                    <div className="font-mono text-[10px] text-forest/50 uppercase tracking-widest border border-forest/15 rounded-full px-3 py-1 self-start">
                        Products
                    </div>
                    <div className="flex flex-col gap-3 mt-6">
                        {['Caprolactam', 'Urea (Carbamide)', 'Ammonium Nitrate', 'Cyclohexanone', 'Ammonium Sulphate'].map(p => (
                            <a key={p} href="#products" className="font-sans text-sm text-forest/70 hover:text-gold transition-colors duration-200 flex items-center justify-between group/link">
                                {p}
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity -rotate-0" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Card 3: Company links */}
                <div className="bento-card bg-white border border-forest/8 flex flex-col justify-between">
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
                            <a key={label} href={href} className="font-sans text-sm text-forest/70 hover:text-gold transition-colors duration-200 flex items-center justify-between group/link">
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
                <div className="bento-card bg-cream border border-sage/20 lg:col-span-2 flex flex-col justify-between min-h-[200px]">
                    <div className="flex items-center justify-between">
                        <div className="font-mono text-[10px] text-forest/50 uppercase tracking-widest border border-forest/15 rounded-full px-3 py-1">
                            Get in Touch
                        </div>
                        {activeHash !== '#contacts' && (
                            <a href="#contacts" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-forest group transition-colors">
                                <ArrowUpRight className="w-4 h-4 text-forest group-hover:text-white transition-colors" />
                            </a>
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="flex flex-col gap-2">
                            <a href="mailto:info@agronittrade.com" className="font-sans text-base font-medium text-forest hover:text-gold transition-colors">
                                info@agronittrade.com
                            </a>
                            <a href="https://wa.me/971542016446" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-forest/70 hover:text-gold transition-colors">
                                +971 54 201 6446
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 5: Status + copyright (full width bottom bar styled as card) */}
                <div className="bento-card bg-white border border-forest/8 lg:col-span-2 flex flex-col md:flex-row items-center justify-between gap-4 min-h-0">
                    <div className="font-mono text-[10px] text-forest/40 uppercase tracking-widest text-center md:text-left">
                        © 2026 AGRONIT TRADING FZCO — DMCC, Dubai, UAE. All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
