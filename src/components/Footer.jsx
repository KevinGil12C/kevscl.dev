import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: 'alternate_email', link: 'mailto:kebo.jcg77@gmail.com' },
        { icon: 'terminal', link: 'https://github.com/KevinGil12C', target: '_blank' },
        { icon: 'share', link: 'https://www.linkedin.com/in/kevin-jesus-coyote-gil-030287288/', target: '_blank' }
    ];

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-primary/20 bg-terminal-bg/80 backdrop-blur-sm pt-16 pb-8 px-6 mt-20 relative overflow-hidden" onClick={handleScrollToTop}>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="absolute -bottom-20 -right-20 size-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                {/* Brand Section */}
                <div className="md:col-span-4 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="size-10 border border-primary flex items-center justify-center rounded-sm">
                            <span className="material-symbols-outlined text-primary text-2xl font-bold">terminal</span>
                        </div>
                        <h2 className="text-primary font-accent text-xs tracking-tighter">KEVSCL_SYS</h2>
                    </div>
                    <p className="text-primary/60 font-mono text-xs leading-relaxed max-w-sm">
                        &gt; Desarrollador Full Stack especializado en crear soluciones digitales robustas y escalables. Apasionado por la tecnología y la innovación.

                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((social, i) => (
                            <a 
                                key={i} 
                                href={social.link} 
                                target={social.target || '_self'}
                                rel={social.target ? 'noopener noreferrer' : ''}
                                className="size-10 flex items-center justify-center border border-primary/20 rounded-sm text-primary/60 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                            >
                                <span className="material-symbols-outlined text-xl">{social.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-2 space-y-4">
                    <h3 className="text-white font-mono text-[10px] font-bold uppercase tracking-widest border-b border-primary/40 pb-2">Navigation</h3>
                    <ul className="space-y-2 font-mono text-[11px]">
                        <li><Link to="/" className="text-primary hover:text-white transition-colors flex items-center gap-2">/root</Link></li>
                        <li><Link to="/profile" className="text-primary hover:text-white transition-colors flex items-center gap-2">/profile</Link></li>
                        <li><Link to="/services" className="text-primary hover:text-white transition-colors flex items-center gap-2">/services</Link></li>
                        <li><Link to="/projects" className="text-primary hover:text-white transition-colors flex items-center gap-2">/portfolio</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="md:col-span-3 space-y-4">
                    <h3 className="text-white font-mono text-[10px] font-bold uppercase tracking-widest border-b border-primary/40 pb-2">Localización y Horario</h3>
                    <div className="space-y-3 font-mono text-[11px] text-primary">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-sm text-primary/70">location_on</span>
                            <span>Estado de México, MX</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-sm text-primary/70">schedule</span>
                            <span>Lunes - Viernes: 09:00 - 18:00</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-sm text-primary/70">cloud_done</span>
                            <span className="text-white font-bold">Acceso Remoto: Disponible</span>
                        </div>
                    </div>
                </div>

                {/* System Monitor */}
                <div className="md:col-span-3">
                    <div className="bg-primary/5 border border-primary/40 rounded-sm p-4 space-y-4 font-mono shadow-[0_0_15px_rgba(13,242,89,0.05)]">
                        <h3 className="text-[9px] font-bold text-white uppercase bg-primary/20 px-2 py-0.5 inline-block">Estado del Sistema</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[9px] text-primary font-bold">
                                <span>USO_CPU</span>
                                <span>02.4%</span>
                            </div>
                            <div className="h-1 bg-black rounded-full overflow-hidden border border-primary/20">
                                <div className="h-full bg-primary w-[24%] shadow-[0_0_8px_rgba(13,242,89,0.8)]"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[9px] text-primary font-bold">
                                <span>CARGA_MEM</span>
                                <span>482MB / 1.2GB</span>
                            </div>
                            <div className="h-1 bg-black rounded-full overflow-hidden border border-primary/20">
                                <div className="h-full bg-primary w-[42%] shadow-[0_0_8px_rgba(13,242,89,0.8)]"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 pt-2">
                            <span className="size-1.5 bg-primary rounded-full animate-ping"></span>
                            <span className="text-[9px] text-primary font-bold uppercase tracking-tighter">Conexión: Estable (AES-256)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-primary/30">
                <div className="flex items-center gap-6 font-mono text-[10px] text-primary font-medium uppercase tracking-widest">
                    <div>&copy; {currentYear} KEV_SCL // FULLSTACK_ENGINEER</div>
                    <div className="hidden sm:block text-primary/60">Built_with: React_&_Tailwind</div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-mono text-primary font-bold">
                    <span className="bg-primary/10 px-3 py-1 border border-primary/40 text-white">IP: 187.190.**.**</span>
                    <span className="bg-primary/10 px-3 py-1 border border-primary/40 text-white">LATENCY: 24ms</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;