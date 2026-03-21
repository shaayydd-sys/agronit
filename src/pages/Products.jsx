import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import caprolactamImg from '../assets/caprolactam.jpg';
import ureaImg from '../assets/urea.jpg';
import ammoniumNitrateImg from '../assets/ammonium-nitrate.jpg';
import cyclohexanoneImg from '../assets/cyclohexanone.jpg';
import ammoniumSulphateImg from '../assets/ammonium sulphate.jpeg';

gsap.registerPlugin(ScrollTrigger);

const productData = [
    {
        title: "Caprolactam",
        cas: "105-60-2",
        desc: "An essential cyclic amide utilised as an intermediate for Nylon 6 fibres, plastics, and resins.",
        applications: "Nylon 6, Engineered Plastics",
        markets: "Asia-Pacific, Europe",
        volume: "100K+ MT/Year",
        packing: "25KG BAGS / JUMBO",
        image: caprolactamImg,
        accent: "bg-[#1A2517]",
        accentText: "text-white",
    },
    {
        title: "Urea (Carbamide)",
        cas: "57-13-6",
        desc: "A highly concentrated nitrogenous fertiliser essential for robust agricultural yields. Available prilled and granular.",
        applications: "Agriculture, DEF, Industrial",
        markets: "Africa, South America",
        volume: "250K+ MT/Year",
        packing: "BULK / 50KG BAGS",
        image: ureaImg,
        accent: "bg-[#E9C984]",
        accentText: "text-forest",
    },
    {
        title: "Ammonium Nitrate",
        cas: "6484-52-2",
        desc: "Dual-purpose raw material — high-nitrogen fertiliser and energetic component for civil mining operations.",
        applications: "Mining, Specialty Fertilisers",
        markets: "Middle East, Africa",
        volume: "80K+ MT/Year",
        packing: "1000KG FIBC",
        image: ammoniumNitrateImg,
        accent: "bg-[#ACC8A2]",
        accentText: "text-forest",
    },
    {
        title: "Cyclohexanone & Cyclohexane",
        cas: "108-94-1 / 110-82-7",
        desc: "Crucial organic solvents and precursors in the nylon and adipic acid synthesis chain. Transported in specialised ISO tanks.",
        applications: "Adipic Acid, Solvents, Resins",
        markets: "Europe, South Asia",
        volume: "50K+ MT/Year",
        packing: "ISO TANKS / BULK",
        image: cyclohexanoneImg,
        accent: "bg-cream",
        accentText: "text-forest",
    },
    {
        title: "Ammonium Sulphate",
        cas: "7783-20-2",
        desc: "Nitrogen and sulphur-rich inorganic salt, excellent soil acidifying fertiliser boosting yields for sulphur-deficient regions.",
        applications: "Agriculture, Food Additives",
        markets: "Global",
        volume: "120K+ MT/Year",
        packing: "BULK / 50KG BAGS",
        image: ammoniumSulphateImg,
        accent: "bg-[#1A2517]",
        accentText: "text-white",
    },
];

const Products = () => {
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

        // 3D tilt + shine on product cards
        const cards = gridRef.current?.querySelectorAll('.tilt-card') ?? [];
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
                    y: -10,
                    transformPerspective: 900,
                    boxShadow: '0 24px 60px rgba(26, 37, 23, 0.18)',
                    duration: 0.45,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            };
            const onLeave = () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    y: 0,
                    boxShadow: '0 4px 12px rgba(26, 37, 23, 0.06)',
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
        <div ref={gridRef} className="w-full max-w-[1500px] mx-auto pt-4">

            {/* Page Hero Bento */}
            <div className="bento-card dark-card bento-element !bg-forest text-white mb-6 md:mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 relative overflow-hidden min-h-[200px] border-none">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1549463991-bebd0a08fc23?q=80&w=2832&auto=format&fit=crop"
                        alt="Dubai Port"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-transparent"></div>
                </div>
                <div className="relative z-10">
                    <div className="font-mono text-[10px] text-sage/70 uppercase tracking-widest border border-sage/30 rounded-full px-3 py-1 self-start inline-block mb-4">Product Catalogue</div>
                    <h1 className="font-sans font-bold text-4xl md:text-5xl text-white leading-tight">
                        Industrial &<br />Specialty Chemicals
                    </h1>
                </div>
                <p className="relative z-10 font-sans text-sm md:text-base text-white/70 max-w-sm leading-relaxed">
                    Our trade matrix covers high-grade raw materials essential for global agriculture and large-scale industrial manufacturing.
                </p>
            </div>

            {/* Product Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {productData.map((product, index) => (
                    <div
                        key={index}
                        className={`tilt-card bento-element group relative overflow-hidden rounded-[32px] md:rounded-[40px] cursor-pointer flex flex-col ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                            }`}
                    >
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden rounded-t-[32px] md:rounded-t-[40px]">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            {/* CAS badge */}
                            <div className="absolute top-4 left-4 font-mono text-[10px] text-white/80 uppercase tracking-widest bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
                                CAS {product.cas}
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="bg-white flex flex-col flex-grow p-6 md:p-8 rounded-b-[32px] md:rounded-b-[40px]">
                            <h2 className="font-sans font-bold text-xl text-forest mb-2">{product.title}</h2>
                            <p className="font-sans text-sm text-ink/70 leading-relaxed mb-6 flex-grow">{product.desc}</p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <div className="font-mono text-[9px] text-ink/40 uppercase tracking-widest mb-1">Volume</div>
                                    <div className="font-sans text-sm font-bold text-forest">{product.volume}</div>
                                </div>
                                <div>
                                    <div className="font-mono text-[9px] text-ink/40 uppercase tracking-widest mb-1">Markets</div>
                                    <div className="font-sans text-sm font-bold text-forest">{product.markets}</div>
                                </div>
                                <div>
                                    <div className="font-mono text-[9px] text-ink/40 uppercase tracking-widest mb-1">Applications</div>
                                    <div className="font-sans text-sm text-forest">{product.applications}</div>
                                </div>
                                <div>
                                    <div className="font-mono text-[9px] text-ink/40 uppercase tracking-widest mb-1">Packing</div>
                                    <div className="font-sans text-sm text-forest">{product.packing}</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-forest/10">
                                <span className="flex items-center gap-2 font-mono text-[10px] text-ink/50 uppercase tracking-widest">
                                    <span className="w-2 h-2 bg-sage rounded-full inline-block animate-pulse"></span>
                                    Available
                                </span>
                                <a href="#contacts" className="font-sans text-sm font-medium text-forest hover:text-gold transition-colors flex items-center gap-1 group/link">
                                    Request Quote
                                    <ArrowUpRight className="w-3.5 h-3.5 -rotate-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
