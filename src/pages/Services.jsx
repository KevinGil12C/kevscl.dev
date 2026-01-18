import React, { useState } from 'react';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';

const Services = () => {
    const [activeServiceForm, setActiveServiceForm] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const itemsPerPage = 6;

    // URL de Google Apps Script para servicios
    const SERVICES_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxbeBSAY9VlvN85np8-ScQ57tGs1CTAbkC5ZxnkVDTXirVCym0c3FrYTwSgOC_DrJT1lg/exec';

    const services = [
        {
            "id": "SVC_01",
            "title": "Formateo de Windows / Linux",
            "desc": "Respaldo de información, instalación limpia de sistema operativo, configuración de drivers y optimización de arranque.",
            "price": "$600 - $950 MXN",
            "icon": "desktop_windows",
            "time": "24-48 hrs",
            "category": "Sistema Operativo",
            "priority": "Media",
            "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_02",
            "title": "Instalación de Software",
            "desc": "Instalación de paquetería Office, Adobe Creative Cloud, herramientas de desarrollo o programas específicos.",
            "price": "$350 - $600 MXN",
            "icon": "apps",
            "time": "Remoto/Presencial",
            "category": "Software",
            "priority": "Baja",
            "img": "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_03",
            "title": "Landing Pages y Sitios Web",
            "desc": "Desarrollo de páginas web responsivas y landing pages personalizadas.",
            "price": "$4,500 - $12,000 MXN",
            "icon": "language",
            "time": "1-3 semanas",
            "category": "Desarrollo Web",
            "priority": "Alta",
            "img": "https://images.unsplash.com/photo-1502880195258-9ffbf0d5f0b4?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_04",
            "title": "Mantenimiento Preventivo",
            "desc": "Limpieza física interna (aire comprimido/alcohol isopropílico), cambio de pasta térmica y optimización de software.",
            "price": "$500 - $900 MXN",
            "icon": "build",
            "time": "24-48 hrs",
            "category": "Hardware",
            "priority": "Media",
            "img": "https://images.unsplash.com/photo-1587825140408-6c4f3f3b5f4a?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_05",
            "title": "Desarrollo de Software a Medida",
            "desc": "Creación de aplicaciones personalizadas (Web/Desktop) según necesidades específicas.",
            "price": "$18,000 - $60,000+ MXN",
            "icon": "code",
            "time": "4-12 semanas",
            "category": "Desarrollo",
            "priority": "Alta",
            "img": "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_06",
            "title": "Diagnóstico y Reparación",
            "desc": "Análisis del sistema para identificar fallas de hardware (tarjeta madre, fuente, etc.) y presupuesto de reparación.",
            "price": "$300 - $500 MXN (Solo diagnóstico)",
            "icon": "bug_report",
            "time": "24-72 hrs",
            "category": "Hardware",
            "priority": "Media",
            "img": "https://images.unsplash.com/photo-1581093588401-5b5f3f3b5f4a?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_07",
            "title": "Formateo de Android / iOS",
            "desc": "Respaldo de datos, restauración de fábrica y actualización de sistema.",
            "price": "$350 - $600 MXN",
            "icon": "smartphone",
            "time": "12-24 hrs",
            "category": "Móvil",
            "priority": "Media",
            "img": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_08",
            "title": "Desbloqueo de Dispositivos",
            "desc": "Recuperación de acceso, desbloqueo de red o cuenta (sujeto a verificación de propiedad).",
            "price": "$500 - $1,800 MXN",
            "icon": "lock_open",
            "time": "24-72 hrs",
            "category": "Móvil",
            "priority": "Alta",
            "img": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_09",
            "title": "Optimización de Rendimiento",
            "desc": "Instalación de SSD, expansión de RAM y limpieza de procesos en segundo plano.",
            "price": "$450 - $1,200 MXN (+ Costo de piezas)",
            "icon": "speed",
            "time": "24-48 hrs",
            "category": "Hardware",
            "priority": "Media",
            "img": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_10",
            "title": "Soporte Técnico Remoto",
            "desc": "Asistencia vía AnyDesk/TeamViewer para errores de configuración o software.",
            "price": "$350 - $700 MXN",
            "icon": "support_agent",
            "time": "Inmediato",
            "category": "Soporte",
            "priority": "Baja",
            "img": "https://images.unsplash.com/photo-1551836022-1b3f5b3e5f4a?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_11",
            "title": "Configuración de Red / Modem",
            "desc": "Cambio de contraseñas, configuración de canales WiFi y mejora de seguridad.",
            "price": "$300 - $550 MXN",
            "icon": "wifi",
            "time": "1-2 hrs",
            "category": "Redes",
            "priority": "Baja",
            "img": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_12",
            "title": "Configuración de equipos IoT",
            "desc": "Instalación de cámaras, focos inteligentes, Alexa/Google Home y timbres inteligentes.",
            "price": "$600 - $1,500 MXN",
            "icon": "devices",
            "time": "24 hrs",
            "category": "IoT",
            "priority": "Media",
            "img": "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_13",
            "title": "Instalación de TV Box",
            "desc": "Configuración de cuentas, apps de streaming y optimización de sistema.",
            "price": "$250 - $450 MXN",
            "icon": "tv",
            "time": "12-24 hrs",
            "category": "Entretenimiento",
            "priority": "Baja",
            "img": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
        },
        {
            "id": "SVC_14",
            "title": "Recuperación de cuentas",
            "desc": "Asistencia en recuperación de correos o redes sociales mediante protocolos oficiales.",
            "price": "$400 - $1,000 MXN",
            "icon": "email",
            "time": "24-72 hrs",
            "category": "Seguridad",
            "priority": "Alta",
            "img": "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const totalPages = Math.ceil(services.length / itemsPerPage);
    const currentServices = services.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleServiceRequest = async (serviceId, serviceData) => {
        const service = services.find(s => s.id === serviceId);
        
        if (!service) {
            Swal.fire({
                title: '❌ Error',
                text: 'Servicio no encontrado',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Mostrar loading
            Swal.fire({
                title: '⏳ Procesando solicitud...',
                html: `
                    <div class="font-mono text-center">
                        <p class="text-primary mb-3">Enviando solicitud para:</p>
                        <div class="bg-terminal-bg p-3 rounded border border-primary/20">
                            <p class="text-white font-bold">${service.title}</p>
                            <p class="text-primary/70 text-xs mt-1">${service.id}</p>
                        </div>
                    </div>
                `,
                allowOutsideClick: false,
                showConfirmButton: false,
                background: '#0a140d',
                color: '#0df259',
                customClass: {
                    popup: 'terminal-window border border-primary/30',
                    title: 'font-mono'
                }
            });

            // Enviar a Google Sheets
            const payload = {
                type: 'service_request',
                service_id: service.id,
                service_title: service.title,
                service_price: service.price,
                service_category: service.category,
                timestamp: new Date().toISOString(),
                ...serviceData,
                userAgent: navigator.userAgent
            };

            const response = await fetch(SERVICES_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            console.log(response);
            // Simular éxito (no-cors)
            setTimeout(() => {
                Swal.fire({
                    title: '✅ Solicitud Enviada',
                    html: `
                        <div class="font-mono text-center space-y-4">
                            <div class="text-primary text-lg">📋 ORDEN DE SERVICIO</div>
                            
                            <div class="grid grid-cols-2 gap-3">
                                <div class="bg-terminal-bg p-3 rounded border border-primary/20">
                                    <div class="text-primary/60 text-[10px]">SERVICIO</div>
                                    <div class="text-white text-sm mt-1">${service.title}</div>
                                </div>
                                <div class="bg-terminal-bg p-3 rounded border border-primary/20">
                                    <div class="text-primary/60 text-[10px]">ID</div>
                                    <div class="text-white text-sm mt-1">${service.id}</div>
                                </div>
                            </div>
                            
                            <div class="bg-terminal-bg p-3 rounded border border-primary/20 text-left">
                                <div class="text-primary/60 text-[10px] mb-2">DETALLES CLIENTE</div>
                                <div class="space-y-2 text-xs">
                                    <div class="flex justify-between">
                                        <span class="text-white/70">Nombre:</span>
                                        <span class="text-primary">${serviceData.name}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-white/70">Email:</span>
                                        <span class="text-primary">${serviceData.email}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-white/70">Precio estimado:</span>
                                        <span class="text-primary font-bold">${service.price}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="text-[10px] text-primary/50">
                                <div class="flex items-center justify-center gap-2">
                                    <span class="material-symbols-outlined text-xs">schedule</span>
                                    <span>Te contactaré en menos de 24 horas para confirmar</span>
                                </div>
                                <div class="mt-2 text-[9px] text-primary/40">
                                    ID de orden: SVC_${Date.now().toString(36).toUpperCase()}
                                </div>
                            </div>
                        </div>
                    `,
                    icon: 'success',
                    background: '#0a140d',
                    color: '#0df259',
                    confirmButtonText: '👌 ENTENDIDO',
                    confirmButtonColor: '#0df259',
                    customClass: {
                        popup: 'terminal-window border border-primary/30',
                        title: 'font-mono',
                        confirmButton: 'bg-primary text-black font-mono font-bold px-4 py-2 hover:bg-white transition-all'
                    }
                });

                // Cerrar formulario
                setActiveServiceForm(null);

            }, 1500);

        } catch (error) {
            console.error('Error:', error);
            
            Swal.fire({
                title: '❌ Error de envío',
                text: 'No se pudo enviar la solicitud. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'REINTENTAR',
                background: '#0a140d',
                color: '#0df259',
                confirmButtonColor: '#0df259',
                customClass: {
                    popup: 'terminal-window border border-primary/30',
                    title: 'font-mono',
                    confirmButton: 'btn-action'
                }
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFormSubmit = (e, serviceId) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        if (!data.name || !data.email || !data.requirements) {
            Swal.fire({
                title: '⚠️ Campos incompletos',
                text: 'Por favor completa todos los campos',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }

        handleServiceRequest(serviceId, data);
    };

    return (
        <div className="min-h-screen pt-32 pb-12">
            <main className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <div className="text-[12px] mb-2 text-primary/60 font-mono">systemctl status services.service</div>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4 flex items-start md:items-center gap-3 break-all sm:break-normal">
                        <span className="text-primary/40 font-mono shrink-0">$</span>
                        <span className="leading-tight">cat /etc/services_list.conf</span>
                    </h2>
                    <p className="text-primary/60 font-mono text-xs max-w-2xl mb-8">
                        Soluciones técnicas integrales con costos competitivos para el mercado mexicano.
                        Precios estimados sujetos a evaluación previa del equipo.
                    </p>
                    
                    {/* Status Panel */}
                    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-terminal-bg border border-primary/30 p-3 rounded-sm">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="size-3 rounded-full bg-green-500"></div>
                                    <div className="absolute inset-0 size-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
                                </div>
                                <div className="font-mono text-xs">
                                    <div className="text-primary/60">Backend Status</div>
                                    <div className="text-white">Google Sheets ✓</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-terminal-bg border border-primary/30 p-3 rounded-sm">
                            <div className="font-mono text-xs">
                                <div className="text-primary/60">Total Servicios</div>
                                <div className="text-white text-lg">{services.length} disponibles</div>
                            </div>
                        </div>
                        
                        <div className="bg-terminal-bg border border-primary/30 p-3 rounded-sm">
                            <div className="font-mono text-xs">
                                <div className="text-primary/60">Página Actual</div>
                                <div className="text-white">{currentPage} de {totalPages}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentServices.map((svc) => (
                        <div key={svc.id} className="terminal-window group hover:border-primary/60 transition-all fade-in">
                            <div className="bg-dir-header px-3 py-1.5 flex items-center justify-between border-b border-primary/30">
                                <span className="text-[10px] font-bold tracking-tight text-primary/70">{svc.id} // {svc.priority}</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[9px] text-primary/50 font-mono">{svc.category}</span>
                                    <span className="material-symbols-outlined text-primary/40 text-sm">settings</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="aspect-video w-full bg-black mb-4 border border-primary/10 overflow-hidden relative rounded-sm">
                                    <img
                                        alt={svc.title}
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity grayscale hover:grayscale-0"
                                        src={svc.img}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&q=80&w=800';
                                        }}
                                    />
                                    <div className="absolute top-2 left-2 bg-black/80 size-8 flex items-center justify-center border border-primary/40 rounded-sm">
                                        <span className="material-symbols-outlined text-primary text-lg">{svc.icon}</span>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-primary/90 text-black px-2 py-1 text-[9px] font-bold rounded">
                                        {svc.price.split(' ')[0]}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors uppercase">{svc.title}</h3>
                                <p className="text-[11px] text-primary/70 leading-relaxed mb-6 h-12 overflow-hidden">
                                    {svc.desc}
                                </p>

                                <div className="space-y-3 pt-4 border-t border-primary/10">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-mono text-primary/40 uppercase">Costo:</span>
                                        <span className="text-sm font-bold text-primary">{svc.price}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-mono text-primary/40 uppercase">Tiempo:</span>
                                        <span className="text-[10px] text-white/60 font-mono">{svc.time}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-mono text-primary/40 uppercase">Prioridad:</span>
                                        <span className={`text-[10px] font-bold ${svc.priority === 'Alta' ? 'text-red-500' : svc.priority === 'Media' ? 'text-yellow-500' : 'text-green-500'}`}>
                                            {svc.priority}
                                        </span>
                                    </div>
                                </div>

                                {activeServiceForm === svc.id ? (
                                    <div className="mt-6 space-y-3 bg-black/40 p-4 border border-primary/20 rounded-sm animate-in fade-in duration-300">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[9px] font-mono text-primary font-bold">SOLICITUD: {svc.id}</span>
                                            <button 
                                                onClick={() => setActiveServiceForm(null)} 
                                                className="text-primary/50 hover:text-red-500 disabled:opacity-50"
                                                disabled={isSubmitting}
                                            >
                                                <span className="material-symbols-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                        <form onSubmit={(e) => handleFormSubmit(e, svc.id)}>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="NOMBRE_COMPLETO"
                                                className="w-full bg-terminal-bg border border-primary/30 text-[10px] p-2 text-primary focus:border-primary outline-none font-mono mb-2"
                                                required
                                                disabled={isSubmitting}
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="EMAIL_CONTACTO"
                                                className="w-full bg-terminal-bg border border-primary/30 text-[10px] p-2 text-primary focus:border-primary outline-none font-mono mb-2"
                                                required
                                                disabled={isSubmitting}
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="TELEFONO (OPCIONAL)"
                                                className="w-full bg-terminal-bg border border-primary/30 text-[10px] p-2 text-primary focus:border-primary outline-none font-mono mb-2"
                                                disabled={isSubmitting}
                                            />
                                            <textarea
                                                name="requirements"
                                                placeholder="REQUERIMIENTOS_ESPECIFICOS"
                                                className="w-full bg-terminal-bg border border-primary/30 text-[10px] p-2 text-primary focus:border-primary outline-none font-mono h-16 resize-none mb-3"
                                                required
                                                disabled={isSubmitting}
                                            ></textarea>
                                            <button 
                                                type="submit" 
                                                className="w-full bg-primary text-black font-mono font-bold py-2 text-[10px] hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="animate-spin inline-block mr-2">⟳</span>
                                                        ENVIANDO...
                                                    </>
                                                ) : (
                                                    'ENVIAR SOLICITUD'
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setActiveServiceForm(svc.id)}
                                        className="mt-6 w-full btn-action group relative"
                                        disabled={isSubmitting}
                                    >
                                        <span className="material-symbols-outlined text-sm group-hover:animate-bounce">shopping_cart</span>
                                        SOLICITAR SERVICIO
                                        <span className="absolute -top-1 -right-1 size-2 bg-primary rounded-full animate-ping"></span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination UI */}
                {totalPages > 1 && (
                    <div className="mt-16 flex justify-center items-center gap-4 font-mono">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1 || isSubmitting}
                            className={`flex items-center gap-1 px-3 py-1 border border-primary/30 text-[10px] uppercase transition-all ${currentPage === 1 || isSubmitting ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:text-black'}`}
                        >
                            <span className="material-symbols-outlined text-sm">chevron_left</span> ANTERIOR
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    disabled={isSubmitting}
                                    className={`size-8 flex items-center justify-center border text-[10px] transition-all ${currentPage === i + 1 ? 'bg-primary text-black border-primary font-bold' : 'border-primary/20 text-primary/60 hover:border-primary'} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages || isSubmitting}
                            className={`flex items-center gap-1 px-3 py-1 border border-primary/30 text-[10px] uppercase transition-all ${currentPage === totalPages || isSubmitting ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:text-black'}`}
                        >
                            SIGUIENTE <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                )}
                
                {/* Info Panel */}
                <div className="mt-12 p-6 bg-terminal-bg/50 border border-primary/20 rounded-lg">
                    <div className="font-mono text-xs">
                        <h3 className="text-primary font-bold mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">info</span>
                            INFORMACIÓN IMPORTANTE
                        </h3>
                        <ul className="space-y-2 text-primary/70 text-[11px]">
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-[12px] mt-0.5">check_circle</span>
                                <span>Todas las solicitudes se guardan automáticamente en <strong>Google Sheets</strong></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-[12px] mt-0.5">schedule</span>
                                <span>Te contactaré en <strong>menos de 24 horas</strong> para confirmar disponibilidad y detalles</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-[12px] mt-0.5">attach_money</span>
                                <span>Los precios son <strong>estimados</strong> y pueden variar según requerimientos específicos</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-[12px] mt-0.5">location_on</span>
                                <span>Servicio disponible en <strong>Estado de México y CDMX</strong> (algunos servicios son remotos)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Services;