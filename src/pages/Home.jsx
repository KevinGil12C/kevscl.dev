import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
    const navigate = useNavigate();

    const handleContact = () => {
        navigate('/contact');
    };

    const handleProjects = () => {
        navigate('/projects');
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
                        <div className="lg:col-span-5 relative order-2 lg:order-1">
                            <div className="absolute -inset-4 border border-primary/20 rounded-lg"></div>
                            <div className="relative aspect-square overflow-hidden border-2 border-primary/40 bg-black rounded shadow-[0_0_40px_rgba(13,242,89,0.15)] group">
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                                <img 
                                    alt="Profile" 
                                    className="w-full h-full object-cover grayscale brightness-75 contrast-125" 
                                     src="/logo192.png"
                                />
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="scan-line-anim z-20"></div>
                                    <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/80 z-20 space-y-1">
                                        <p className="bg-black/50 px-2 py-0.5">TARGET: KEV_SCL</p>
                                        <p className="bg-black/50 px-2 py-0.5">ROLE: SOFTWARE_DEV</p>
                                        <p className="bg-black/50 px-2 py-0.5">LOC: MX_LATAM</p>
                                    </div>
                                    <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary/80 z-20 text-right">
                                        <p className="bg-black/50 px-2 py-0.5 uppercase tracking-tighter">Status: Online</p>
                                        <p className="bg-black/50 px-2 py-0.5 animate-pulse uppercase tracking-tighter">Auths_Granted</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 bg-surface border border-primary/30 p-4 font-mono text-[10px] rounded-sm relative overflow-hidden">
                                <div className="flex items-center gap-2 mb-3 border-b border-primary/20 pb-2">
                                    <div className="flex gap-1.5">
                                        <div className="size-2 bg-red-500/50 rounded-full"></div>
                                        <div className="size-2 bg-yellow-500/50 rounded-full"></div>
                                        <div className="size-2 bg-green-500/50 rounded-full"></div>
                                    </div>
                                    <span className="text-primary/50 ml-2">projects_feed.log</span>
                                </div>
                                <div className="h-24 overflow-y-auto terminal-scroll space-y-2 pr-2">
                                    <div className="flex gap-3 items-start border-l-2 border-primary/20 pl-3">
                                        <span className="text-primary/40">[01]</span>
                                        <div className="space-y-1">
                                            <p className="text-white">PROYECTO_E_COMMERCE_V2</p>
                                            <p className="text-[8px] text-primary/60 uppercase">React + Node + MongoDB // Success</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start border-l-2 border-primary/20 pl-3 opacity-60">
                                        <span className="text-primary/40">[02]</span>
                                        <div className="space-y-1">
                                            <p className="text-white">SISTEMA_GESTION_LOGISTICA</p>
                                            <p className="text-[8px] text-primary/60 uppercase">Python + Django // Audited</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                            <div className="space-y-4">
                                <div className="inline-block border border-primary/40 px-3 py-1 bg-primary/5 rounded-sm">
                                    <span className="text-primary font-mono text-[10px] tracking-[0.2em] uppercase">Kernel Initialized</span>
                                </div>
                                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-glow font-display">
                                    KEV<span className="text-primary">SCL</span>
                                </h2>
                                <h3 className="text-xl md:text-2xl font-accent text-primary/80 tracking-widest leading-relaxed uppercase">
                                    Software Developer
                                </h3>
                                <p className="text-primary/60 font-mono text-xs">&gt; Ingeniero en Computación / Fullstack Developer</p>
                            </div>
                            <div className="max-w-2xl">
                                <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                                    Soy un desarrollador Full Stack con experiencia en creación de aplicaciones web innovadoras. Me apasiona el desarrollo de software, la inteligencia artificial y crear soluciones que impacten positivamente.
                                </p>
                                <div className="bg-primary/5 border-l-4 border-primary p-6 font-mono text-sm relative overflow-hidden group">
                                    <div className="absolute top-2 right-2 text-primary/10 select-none">
                                        <span className="material-symbols-outlined text-4xl">security</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-primary">$</span>
                                            <span className="text-white">whoami --extensive</span>
                                        </div>
                                        <div className="text-white/70 space-y-2 text-xs">
                                            <p>&gt; Desarrollo y mantenimiento de sitios web utilizando HTML, CSS, JS, Twig, PHP, Laravel y Python.</p>
                                            <p>&gt; Implementación de APIs RESTful y desarrollo de chat en tiempo real con WebSockets.</p>
                                            <p>&gt; Automatización del chat para convertirlo en chatbot inteligente</p>
                                            <p>&gt; Optimización del rendimiento del sitio y mejora en tiempos de respuest</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button 
                                    onClick={handleContact}
                                    className="bg-primary text-black font-mono font-bold px-8 py-4 rounded-sm hover:brightness-110 transition-all flex items-center gap-3 shadow-[6px_6px_0px_#003b00] hover:translate-x-1 hover:translate-y-1 hover:shadow-none uppercase text-xs"
                                >
                                    <span className="material-symbols-outlined font-bold">terminal</span>
                                    Establecer_Conexión
                                </button>
                                <button 
                                    onClick={handleProjects}
                                    className="border border-primary/50 text-primary font-mono font-bold px-8 py-4 rounded-sm hover:bg-primary/10 transition-all flex items-center gap-3 uppercase text-xs"
                                >
                                    <span className="material-symbols-outlined font-bold">folder_open</span>
                                    Cargar_Proyectos
                                </button>
                            </div>
                        </div>
                    </section>
                    
                    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32 border-y border-primary/10 py-16">
                        {[
                            { val: '3,744+', lbl: 'Profile views' },
                            { val: '230+', lbl: 'Commits / Año' },
                            { val: '100%', lbl: 'Uptime Mental' },
                            { val: 'SQL', lbl: 'Fluent Language' }
                        ].map(stat => (
                            <div key={stat.lbl} className="text-center group border-r border-primary/10 last:border-0">
                                <p className="font-accent text-primary text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.val}</p>
                                <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest">{stat.lbl}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;