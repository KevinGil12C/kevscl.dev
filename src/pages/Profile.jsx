import React from 'react';
import Footer from '../components/Footer';

const Profile = () => {
    const experience = [
        {
            period: "Febrero 2025 - Presente",
            title: "Programador WB",
            company: "Vivir Viajando | Presencial",
            current: true,
            icon: "rocket_launch",
            points: [
                "Actualización y mantenimiento de la plataforma web.",
                "Implementación de nuevas funcionalidades según las necesidades del negocio.",
                'Implementación de reservas y pagos en línea.',
                'Implementación de API RESTful para integración con servicios externos.'
            ]
        },
        {
            period: "Junio 2024 - Enero 2025",
            title: "Freelance Fullstack Developer",
            company: "Varios Clientes | Remoto",
            icon: "settings_ethernet",
            points: [
                "Desarrollé y mantuve aplicaciones web personalizadas para diversos clientes.",
                "Creación de puntas de venta y landing pages efectivas.",
                'Mantenimiento y actualización de sitios web existentes.',
                'Diseño e implementación de gestores de contraseñas seguros.'
            ]
        }
    ];

    const education = [
        { 
            title: 'Ingeniería en Computación (Pasante)', 
            date: 'Agosto 2018 - Julio 2024', 
            institution: 'Universidad Autónoma del Estado de México',
            description: 'Concluí la Licenciatura de Ingeniería en Computación, donde adquirí conocimientos en Programación, Electrónica, Bases de datos, redes de computadoras.'
        },
        { 
            title: 'Oracle Next Education F2 T6 Front-end', 
            date: 'Febrero 2024 - Julio 2024', 
            institution: 'Alura Latam',
            description: 'Concluí satisfactoriamente el curso de Frontend. Adquirí conocimientos prácticos en desarrollo web, con un enfoque especial en tecnologías FrontEnd.'
        },
        { 
            title: 'Certificación de Análisis de Datos de Google', 
            date: 'Septiembre 2023 - Febrero 2024', 
            institution: 'Coursera / Google',
            description: 'Concluí satisfactoriamente el curso de certificados de carrera de Google. Adquirí conocimientos en análisis, limpieza y recolección de datos.'
        },
        { 
            title: 'Certificación de Ciberseguridad de Google', 
            date: 'Mayo 2024 - Abril 2025', 
            institution: 'Coursera / Google',
            description: 'Curso enfocado en fundamentos de ciberseguridad, protección de sistemas, redes y datos, y mitigación de riesgos de seguridad.'
        }
    ];

    const skills = [
        { icon: 'palette', title: 'Frontend', skills: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap', 'React'] },
        { icon: 'settings', title: 'Backend', skills: ['PHP', 'Python', 'Node.js', 'Java', 'C/C++'] },
        { icon: 'database', title: 'Bases de Datos', skills: ['MySQL', 'PostgreSQL'] },
        { icon: 'build', title: 'Herramientas', skills: ['Git', 'Github','Linux', 'Arduino'] }
    ];

    return (
        <div className="min-h-screen pt-24">
            <main className="flex justify-center w-full py-12 md:py-16">
                <div className="w-full max-w-[1200px] px-6 flex flex-col gap-20">
                    <section className="relative">
                        <div className="absolute -top-10 -left-10 text-primary/5 font-mono text-9xl select-none pointer-events-none hidden lg:block uppercase">PROFILE</div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface/30 p-8 md:p-12 rounded-2xl border border-primary/20 decrypted-bg relative overflow-hidden">
                            <div className="lg:col-span-7 space-y-6 relative z-10">
                                <div className="flex items-center gap-3">
                                    <span className="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/30 rounded-sm">Status: Decrypted</span>
                                    <span className="text-slate-500 font-mono text-[10px]">AUTH_LEVEL: ROOT</span>
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Sobre mí</h1>
                                    <h2 className="text-xl md:text-2xl text-primary font-mono opacity-90 tracking-tighter">&gt; Ingeniero en Computación</h2>
                                </div>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-slate-300 text-lg leading-relaxed font-light">
                                        <span className="text-primary font-bold">[_]</span> Egresado de la <span className="text-white font-medium">UAEMéx</span>, apasionado por la arquitectura de sistemas y el desarrollo de soluciones escalables. 
                                        Mi enfoque combina el rigor de la ingeniería con la agilidad del desarrollo fullstack moderno.
                                    </p>
                                </div>
                                <div className="pt-8 flex flex-wrap gap-4">
                                    {[
                                        { icon: 'picture_as_pdf', label: 'CV_PDF', action: () => window.open('/cv.pdf', '_blank') },
                                        { icon: 'code', label: 'GITHUB', action: () => window.open('https://github.com/KevinGil12C', '_blank') },
                                        { icon: 'link', label: 'LINKEDIN', action: () => window.open('https://www.linkedin.com/in/kevin-jesus-coyote-gil-030287288/', '_blank') }
                                    ].map(item => (
                                        <button 
                                            key={item.label}
                                            onClick={item.action}
                                            className="group flex flex-col items-center gap-2 p-3 bg-background-dark border border-primary/20 rounded-lg hover:border-primary transition-all"
                                        >
                                            <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">{item.icon}</span>
                                            <span className="text-[9px] font-mono text-slate-500 uppercase">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                                    <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                                    <div className="absolute inset-0 border-2 border-primary rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background-dark border border-primary/30">
                                        <img 
                                            alt="Profile" 
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
                                             src="/logo192.png"
                                        />
                                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none opacity-50"></div>
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-primary text-black px-4 py-2 font-mono text-xs font-bold rounded shadow-xl">
                                        ID: KEV_SYS_01
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-4 mb-12">
                            <span className="text-primary font-mono text-xl">01.</span>
                            <h2 className="text-2xl font-bold uppercase tracking-widest text-white">Habilidades Técnicas</h2>
                            <div className="h-[1px] flex-1 bg-primary/10"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.map(category => (
                                <div key={category.title} className="group border border-primary/20 hover:border-primary/40 transition-colors bg-surface/40 p-6 rounded-xl relative overflow-hidden">
                                    <span className="material-symbols-outlined text-primary text-3xl mb-4 block opacity-50">{category.icon}</span>
                                    <h3 className="text-lg font-bold text-white mb-3 font-mono">{category.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-primary/5 border border-primary/10 rounded text-[10px] font-mono text-primary/80">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="experience">
                        <div className="flex items-center gap-4 mb-12">
                            <span className="text-primary font-mono text-xl">02.</span>
                            <h2 className="text-2xl font-bold uppercase tracking-widest text-white">Deployment_Log</h2>
                            <div className="h-[1px] flex-1 bg-primary/10"></div>
                        </div>
                        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
                            {experience.map((exp, index) => (
                                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background-dark text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <span className="material-symbols-outlined text-sm">{exp.icon}</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface/40 p-6 rounded-xl border border-primary/20">
                                        <div className="flex items-center justify-between mb-2">
                                            <time className="font-mono text-[10px] font-bold text-primary uppercase">{exp.period}</time>
                                            {exp.current && (
                                                <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded text-[9px] font-bold">CURRENT</span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                                        <div className="text-slate-400 text-sm mb-4">{exp.company}</div>
                                        <ul className="text-sm text-slate-400 space-y-2 font-light">
                                            {exp.points.map((point, idx) => (
                                                <li key={idx} className="flex gap-2">
                                                    <span className="text-primary font-bold">»</span> {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="education">
                        <div className="flex items-center gap-4 mb-12">
                            <span className="text-primary font-mono text-xl">03.</span>
                            <h2 className="text-2xl font-bold uppercase tracking-widest text-white">Education & Certs</h2>
                            <div className="h-[1px] flex-1 bg-primary/10"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {education.map((edu, idx) => (
                                <div key={idx} className="bg-surface/40 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
                                    <div className="flex items-center justify-between mb-4">
                                        <time className="font-mono text-[9px] font-bold text-primary/70 uppercase border border-primary/20 px-2 py-0.5 rounded">{edu.date}</time>
                                        <span className="material-symbols-outlined text-primary/30 text-sm">verified</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">{edu.title}</h3>
                                    <div className="text-primary text-[11px] font-mono mb-3 uppercase tracking-wider">{edu.institution}</div>
                                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Profile;
