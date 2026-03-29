import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Globe2, Package, Truck, TrendingDown, ShieldCheck, Headphones } from 'lucide-react';
import heroBg from '../assets/hero-port.jpg';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
    {
        Icon: Globe2,
        title: "Dubai Strategic Hub",
        desc: "Based in DMCC Free Zone — the world's leading commodity trading hub — providing seamless access to global shipping routes connecting Asia, Africa, Latin America and Europe.",
        color: "bg-cream border border-sage/20",
        iconBg: "bg-forest/8",
        iconColor: "text-forest",
    },
    {
        Icon: Package,
        title: "Large Volume Supply",
        desc: "We handle over 500,000 metric tonnes per year across our product portfolio, ensuring reliable, large-scale deliveries to meet industrial and agricultural demand.",
        color: "bg-white border border-forest/8",
        iconBg: "bg-sage/20",
        iconColor: "text-forest",
    },
    {
        Icon: Truck,
        title: "Flexible Logistics",
        desc: "From bulk carriers and chemical tankers to ISO-tanks and bagged cargo — we tailor logistics solutions to match every customer's infrastructure and requirements.",
        color: "bg-white border border-forest/8",
        iconBg: "bg-forest/8",
        iconColor: "text-forest",
    },
    {
        Icon: TrendingDown,
        title: "Competitive Pricing",
        desc: "Direct relationships with major producers allow us to offer market-competitive CFR/FOB pricing with transparent contract terms across all commodities.",
        color: "bg-cream border border-sage/20",
        iconBg: "bg-gold/20",
        iconColor: "text-forest",
    },
    {
        Icon: ShieldCheck,
        title: "Regulatory Compliance",
        desc: "Full compliance with IMDG, ADR and national transport regulations for all classified cargo. Documentation and certification handled end-to-end.",
        color: "bg-white border border-forest/8",
        iconBg: "bg-sage/20",
        iconColor: "text-forest",
    },
    {
        Icon: Headphones,
        title: "Dedicated Trading Desk",
        desc: "Our team provides personal account management, real-time market intelligence and responsive communication for every enquiry and shipment.",
        color: "bg-white border border-forest/8",
        iconBg: "bg-forest/8",
        iconColor: "text-forest",
        dark: false,
    },
];

