import React, { useState } from 'react';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(3);
    const [filter, setFilter] = useState('ALL_STACKS');

    const allProjects = [
        {
            id: "REPO_01",
            title: "ILOVEPDF_CLONE.sh",
            desc: "Implementación de un clon básico de ILOVEPDF utilizando PHP para el backend, HTML/CSS/JS para el frontend.",
            tags: ["PHP", "HTML", "CSS", "JS"],
            img: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&q=80&w=800",
            preview: "https://compresor-kevscl.infinityfreeapp.com/compresor/",
            repo: "https://github.com/KevinGil12C/compresor",
            isPrivate: true
        },
        {
            id: "REPO_02",
            title: "GestorContraseñas.java",
            desc: "Aplicación de escritorio en Java para gestionar contraseñas de manera segura con cifrado asimétrico y certificado X.509.",
            tags: ["JAVA", "SQLITE"],
            img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            preview: "https://github.com/KevinGil12C/GestorClaves/blob/main/README.md",
            repo: "https://github.com/KevinGil12C/GestorClaves",
            isPrivate: false
        },
        {
            id: "REPO_03",
            title: "TaskManager.py",
            desc: "Administrador de tareas avanzado para Windows con funcionalidades como gestión de procesos, servicios, inicio y más.",
            tags: ["PYTHON", "HTML", "CSS", "JS", "BOOTSTRAP"],
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
            preview: "https://github.com/KevinGil12C/task-manager/releases/tag/v1.0",
            repo: "https://github.com/KevinGil12C/task-manager",
            isPrivate: false
        },
        {
            id: "REPO_04",
            title: "SystemCleaner.exe",
            desc: "Herramienta de limpieza y optimización del sistema para Windows, eliminando archivos temporales y entradas de registro innecesarias.",
            tags: ["PYTHON", "HTML", "CSS", "JS", "BOOTSTRAP"],
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            preview: "https://github.com/KevinGil12C/SystemCleaner/blob/main/README.md",
            repo: "https://github.com/KevinGil12C/SystemCleaner",
            isPrivate: false
        },
        {
            id: "REPO_05",
            title: "SecureShield.bat",
            desc: "Script automatizado en Batch para limpiar y proteger equipos de segunda mano contra software espía, malware, acceso remoto no autorizado y puertas traseras.",
            tags: ["BATCH"],
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            repo: "https://github.com/KevinGil12C/securelock",
            isPrivate: false
        },
        {
            id: "REPO_06",
            title: "QuickDiagTools.web",
            desc: "Aplicación web local que proporciona una interfaz gráfica moderna para acceder a las herramientas de diagnóstico nativas de Windows desde el navegador.",
            tags: ["PYTHON", "HTML", "CSS", "JS", "BOOTSTRAP"],
            img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            repo: "https://github.com/KevinGil12C/herramientas_diagnostico",
            isPrivate: false
        },
        {
            id: "REPO_07",
            title: "WinDiagTools.bat",
            desc: "Script Batch todo-en-uno para diagnóstico y solución de problemas en Windows. Incluye 14 herramientas esenciales con menú interactivo.",
            tags: ["BATCH"],
            img: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&q=80&w=800",
            repo: "https://github.com/KevinGil12C/herramienta_bat",
            isPrivate: false
        },
        {
            id: "REPO_08",
            title: "MapCreatorPro.web",
            desc: "Aplicación web moderna para crear mapas interactivos con rutas terrestres, aéreas y marítimas mediante una interfaz drag & drop intuitiva.",
            tags: ["HTML", "CSS", "JS", "LEAFLET.JS", "BOOTSTRAP"],
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
            preview: "https://github.com/KevinGil12C/generate_map",
            repo: "https://github.com/KevinGil12C/generate_map",
            isPrivate: false
        },
        {
            id: "REPO_09",
            title: "HTMLTableMaker.web",
            desc: "Una herramienta web interactiva para crear tablas HTML editables con estilo profesional, perfecta para desarrolladores web y diseñadores.",
            tags: ["HTML", "CSS", "JS", "BOOTSTRAP"],
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            preview: "https://kevingil12c.github.io/generatable/",
            repo: "https://github.com/KevinGil12C/generatable",
            isPrivate: false
        },
        {
            id: "REPO_10",
            title: "TechBlog Editor.web",
            desc: "Un editor de blog moderno y completo diseñado específicamente para contenido técnico, con soporte para código, terminales, iconos y elementos avanzados de formato.",
            tags: ["HTML", "CSS", "JS", "BOOTSTRAP"],
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            preview: "https://kevingil12c.github.io/generador_blog/",
            repo: "https://github.com/KevinGil12C/generador_blog",
            isPrivate: false
        },
        {
            id: "REPO_11",
            title: "HorarioAcadémico_RPC.c",
            desc: "Sistema cliente-servidor desarrollado en C utilizando RPC (Remote Procedure Call) para la gestión de horarios académicos. Permite realizar operaciones CRUD sobre materias y sus horarios, almacenando la información en un archivo de texto.",
            tags: ["C"],
            img: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&q=80&w=800",
            preview: "https://drive.google.com/file/d/1ZJ5Qxy3HW-cgZ5wvDgNLhlRfLdUWXfck/view",
            repo: "https://github.com/KevinGil12C/RPC_Crud_Horarios",
            isPrivate: false
        },
        {
            id: "REPO_12",
            title: "PuntoDeVentaJava_SQLite.java",
            desc: "Implementación de un sistema de punto de venta utilizando Java para el backend y SQLite como base de datos. Incluye funcionalidades de gestión de productos, ventas y recuperación de contraseña por correo electrónico.",
            tags: ["JAVA", "SQLITE"],
            img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
            repo: "https://github.com/KevinGil12C/SistemaDeVentas2",
            isPrivate: true
        },
        {
            id: "REPO_13",
            title: "SistemaDeInventarioPHP_MySQL.php",
            desc: "Desarrollo de un sistema de inventario utilizando PHP para el backend y MySQL como base de datos. Incluye funcionalidades de gestión de productos, categorías, proveedores y reportes de inventario.",
            tags: ["PHP", "MYSQL", "HTML", "CSS", "JS"],
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            repo: "https://github.com/KevinGil12C/SistemaDeVentas2",
            isPrivate: true
        },
        {
            id: "REPO_14",
            title: "ChatbotEscolarPHP_MySQL.php",
            desc: "Chatbot escolar para alumnos de la facultad de ingeniería, desarrollado en PHP, MYSQL, JS, Bootstrap, JQuery.",
            tags: ["PHP", "MYSQL", "JS", "BOOTSTRAP"],
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            repo: "https://github.com/KevinGil12C/www.Lucybot.com",
            isPrivate: true
        },
        {
            id: "REPO_15",
            title: "SistemaDeVentasJADE_SQLite.java",
            desc: "Implementación de sistema de ventas con JADE (Agentes) con persistencia en SQLite, para la gestión de inventario, optimización de tiempos de espera con generación reportes PDF.",
            tags: ["JAVA", "JADE", "SQLITE"],
            img: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&q=80&w=800",
            repo: "https://github.com/KevinGil12C/ProyectoSE",
            isPrivate: true
        }
    ];

    // Extraer todas las tecnologías únicas para los filtros
    const allTechnologies = ['ALL_STACKS'];
    allProjects.forEach(project => {
        project.tags.forEach(tag => {
            if (!allTechnologies.includes(tag)) {
                allTechnologies.push(tag);
            }
        });
    });

    // Filtrar proyectos basados en el filtro seleccionado
    const filteredProjects = filter === 'ALL_STACKS' 
        ? allProjects 
        : allProjects.filter(project => 
            project.tags.some(tag => tag === filter)
        );

    // Proyectos a mostrar (basados en filtro y contador visible)
    const displayedProjects = filteredProjects.slice(0, visibleCount);

    // Manejar el clic en los botones de filtro
    const handleFilterClick = (tech) => {
        setFilter(tech);
        setVisibleCount(3); // Resetear el contador al cambiar filtro
    };

    // Manejar vista previa del proyecto, el boton de preview no saldra sino tiene url asignada
    const handlePreview = (projectId, projectTitle) => {
        //Redirige al proyecto o muestra una alerta
        window.open(allProjects.find(proj => proj.id === projectId).preview || '#', '_blank');
    };

    // Manejar ver repositorio
    const handleViewRepo = (projectId, projectTitle) => {
        const project = allProjects.find(proj => proj.id === projectId);
        
        if (!project) {
            Swal.fire({
                title: '❌ ERROR',
                text: 'Proyecto no encontrado en la base de datos',
                icon: 'error',
                confirmButtonText: 'ENTENDIDO',
                background: '#0a140d',
                color: '#0df259',
                confirmButtonColor: '#0df259',
                customClass: {
                    popup: 'terminal-window border border-primary/30',
                    title: 'font-mono text-lg',
                    confirmButton: 'bg-primary text-black font-mono font-bold px-4 py-2 hover:bg-white transition-all'
                }
            });
            return;
        }

        if (project.isPrivate) {
            // Proyecto privado - mostrar alerta con SweetAlert2
            Swal.fire({
                title: '🔒 REPOSITORIO PRIVADO',
                html: `
                    <div class="font-mono text-left">
                        <div class="mb-4 p-3 bg-terminal-bg border border-primary/20 rounded">
                            <h3 class="text-primary font-bold mb-1">${projectTitle}</h3>
                            <p class="text-xs text-primary/60">ID: ${projectId}</p>
                        </div>
                        
                        <div class="space-y-3">
                            <div class="flex items-start gap-2">
                                <span class="material-symbols-outlined text-primary mt-0.5">lock</span>
                                <div>
                                    <h4 class="text-primary font-bold text-sm">ESTADO: RESTRINGIDO</h4>
                                    <p class="text-xs text-white/70 mt-1">Este repositorio no está disponible públicamente por razones de confidencialidad.</p>
                                </div>
                            </div>
                            
                            ${project.reason ? `
                            <div class="flex items-start gap-2">
                                <span class="material-symbols-outlined text-primary/60 mt-0.5">info</span>
                                <div>
                                    <h4 class="text-primary/80 font-bold text-sm">RAZÓN:</h4>
                                    <p class="text-xs text-white/70 mt-1">${project.reason}</p>
                                </div>
                            </div>
                            ` : ''}
                            
                            <div class="mt-4 pt-3 border-t border-primary/10">
                                <p class="text-xs text-primary/50">Para solicitar acceso, puedes contactarme directamente.</p>
                            </div>
                        </div>
                    </div>
                `,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'SOLICITAR ACCESO',
                cancelButtonText: 'CERRAR',
                background: '#0a140d',
                color: '#0df259',
                confirmButtonColor: '#0df259',
                cancelButtonColor: '#ff4444',
                customClass: {
                    popup: 'terminal-window border border-primary/30',
                    title: 'font-mono text-primary',
                    confirmButton: 'bg-primary text-black font-mono font-bold px-4 py-2 hover:bg-white transition-all',
                    cancelButton: 'border border-red-500/30 text-red-500 font-mono px-4 py-2 hover:bg-red-500/10 transition-all'
                },
                buttonsStyling: false
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirigir a la página de contacto con información del proyecto
                    window.location.href = `/contact?project=${encodeURIComponent(projectTitle)}&id=${projectId}&type=repo-access`;
                }
            });
        } else {
            // Proyecto público - redirigir al repositorio
            if (project.repo) {
                
                // Mostrar notificación de éxito
                Swal.fire({
                    title: '🌐 REDIRIGIENDO A GITHUB',
                    html: `
                        <div class="font-mono text-center">
                            <p class="text-primary mb-3">${projectTitle}</p>
                            <div class="flex items-center justify-center gap-2 text-xs text-primary/60">
                                <span class="material-symbols-outlined text-sm">open_in_new</span>
                                <span>${project.repo.replace('https://', '')}</span>
                            </div>
                        </div>
                    `,
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    background: '#0a140d',
                    color: '#0df259',
                    customClass: {
                        popup: 'terminal-window border border-primary/30',
                        title: 'font-mono'
                    }
                });
                setTimeout(() => {
                    window.open(project.repo, '_blank', 'noopener,noreferrer');
                }, 2000);
                
            } else {
                // Si no hay URL de repositorio
                Swal.fire({
                    title: '⚠️ URL NO DISPONIBLE',
                    text: 'El enlace al repositorio no está configurado para este proyecto.',
                    icon: 'info',
                    confirmButtonText: 'ENTENDIDO',
                    background: '#0a140d',
                    color: '#0df259',
                    confirmButtonColor: '#0df259',
                    customClass: {
                        popup: 'terminal-window border border-primary/30',
                        title: 'font-mono',
                        confirmButton: 'bg-primary text-black font-mono font-bold px-4 py-2 hover:bg-white transition-all'
                    }
                });
            }
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-12">
            <main className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <div className="text-[12px] mb-2 text-primary/60 font-mono">bash --version 5.1.16(1)-release</div>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4 flex items-start md:items-center gap-3 break-all sm:break-normal">
                        <span className="text-primary/40 font-mono shrink-0">$</span> 
                        <span className="leading-tight">ls -la /projects/portfolio</span>
                    </h2>
                    
                    {/* Sistema de Filtros */}
                    <div className="flex flex-wrap items-center gap-3 py-4 border-y border-primary/10 mb-8">
                        <span className="text-[10px] font-bold text-primary/40 uppercase">Filter_by:</span>
                        {allTechnologies.map(tech => (
                            <button 
                                key={tech}
                                onClick={() => handleFilterClick(tech)}
                                className={`px-3 py-1 text-[10px] font-bold transition-all duration-200 ${
                                    filter === tech 
                                        ? 'bg-primary text-black shadow-[0_0_10px_rgba(13,242,89,0.5)]' 
                                        : 'border border-primary/20 text-primary/60 hover:border-primary hover:text-primary hover:bg-primary/5'
                                }`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                    
                    {/* Información del filtro aplicado */}
                    <div className="mb-6 p-3 bg-terminal-bg border border-primary/20 rounded-sm">
                        <div className="flex items-center justify-between">
                            <div className="font-mono text-[11px] text-primary/70">
                                <span className="text-primary">$ filter_status:</span> 
                                <span className="ml-2 text-white">
                                    {filter === 'ALL_STACKS' ? 'Mostrando todos los proyectos' : `Filtrado por: ${filter}`}
                                </span>
                            </div>
                            <div className="font-mono text-[10px] text-primary/50">
                                {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'} encontrados
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid de Proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProjects.length > 0 ? (
                        displayedProjects.map((proj) => (
                            <div key={proj.id} className="terminal-window group hover:border-primary/50 transition-all duration-300 fade-in">
                                <div className="bg-dir-header px-3 py-1.5 flex items-center justify-between border-b border-primary/30">
                                    <span className="text-[10px] font-bold tracking-tight text-primary/70">drwxr-xr-x 1 kevscl staff</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="aspect-video w-full bg-black mb-4 border border-primary/10 overflow-hidden relative rounded-sm">
                                        <img 
                                            alt={proj.title} 
                                            className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-300" 
                                            src={proj.img}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&q=80&w=800';
                                            }}
                                        />
                                        <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 text-[9px] border border-primary/40">{proj.id}</div>
                                        {filter !== 'ALL_STACKS' && (
                                            <div className="absolute top-2 right-2 bg-primary/80 text-black px-2 py-0.5 text-[8px] font-bold rounded-sm">
                                                {filter}
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{proj.title}</h3>
                                    <p className="text-[11px] text-primary/70 leading-relaxed mb-4 h-12 overflow-hidden">
                                        {proj.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {proj.tags.map(tag => (
                                            <div 
                                                key={tag} 
                                                className={`tech-tag transition-all duration-200 ${
                                                    filter === tag ? 'bg-primary/20 border-primary/40' : ''
                                                }`}
                                            >
                                                <span className="material-symbols-outlined text-[12px]">code</span> 
                                                <span className={filter === tag ? 'text-primary font-bold' : ''}>
                                                    {tag}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        {/* Botón PREVIEW - Solo se muestra si hay URL de preview */}
                                        {proj.preview && (
                                            <button 
                                                onClick={() => handlePreview(proj.id, proj.title)}
                                                className="btn-action group/preview"
                                            >
                                                <span className="material-symbols-outlined text-sm group-hover/preview:animate-pulse">visibility</span> 
                                                PREVIEW
                                            </button>
                                        )}
                                        
                                        {/* Botón REPO - Siempre visible */}
                                        <button 
                                            onClick={() => handleViewRepo(proj.id, proj.title)}
                                            className={`btn-action group/repo ${!proj.preview ? 'col-span-2' : ''}`}
                                        >
                                            <span className="material-symbols-outlined text-sm group-hover/repo:animate-bounce">terminal</span> 
                                            REPO
                                            {proj.isPrivate && (
                                                <span className="ml-2 text-[10px] opacity-70">(Privado)</span>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Mensaje cuando no hay proyectos con el filtro aplicado
                        <div className="col-span-3 py-12 text-center">
                            <div className="terminal-window p-8 max-w-md mx-auto">
                                <div className="text-4xl mb-4 text-primary/40">
                                    <span className="material-symbols-outlined">search_off</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">No se encontraron proyectos</h3>
                                <p className="text-primary/60 text-sm mb-4">
                                    No hay proyectos que coincidan con el filtro "{filter}"
                                </p>
                                <button 
                                    onClick={() => handleFilterClick('ALL_STACKS')}
                                    className="px-4 py-2 bg-primary text-black font-mono text-[10px] font-bold hover:bg-white transition-colors"
                                >
                                    VER TODOS LOS PROYECTOS
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Botón para cargar más proyectos */}
                {filteredProjects.length > 0 && (
                    <div className="mt-16 flex flex-col items-center gap-4">
                        <div className="h-px w-32 bg-primary/30"></div>
                        {visibleCount < filteredProjects.length ? (
                            <button 
                                onClick={() => setVisibleCount(prev => Math.min(prev + 3, filteredProjects.length))}
                                className="flex items-center gap-3 px-8 py-3 border border-primary text-primary font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all rounded-sm active:translate-y-1"
                            >
                                <span className="material-symbols-outlined">expand_more</span>
                                Ver más repositorios
                            </button>
                        ) : (
                            <button 
                                onClick={() => setVisibleCount(3)}
                                className="flex items-center gap-3 px-8 py-3 border border-primary/40 text-primary/40 font-bold uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-all rounded-sm"
                            >
                                <span className="material-symbols-outlined">expand_less</span>
                                Contraer lista
                            </button>
                        )}
                        
                        <span className="text-[10px] text-primary/40 uppercase">
                            Mostrando {Math.min(visibleCount, filteredProjects.length)} de {filteredProjects.length} módulos activos
                            {filter !== 'ALL_STACKS' && ` (filtrado por: ${filter})`}
                        </span>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Projects;