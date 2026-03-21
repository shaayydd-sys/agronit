import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import dubaiMapImg from '../assets/dubai-map.jpg';

gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
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
        const cards = gridRef.current?.querySelectorAll('.bento-card:not(.no-tilt)') ?? [];
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

    const inputClass = "bg-transparent border border-forest/20 rounded-xl p-3 font-sans text-sm text-forest placeholder:text-forest/30 focus:outline-none focus:border-forest/60 transition-colors w-full";

    return (
        <div ref={gridRef} className="w-full max-w-[1500px] mx-auto pt-4 flex flex-col gap-4 md:gap-6 lg:gap-8">

            {/* Row 1: Hero + Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

                {/* Hero card */}
                <div className="bento-card dark-card bento-element !bg-forest text-white md:col-span-2 xl:col-span-2 flex flex-col justify-between min-h-[280px] border-none">
                    <div className="font-mono text-[10px] text-sage/60 uppercase tracking-widest border border-sage/20 rounded-full px-3 py-1 self-start">
                        Get in Touch
                    </div>
                    <div>
                        <h1 className="font-garamond italic font-bold text-4xl sm:text-5xl md:text-6xl text-sage leading-tight mb-4">
                            Contact<br />the Desk
                        </h1>
                        <p className="font-sans text-sm text-white/55 leading-relaxed max-w-sm">
                            Reach out to our operational command centre for allocations, logistics, and pricing enquiries.
                        </p>
                    </div>
                </div>

                {/* Address card */}
                <div className="bento-card bento-element bg-cream border border-sage/20 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-full bg-forest/8 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-forest/60" />
                    </div>
                    <div>
                        <div className="font-mono text-[10px] text-forest/40 uppercase tracking-widest mb-3">Registered Office</div>
                        <div className="font-sans text-sm font-medium text-forest leading-relaxed">
                            AGRONIT TRADING FZCO<br />
                            Unit 2208, GBC2<br />
                            Jumeirah Lakes Towers (JLT), DMCC<br />
                            Dubai, UAE
                        </div>
                    </div>
                </div>

                {/* Hours + Contact card */}
                <div className="bento-card bento-element bg-white border border-forest/8 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-full bg-forest/8 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-forest/60" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <div className="font-mono text-[10px] text-forest/40 uppercase tracking-widest mb-2">Working Hours</div>
                            <div className="font-sans text-sm font-medium text-forest">Mon – Fri<br />09:00 – 18:00 GST</div>
                        </div>
                        <div className="w-full h-px bg-forest/8"></div>
                        <div className="flex flex-col gap-2">
                            <a href="https://wa.me/971542016446" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-forest/70 hover:text-gold transition-colors group/link">
                                <Phone className="w-3.5 h-3.5" />
                                +971 54 201 6446
                            </a>
                            <a href="mailto:info@agronittrade.com" className="flex items-center gap-2 font-sans text-sm text-forest/70 hover:text-gold transition-colors group/link">
                                <Mail className="w-3.5 h-3.5" />
                                info@agronittrade.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Form + Map */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

                {/* Form card */}
                <div className="bento-card no-tilt bento-element bg-white border border-forest/8 xl:col-span-2">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <div className="font-mono text-[10px] text-forest/40 uppercase tracking-widest mb-1">Enquiry Form</div>
                            <h2 className="font-sans font-bold text-2xl text-forest">Send a Request</h2>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center">
                            <ArrowUpRight className="w-4 h-4 text-forest/40" />
                        </div>
                    </div>

                    <form action="https://formspree.io/f/xzdjqbgo" method="POST" className="flex flex-col gap-5">
                        <input type="hidden" name="_subject" value="New enquiry from AGRONIT website" />
                        <input type="hidden" name="_next" value="https://agronittrade.com/thank-you" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="font-mono text-[10px] text-forest/50 uppercase tracking-widest">Full Name *</label>
                                <input required type="text" name="fullName" placeholder="John Smith" className={inputClass} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="font-mono text-[10px] text-forest/50 uppercase tracking-widest">Company</label>
                                <input type="text" name="company" placeholder="ACME Corp" className={inputClass} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="font-mono text-[10px] text-forest/50 uppercase tracking-widest">Email *</label>
                                <input required type="email" name="email" placeholder="john@company.com" className={inputClass} />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="font-mono text-[10px] text-forest/50 uppercase tracking-widest">Phone</label>
                                <input type="tel" name="phone" placeholder="+1 000 000 0000" className={inputClass} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="font-mono text-[10px] text-forest/50 uppercase tracking-widest">Product of Interest</label>
                            <select name="product" className={inputClass + " appearance-none cursor-pointer"}>
                                <option value="">Select a product...</option>
                                <option value="caprolactam">Caprolactam</option>
                                <option value="urea">Urea (Carbamide)</option>
                                <option value="ammonium_nitrate">Ammonium Nitrate</option>
                                <option value="cyclohexanone">Cyclohexanone & Cyclohexane</option>
                                <option value="ammonium_sulphate">Ammonium Sulphate</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="font-mono text-[10px] text-forest/50 uppercase tracking-widest">Message *</label>
                            <textarea required name="message" rows="4" placeholder="Describe your requirements, volumes, and destination markets..." className={inputClass + " resize-none"}></textarea>
                        </div>
                        <button type="submit" className="btn btn-filled !bg-forest !text-white !border-forest !rounded-[100px] w-full justify-center mt-2">
                            Submit Enquiry
                        </button>
                    </form>
                </div>

                {/* Map / location card */}
                <div className="bento-card bento-element bg-cream border border-sage/20 flex flex-col justify-between min-h-[300px] md:min-h-[400px] !p-0">
                    {/* OpenStreetMap iframe with forest-green filter */}
                    <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
                        <img
                            src={dubaiMapImg}
                            alt="Dubai Map"
                            className="w-full h-full object-cover"
                            style={{ filter: 'sepia(0.5) saturate(0.4) brightness(1.1) hue-rotate(10deg)' }}
                        />
                        <div className="absolute inset-0 rounded-[inherit]" style={{ background: 'rgba(245, 242, 235, 0.55)' }}></div>
                    </div>

                    <div className="relative z-10 p-8">
                        <div className="font-mono text-[10px] text-forest/70 uppercase tracking-widest border border-forest/25 rounded-full px-3 py-1 self-start inline-block">
                            Location
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center flex-grow gap-4 py-8">
                        <div className="relative flex items-center justify-center w-24 h-24">
                            <div className="absolute w-24 h-24 rounded-full border-2 border-forest/30 animate-ping"></div>
                            <div className="absolute w-16 h-16 rounded-full border-2 border-forest/50"></div>
                            <div className="w-5 h-5 rounded-full bg-forest flex items-center justify-center shadow-lg">
                                <div className="w-2 h-2 rounded-full bg-sage"></div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="font-mono text-xs text-forest uppercase tracking-widest mb-1">JLT, DMCC</div>
                            <div className="font-sans text-sm text-forest/50">Dubai, UAE</div>
                        </div>
                    </div>

                    <div className="relative z-10 p-8 pt-4 border-t border-sage/15">
                        <div className="font-mono text-[10px] text-forest/30 uppercase tracking-widest">25°04′N 55°08′E</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contacts;