const Home = () => {
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

            // Animated number counters
            gridRef.current.querySelectorAll('.stat-num').forEach(el => {
                const target = parseInt(el.dataset.target, 10);
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: target,
                    duration: 1.8,
                    ease: 'power2.out',
                    onUpdate() { el.textContent = Math.round(obj.val) + '+'; },
                    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
                });
            });
        }, gridRef);

        // 3D tilt + shine (mouse tracking)
        const cards = gridRef.current?.querySelectorAll('.bento-card') ?? [];
        const listeners = [];

        cards.forEach(card => {
            const onMove = (e) => {
                const r = card.getBoundingClientRect();
                const x = e.clientX - r.left;
                const y = e.clientY - r.top;
                card.style.setProperty('--mx', `${(x / r.width) * 100}%`);
                card.style.setProperty('--my', `${(y / r.height) * 100}%`);
                const tilt = Math.max(2, 10 * Math.min(1, 300 / Math.max(r.width, r.height)));
                gsap.to(card, {
                    rotateX: ((y - r.height / 2) / r.height) * -tilt,
                    rotateY: ((x - r.width / 2) / r.width) * tilt,
                    transformPerspective: 900,
                    duration: 0.45,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            };
            const onLeave = () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.9,
                    ease: 'elastic.out(1, 0.45)',
                    overwrite: 'auto',
                });
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
        <div ref={gridRef} className="w-full max-w-[1500px] mx-auto flex flex-col gap-4 md:gap-6 lg:gap-8 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:auto-rows-[250px] xl:auto-rows-[300px] gap-4 md:gap-6 lg:gap-8">

            {/* Bento 1: Main Hero (Large) span-2 column, span-2 row */}
            <a href="#products" className="bento-card dark-card bento-element md:col-span-2 xl:col-span-2 md:row-span-2 !bg-forest text-white flex flex-col justify-between relative group cursor-pointer border-none min-h-[340px] md:min-h-0">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Cargo Containers Port"
                        className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent"></div>
                </div>
                <div className="relative z-10 font-mono text-[10px] text-white/70 uppercase tracking-widest border border-white/30 rounded-full px-3 py-1 self-start inline-block">DMCC Free Zone — Dubai</div>
                <div className="relative z-10">
                    <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-1">Global Supply</h1>
                    <h1 className="font-garamond italic font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[72px] text-sage leading-[1.05] mb-1">of Industrial &</h1>
                    <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">Specialty Chemicals</h1>

                    <a href="#products" className="inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                        <span className="font-mono text-xs uppercase tracking-widest text-white border-b border-transparent group-hover:border-sage group-hover:text-sage transition-colors pb-1">Explore Offerings</span>
                        <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform">
                            <ArrowUpRight className="w-3 h-3 text-forest" />
                        </div>
                    </a>
                </div>
            </a>

            {/* Bento 2: Focus Text (Square) */}
            <div className="bento-card bento-element md:col-span-1 xl:col-span-1 md:row-span-1 bg-cream flex flex-col justify-center items-center text-center group border border-sage/20 relative min-h-[280px] md:min-h-0">
                <div className="font-garamond italic text-3xl lg:text-4xl text-forest leading-tight">
                    "We don't move volume. We build supply chains that last."
                </div>
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-6 h-6 text-sage" />
                </div>
            </div>

            {/* Bento 3: Products Visual (Tall) */}
            <div className="bento-card bento-element md:col-span-1 xl:col-span-1 md:row-span-2 bg-[#E9C984] text-forest flex flex-col justify-between overflow-hidden relative group cursor-pointer border-none min-h-[280px] md:min-h-0" onClick={() => window.location.hash = '#products'}>
                <div className="absolute inset-0 z-0">
                    <div className="w-[150%] h-[150%] absolute -top-1/4 -right-1/4 bg-white/20 rounded-full blur-3xl group-hover:bg-white/40 transition-colors duration-700"></div>
                </div>

                <div className="relative z-10 w-full flex items-start justify-between gap-3">
                    <div className="font-mono text-[10px] text-forest/70 uppercase tracking-widest border border-forest/20 rounded-full px-3 py-1 bg-white/30 backdrop-blur-sm">Our Capabilities Deck</div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-45 group-hover:bg-forest shadow-sm shrink-0">
                        <ArrowUpRight className="w-6 h-6 text-forest group-hover:text-white transition-colors duration-500" />
                    </div>
                </div>
                <div className="relative z-10 w-full">
                    <h3 className="font-sans font-bold text-3xl md:text-4xl leading-tight mb-4 text-forest">Discover Outbound Trading</h3>
                    <p className="font-sans text-sm md:text-base opacity-90 leading-relaxed font-medium">Extensive catalogue covering bulk fertilizers to complex petrochemical derivatives.</p>
                </div>
            </div>

            {/* Bento 4: Reach (Wide/Square) */}
            <div className="bento-card bento-element md:col-span-2 xl:col-span-1 md:row-span-1 bg-white flex flex-col justify-between group border border-black/5 hover:border-sage/30">
                <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[10px] text-forest/50 uppercase tracking-widest border border-forest/15 rounded-full px-3 py-1">Global Sourcing</span>
                    <Globe2 className="w-6 h-6 text-sage" />
                </div>

                <div>
                    <div className="flex flex-col mb-1">
                        <span className="font-mono text-4xl text-forest font-bold tracking-tighter stat-num" data-target="12">0+</span>
                        <span className="font-sans text-sm font-medium text-forest/70">Direct Producers</span>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-sage/30 to-transparent my-3"></div>
                    <div className="flex flex-col">
                        <span className="font-mono text-4xl text-forest font-bold tracking-tighter stat-num" data-target="45">0+</span>
                        <span className="font-sans text-sm font-medium text-forest/70">Active Markets</span>
                    </div>
                </div>
            </div>

            {/* Bento 5: Full-Scale Features */}
            <div className="bento-card dark-card bento-element md:col-span-2 xl:col-span-2 md:row-span-1 !bg-[#1A2517] text-white flex flex-col justify-end border-none min-h-[280px] md:min-h-0">
                <h3 className="font-sans font-bold text-3xl md:text-4xl mb-2 text-white">Full-Scale Features</h3>
                <p className="font-sans text-sm md:text-base text-white/70 max-w-xs">From multimodal transport structuring to flexible credit solutions.</p>
            </div>

            {/* Bento 6: CTA (Wide) */}
            <div className="bento-card bento-element md:col-span-2 xl:col-span-2 md:row-span-1 bg-cream flex flex-col md:flex-row justify-between items-center text-center md:text-left border border-sage/20 overflow-hidden relative">
                <div className="absolute right-0 bottom-0 pointer-events-none w-64 h-64 bg-gold/10 rounded-full blur-[80px]"></div>

                <h3 className="font-garamond italic font-bold text-3xl sm:text-4xl md:text-5xl text-forest mb-6 md:mb-0 relative z-10">
                    Ready to build<br />your supply chain?
                </h3>

                <div className="relative z-10">
                    <a href="#contacts" className="btn text-forest border-forest hover:bg-forest hover:text-white rounded-[100px] px-6 py-2 transition-colors">
                        Contact the Desk
                    </a>
                </div>
            </div>

        </div>{/* end inner bento grid */}

        {/* ── Advantages Section ── */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">

            {/* Section header */}
            <div className="bento-card dark-card bento-element !bg-forest text-white border-none flex flex-col justify-between min-h-[280px] md:min-h-0">
                <div className="font-mono text-[10px] text-sage/80 uppercase tracking-widest border border-sage/30 rounded-full px-3 py-1 self-start inline-block">Why Choose Us</div>
                <div className="mt-8">
                    <h2 className="font-sans font-bold text-4xl md:text-5xl text-white leading-tight mb-3">Our Advantages</h2>
                    <p className="font-sans text-sm text-white/50 max-w-xs leading-relaxed">
                        Six pillars that set AGRONIT apart in the global commodity trade arena.
                    </p>
                </div>
            </div>

            {/* 3×2 advantage cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {advantages.map(({ Icon, title, desc, color, iconBg, iconColor, stat, statLabel, dark }, i) => (
                    <div key={i} className={`advantage-card bento-card bento-element flex flex-col justify-between gap-6 ${color}`}>
                        <div className="flex items-start justify-between">
                            <div className={`icon-float w-11 h-11 rounded-2xl ${iconBg} flex items-center justify-center`}>
                                <Icon className={`w-5 h-5 ${iconColor}`} />
                            </div>
                            {stat && (
                                <div className="text-right">
                                    <div className="font-mono text-2xl font-bold text-forest leading-none">{stat}</div>
                                    <div className="font-mono text-[9px] text-forest/40 uppercase tracking-widest">{statLabel}</div>
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className={`font-sans font-bold text-lg mb-2 ${dark ? 'text-white' : 'text-forest'}`}>{title}</h3>
                            <p className={`font-sans text-sm leading-relaxed ${dark ? 'text-white/55' : 'text-ink/60'}`}>{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>{/* end advantages */}

        </div>
    );
};

export default Home;
