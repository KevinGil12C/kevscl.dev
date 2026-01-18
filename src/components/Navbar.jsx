import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { path: "/", label: "01. INICIO" },
        { path: "/profile", label: "02. SOBRE MÍ" },
        { path: "/services", label: "03. SERVICIOS" },
        { path: "/projects", label: "04. PORTAFOLIO" },
        { path: "/contact", label: "05. CONTACTO" }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const downloadCV = () => {
        // Lógica para descargar CV
        //Muestra un sweetalert2 como placeholder
        Swal.fire({
            title: 'Descargando CV...',
            text: 'La descarga de tu CV comenzará en breve.',
            icon: 'info',
            timer: 2000,
            showConfirmButton: false
        });
        //Descargar archivo (placeholder)
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = '/cv.pdf'; // Reemplaza con la ruta real del CV
            link.download = 'Kevscl_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 2000);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLinkClick = (path) => {
        closeMenu();
        handleScrollToTop();
        navigate(path);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-[60] bg-terminal-bg/90 backdrop-blur-md border-b border-primary/20">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => { navigate('/'); closeMenu(); }}>
                    <div className="size-10 border border-primary flex items-center justify-center rounded-sm">
                        <span className="material-symbols-outlined text-primary text-2xl font-bold">terminal</span>
                    </div>
                    <div>
                        <h1 className="text-primary font-accent text-[10px] tracking-tighter leading-none">KEVSCL</h1>
                        <p className="text-[8px] text-primary/50 font-mono mt-1 uppercase">Ing. Computación</p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-mono text-[10px]">
                    {links.map((link) => (
                        <Link 
                            key={link.path}
                            to={link.path} 
                            onClick={() => handleLinkClick(link.path)}
                            className={`${location.pathname === link.path ? 'text-primary' : 'text-primary/70'} hover:text-white transition-colors flex items-center gap-1 group`}
                        >
                            <span className="text-primary/40 group-hover:text-primary transition-colors">{link.label.split('.')[0]}.</span> 
                            {link.label.split('. ')[1]}
                        </Link>
                    ))}
                </div>

                {/* CV Button (Desktop Only) */}
                <button 
                    onClick={downloadCV}
                    className="hidden md:flex bg-primary text-black font-mono font-bold px-4 py-2 rounded-sm hover:bg-white transition-all items-center gap-2 text-[10px] shadow-[3px_3px_0px_#003b00]"
                >
                    <span className="material-symbols-outlined text-sm font-bold">download</span>
                    CV_LOAD
                </button>

                {/* Mobile Toggle */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden flex items-center justify-center p-2 text-primary border border-primary/30 rounded-sm active:bg-primary/20"
                >
                    <span className="material-symbols-outlined text-2xl">
                        {isOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Fullscreen Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 h-screen w-screen bg-terminal-bg z-[200] transition-all duration-500 ease-in-out md:hidden flex flex-col overflow-hidden ${
                    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}
            >
                {/* Mobile Header Inside Menu */}
                <div className="flex items-center justify-between px-6 h-20 border-b border-primary/20 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="size-8 border border-primary flex items-center justify-center rounded-sm">
                            <span className="material-symbols-outlined text-primary text-xl font-bold">terminal</span>
                        </div>
                        <h1 className="text-primary font-accent text-[8px] tracking-tighter leading-none">MENU_ROOT</h1>
                    </div>
                    <button 
                        onClick={toggleMenu}
                        className="flex items-center justify-center p-2 text-primary border border-primary/30 rounded-sm"
                    >
                        <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                </div>

                <div className="flex-1 flex flex-col justify-center p-6 gap-8 font-mono overflow-y-auto bg-terminal-bg relative">
                    {/* Decorative background element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/5 text-[40vw] font-bold select-none pointer-events-none opacity-20">SYS</div>
                    
                    <div className="flex flex-col gap-6 relative z-10">
                        {links.map((link, index) => (
                            <Link 
                                key={link.path}
                                to={link.path} 
                                onClick={() => { handleLinkClick(link.path); closeMenu(); }}
                                className={`flex flex-col border-l-4 py-3 pl-6 transition-all transform ${
                                    location.pathname === link.path ? 'border-primary bg-primary/5' : 'border-primary/10'
                                } ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <span className="text-[10px] text-primary/40 mb-1">MODULE_{link.label.split('.')[0]}</span>
                                <span className={`text-4xl font-bold tracking-tighter uppercase ${location.pathname === link.path ? 'text-primary text-glow' : 'text-white/80'}`}>
                                    {link.label.split('. ')[1]}
                                </span>
                            </Link>
                        ))}
                    </div>
                    
                    <div className={`pt-8 border-t border-primary/10 space-y-6 relative z-10 transition-all duration-700 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex gap-4">
                            <a href="mailto:contact@kevscl.com" className="flex-1 flex items-center justify-center p-4 border border-primary/10 rounded-sm text-primary/60 active:bg-primary/10">
                                <span className="material-symbols-outlined">alternate_email</span>
                            </a>
                            <a href="https://github.com/kevscl" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center p-4 border border-primary/10 rounded-sm text-primary/60 active:bg-primary/10">
                                <span className="material-symbols-outlined">terminal</span>
                            </a>
                            <a href="https://linkedin.com/in/kevscl" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center p-4 border border-primary/10 rounded-sm text-primary/60 active:bg-primary/10">
                                <span className="material-symbols-outlined">share</span>
                            </a>
                        </div>

                        <button 
                            onClick={downloadCV}
                            className="w-full bg-primary text-black font-mono font-bold px-4 py-5 rounded-sm flex items-center justify-center gap-2 text-sm uppercase shadow-[4px_4px_0px_#003b00] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                        >
                            <span className="material-symbols-outlined font-bold">download</span>
                            Download_CV.sys
                        </button>
                        
                        <p className="text-center text-[10px] text-primary/30 uppercase tracking-[0.4em] pt-4 pb-8">SYSTEM_HALT_RECOVERY // 2024</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;