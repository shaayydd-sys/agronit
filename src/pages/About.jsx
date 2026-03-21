import { useEffect, useRef } from 'react';
import sabareeshImg from '../assets/sabareesh.jpeg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
    { num: "01", title: "Mission", desc: "To construct invincible supply lines for the commodities that build the modern world." },
    { num: "02", title: "Vision", desc: "Becoming the strategic nexus for Eurasian chemical exports into the Global South." },
    { num: "03", title: "Reliability", desc: "Executing contracts under the strictest timelines, insulated from market volatilities." },
    { num: "04", title: "Market Intelligence", desc: "Leveraging proprietary data across freight, FX, and local policy to outmaneuver disruption." },
    { num: "05", title: "Compliance & Safety", desc: "Zero tolerance. 100% adherence to KYC/AML norms and hazardous materials protocols." },
    { num: "06", title: "Partnership Approach", desc: "We act as principals, sharing the risk with our counterparties to guarantee performance." },
];

const milestones = [
    { year: "January 2026", title: "Incorporated", desc: "AGRONIT TRADING FZCO officially registered in the DMCC format.", license: "License No. DMCC-1007790" },
    { year: "Q1 2026", title: "First Contracts", desc: "Initiation of trial bulk shipments into the East African corridor." },
    { year: "2026 Target", title: "$120M+ Turnover", desc: "Projected benchmark for Year 1 scale across 5 core product lines." },
];

const About = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gridRef.current.querySelectorAll('.bento-element').forEach((el) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 40, scale: 0.98 },
                    {
                        opacity: 1, y: 0, scale: 1,
                        duration: 0.8, ease: 'power3.out',
                        scrollTrigger: { trigger: el, start: 'top 90%', once: true }
                    }
                );
            });
        }, gridRef);

        // 3D tilt + shine
        const cards = gridRef.current?.querySelectorAll('.bento-card') ?? [];
        const listeners = [];
        cards.forEach(card => {
            const onMove = (e) => {
                const r = card.getBoundingClientRect();
                const x = e.clientX - r.left;
                const y = e.clientY - r.top;
                card.style.setProperty('--mx', `${(x / r.width) * 100}%`);
                card.style.setProperty('--my', `${(y / r.height) * 100}%`);
                const tilt = Math.max(2, 8 * Math.min(1, 300 / Math.max(r.width, r.height)));
                gsap.to(card, {
                    rotateX: ((y - r.height / 2) / r.height) * -tilt,
                    rotateY: ((x - r.width / 2) / r.width) * tilt,
                    transformPerspective: 900, duration: 0.45, ease: 'power2.out', overwrite: 'auto',
                });
            };
            const onLeave = () => {
                gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.9, ease: 'elastic.out(1, 0.45)', overwrite: 'auto' });
            };
            card.addEventListener('mousemove', onMove);
            card.addEventListener('mouseleave', onLeave);
            listeners.push({ card, onMove, onLeave });
        });

        return () => {
            ctx.revert();
            listeners.forEach(({ card, onMove, onLeave }) => {
                card.removeEventListener('mousemove', onMove);
                card.removeEventListener('mouseleave', onLeave);
            });
        };
    }, []);

    return (
        <div ref={gridRef} className="w-full max-w-[1500px] mx-auto pt-4 flex flex-col gap-4 md:gap-6 lg:gap-8">

            {/* Row 1: Hero + Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

                {/* Hero Card */}
                <div className="bento-card dark-card bento-element !bg-forest text-white lg:col-span-2 flex flex-col justify-between min-h-[340px] border-none">
                    <div className="font-mono text-[10px] text-sage/60 uppercase tracking-widest border border-sage/20 rounded-full px-3 py-1 self-start">
                        About AGRONIT
                    </div>
                    <div>
                        <h1 className="font-garamond italic font-bold text-4xl sm:text-5xl md:text-6xl text-sage leading-tight mb-4">
                            Who We Are
                        </h1>
                        <p className="font-sans text-sm text-white/60 leading-relaxed max-w-sm">
                            Architecting the future of commodity trading through precision, capital strength, and deep market integration.
                        </p>
                    </div>
                </div>

                {/* Dubai image card */}
                <div className="bento-card bento-element lg:col-span-2 !p-0 overflow-hidden min-h-[340px] border-none">
                    <img
                        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
                        alt="Dubai Skyline"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Row 2: Story + Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

                {/* Story card */}
                <div className="bento-card bento-element bg-cream border border-sage/20 lg:col-span-2 flex flex-col justify-center gap-4 md:gap-6">
                    <div className="font-mono text-[10px] text-forest/50 uppercase tracking-widest border border-forest/15 rounded-full px-3 py-1 self-start">
                        Our Story
                    </div>
                    <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-forest leading-tight">
                        Forged in Dubai,<br />Scaled Globally.
                    </h2>
                    <div className="font-sans text-[15px] text-ink/70 leading-relaxed space-y-4">
                        <p>Founded in 2026 in the heart of the Dubai Multi Commodities Centre, AGRONIT TRADING FZCO was established to bridge the expanding gap between prime Eurasian chemical producers and the rapidly accelerating markets of Africa, the Middle East, and Asia.</p>
                        <p>We are not brokers. We act as principals in every transaction, deploying our own capital to secure allocations, manage freight risk, and guarantee delivery.</p>
                    </div>
                </div>

                {/* Stats card */}
                <div className="bento-card dark-card bento-element !bg-[#1A2517] text-white border-none flex flex-col justify-between">
                    <div className="font-mono text-[10px] text-sage/60 uppercase tracking-widest border border-sage/20 rounded-full px-3 py-1 self-start mb-8">
                        Year 1 Targets
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="font-mono text-5xl font-bold text-gold tracking-tighter mb-1">$120M+</div>
                            <div className="font-sans text-sm text-white/50">Projected Turnover</div>
                        </div>
                        <div className="w-full h-px bg-sage/15"></div>
                        <div>
                            <div className="font-mono text-5xl font-bold text-sage tracking-tighter mb-1">5</div>
                            <div className="font-sans text-sm text-white/50">Core Product Lines</div>
                        </div>
                        <div className="w-full h-px bg-sage/15"></div>
                        <div>
                            <div className="font-mono text-5xl font-bold text-white tracking-tighter mb-1">45+</div>
                            <div className="font-sans text-sm text-white/50">Active Markets</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 3: Values Grid */}
            <div className="bento-element flex flex-col gap-4 md:gap-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {values.map((val, i) => (
                        <div key={i} className="bento-card dark-card !bg-forest text-white group">
                            <div className="font-mono text-[10px] text-sage/40 mb-6">{val.num}</div>
                            <h3 className="font-sans font-bold text-lg text-sage mb-3 group-hover:text-gold transition-colors duration-300">{val.title}</h3>
                            <p className="font-sans text-[13px] text-white/55 leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 4: Milestones + CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

                {milestones.map((m, i) => (
                    <div key={i} className="bento-card bento-element bg-white border border-forest/8 flex flex-col">
                        <div className="font-mono text-[10px] text-gold uppercase tracking-widest border border-gold/30 rounded-full px-3 py-1 self-start bg-gold/5">
                            {m.year}
                        </div>
                        <div className="flex-1 flex flex-col justify-end pt-8">
                            <h3 className="font-sans font-bold text-xl text-forest mb-3">{m.title}</h3>
                            <p className="font-sans text-sm text-ink/60 leading-relaxed">{m.desc}</p>
                        </div>
                        <div className="font-mono text-[10px] text-forest/40 uppercase tracking-widest mt-4 min-h-[16px]">
                            {m.license || ''}
                        </div>
                    </div>
                ))}

                {/* CTA card */}
                <div className="bento-card bento-element !bg-[#E9C984] text-forest border-none flex flex-col justify-between">
                    <div className="font-mono text-[10px] text-forest/60 uppercase tracking-widest border border-forest/20 rounded-full px-3 py-1 self-start bg-white/30">
                        Ready?
                    </div>
                    <div>
                        <h3 className="font-garamond italic font-bold text-3xl text-forest mb-4 leading-tight">
                            Build with us.
                        </h3>
                        <a href="#contacts" className="w-12 h-12 rounded-full bg-forest flex items-center justify-center shadow-md hover:bg-forest/80 transition-colors">
                            <ArrowUpRight className="w-5 h-5 text-sage" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Row 5: Team */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div className="bento-card bento-element bg-cream border border-sage/20 lg:col-span-1 flex flex-col justify-center">
                    <div className="font-mono text-[10px] text-forest/50 uppercase tracking-widest mb-4">Leadership</div>
                    <h2 className="font-sans font-bold text-3xl text-forest">Executive<br />Board</h2>
                </div>
                <div className="bento-card bento-element bg-white border border-forest/8 flex flex-col gap-6">
                    <div className="h-[200px] bg-cream rounded-[20px] overflow-hidden relative">
                        <img src={sabareeshImg} alt="Sabareesh Madhavan" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                        <h3 className="font-sans font-bold text-lg text-forest mb-1">Sabareesh Madhavan</h3>
                        <div className="font-mono text-[11px] text-ink/40 uppercase tracking-widest mb-3">General Manager</div>
                        <a href="mailto:sabarish@agronittrade.com" className="font-mono text-[11px] text-forest/60 hover:text-gold transition-colors block">
                            sabarish@agronittrade.com
                        </a>
                        <a href="https://wa.me/971542016446" target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-forest/60 hover:text-gold transition-colors block mt-1">
                            +971 54 201 6446
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
