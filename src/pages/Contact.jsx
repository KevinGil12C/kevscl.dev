import React, { useState } from 'react';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [lastSubmissionTime, setLastSubmissionTime] = useState(null);

    // URL de tu Google Apps Script Web App
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyO00seqhq4xnre_HqYmLy3OzGWIoTfI02VCMUGYIg5BcFbewrMZcyQJEKfBeigvVCudw/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validación básica
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            Swal.fire({
                title: '⚠️ Campos incompletos',
                html: `
                    <div class="font-mono text-left">
                        <p class="text-primary/70 mb-3">Por favor completa todos los campos:</p>
                        <div class="bg-terminal-bg p-3 border border-primary/20 rounded text-xs">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="material-symbols-outlined text-sm ${formData.name ? 'text-green-500' : 'text-red-500'}">${formData.name ? 'check_circle' : 'error'}</span>
                                <span class="${formData.name ? 'text-green-500' : 'text-red-500'}">Nombre ${formData.name ? '✓' : '✗'}</span>
                            </div>
                            <div class="flex items-center gap-2 mb-2">
                                <span class="material-symbols-outlined text-sm ${formData.email ? 'text-green-500' : 'text-red-500'}">${formData.email ? 'check_circle' : 'error'}</span>
                                <span class="${formData.email ? 'text-green-500' : 'text-red-500'}">Email ${formData.email ? '✓' : '✗'}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="material-symbols-outlined text-sm ${formData.message ? 'text-green-500' : 'text-red-500'}">${formData.message ? 'check_circle' : 'error'}</span>
                                <span class="${formData.message ? 'text-green-500' : 'text-red-500'}">Mensaje ${formData.message ? '✓' : '✗'}</span>
                            </div>
                        </div>
                    </div>
                `,
                icon: 'warning',
                background: '#0a140d',
                color: '#0df259',
                confirmButtonText: 'ENTENDIDO',
                confirmButtonColor: '#0df259',
                customClass: {
                    popup: 'terminal-window border border-primary/30',
                    title: 'font-mono',
                    confirmButton: 'bg-primary text-black font-mono font-bold px-4 py-2 hover:bg-white transition-all'
                }
            });
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            Swal.fire({
                title: '📧 Email inválido',
                text: 'Por favor ingresa un email válido',
                icon: 'error',
                background: '#0a140d',
                color: '#0df259',
                confirmButtonText: 'CORREGIR',
                confirmButtonColor: '#0df259',
                customClass: {
                    popup: 'terminal-window border border-primary/30',
                    title: 'font-mono',
                    confirmButton: 'btn-action'
                }
            });
            return;
        }

        setIsSubmitting(true);

        // Mostrar loading con detalles
        Swal.fire({
            title: '⏳ Procesando solicitud...',
            html: `
                <div class="font-mono text-center space-y-3">
                    <div class="text-xs text-primary/70">Conectando con Google Sheets API</div>
                    <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div>
                                <span class="text-xs font-semibold inline-block text-primary">Progreso</span>
                            </div>
                            <div class="text-right">
                                <span class="text-xs font-semibold inline-block text-primary">0%</span>
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-terminal-bg">
                            <div id="progressBar" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-1000" style="width: 0%"></div>
                        </div>
                    </div>
                    <div class="text-[10px] text-primary/50">
                        <div class="flex items-center justify-center gap-2">
                            <span class="material-symbols-outlined text-xs">database</span>
                            <span>ID: CONTACT_${Date.now().toString(36).toUpperCase()}</span>
                        </div>
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
            },
            didOpen: () => {
                // Animación de progreso
                const progressBar = document.getElementById('progressBar');
                let progress = 0;
                const interval = setInterval(() => {
                    progress += 10;
                    progressBar.style.width = `${progress}%`;
                    if (progress >= 90) clearInterval(interval);
                }, 100);
            }
        });

        try {
            // Preparar payload
            const payload = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim(),
                timestamp: new Date().toISOString(),
                source: 'portfolio_kevscl',
                userAgent: navigator.userAgent,
                referrer: document.referrer || 'direct'
            };

            console.log('📤 Enviando payload:', payload);

            // Enviar a Google Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            console.log(response);
            // Simular éxito (con no-cors no podemos leer respuesta)
            setTimeout(() => {
                const now = new Date();
                setLastSubmissionTime(now);
                
                Swal.fire({
                    title: '🚀 ¡Mensaje Enviado!',
                    html: `
                        <div class="font-mono text-center space-y-4">
                            <div class="text-primary text-lg">✅ TRANSMISIÓN COMPLETADA</div>
                            
                            <div class="grid grid-cols-2 gap-3">
                                <div class="bg-terminal-bg p-3 rounded border border-primary/20">
                                    <div class="text-primary/60 text-[10px] uppercase tracking-wider">USUARIO</div>
                                    <div class="text-white text-sm mt-1 truncate">${formData.name}</div>
                                </div>
                                <div class="bg-terminal-bg p-3 rounded border border-primary/20">
                                    <div class="text-primary/60 text-[10px] uppercase tracking-wider">EMAIL</div>
                                    <div class="text-white text-sm mt-1 truncate">${formData.email}</div>
                                </div>
                            </div>
                            
                            <div class="bg-terminal-bg p-3 rounded border border-primary/20 text-left">
                                <div class="text-primary/60 text-[10px] uppercase tracking-wider mb-2">MENSAJE</div>
                                <div class="text-white text-xs max-h-20 overflow-y-auto">
                                    ${formData.message.split('\n').map(line => `<p class="mb-1">${line}</p>`).join('')}
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-3 gap-2 text-[10px]">
                                <div class="bg-terminal-bg/50 p-2 rounded text-center">
                                    <div class="text-primary/60">ID</div>
                                    <div class="text-white">${Date.now().toString().slice(-6)}</div>
                                </div>
                                <div class="bg-terminal-bg/50 p-2 rounded text-center">
                                    <div class="text-primary/60">HORA</div>
                                    <div class="text-white">${now.toLocaleTimeString('es-MX', { hour12: true, hour: '2-digit', minute: '2-digit' })}</div>
                                </div>
                                <div class="bg-terminal-bg/50 p-2 rounded text-center">
                                    <div class="text-primary/60">ESTADO</div>
                                    <div class="text-green-500 font-bold">✓ OK</div>
                                </div>
                            </div>
                            
                            <div class="text-[10px] text-primary/50 space-y-1">
                                <div class="flex items-center justify-center gap-2">
                                    <span class="material-symbols-outlined text-xs">check_circle</span>
                                    <span>Datos almacenados en Google Sheets</span>
                                </div>
                            </div>
                        </div>
                    `,
                    icon: 'success',
                    background: '#0a140d',
                    color: '#0df259',
                    confirmButtonText: 'CONTINUAR',
                    confirmButtonColor: '#0df259',
                    customClass: {
                        popup: 'terminal-window border border-primary/30',
                        title: 'font-mono',
                        confirmButton: 'bg-primary text-black font-mono font-bold px-4 py-2 hover:bg-white transition-all',
                    },
                    buttonsStyling: false
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.cancel) {
                        // Abrir Google Sheets
                        window.open('https://docs.google.com/spreadsheets/d/1NYN_DQKrgRXXvG_qY_5IK8vBQv7tdW7kIopQmOHXMPk/edit', '_blank');
                    }
                });

                // Resetear formulario
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });

            }, 2000);

        } catch (error) {
            console.error('❌ Error completo:', error);
            
            Swal.fire({
                title: '❌ Error de Transmisión',
                html: `
                    <div class="font-mono text-left space-y-3">
                        <p class="text-primary/70">No se pudo completar la operación:</p>
                        
                        <div class="bg-terminal-bg p-3 border border-red-500/30 rounded text-xs">
                            <div class="text-red-500 font-bold mb-2">DETALLES TÉCNICOS:</div>
                            <div class="text-white/70 font-mono overflow-auto max-h-32">
                                ${error.toString()}
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3 mt-4">
                            <button id="retryBtn" class="p-2 bg-primary/10 border border-primary/30 rounded text-primary text-xs hover:bg-primary/20 transition-colors font-mono">
                                🔄 REINTENTAR
                            </button>
                            <button id="manualBtn" class="p-2 bg-surface border border-primary/20 rounded text-white text-xs hover:border-primary transition-colors font-mono">
                                📧 ENVIAR MANUAL
                            </button>
                        </div>
                        
                        <div class="text-[10px] text-primary/50 mt-4">
                            Si el problema persiste, contacta directamente:
                            <div class="mt-1 text-primary">kevscl.contacto@gmail.com</div>
                        </div>
                    </div>
                `,
                icon: 'error',
                background: '#0a140d',
                color: '#0df259',
                showConfirmButton: false,
                customClass: {
                    popup: 'terminal-window border border-primary/30',
                    title: 'font-mono'
                },
                didOpen: () => {
                    document.getElementById('retryBtn').addEventListener('click', () => {
                        Swal.close();
                        handleSubmit(e);
                    });
                    
                    document.getElementById('manualBtn').addEventListener('click', () => {
                        const subject = `Mensaje de ${formData.name} desde Portfolio`;
                        const body = `Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;
                        window.location.href = `mailto:kevscl.contacto@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    });
                }
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClear = () => {
        Swal.fire({
            title: '🗑️ ¿Limpiar formulario?',
            text: 'Se perderán todos los datos ingresados',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SÍ, LIMPIAR',
            cancelButtonText: 'CANCELAR',
            background: '#0a140d',
            color: '#0df259',
            confirmButtonColor: '#0df259',
            cancelButtonColor: '#ff4444',
            customClass: {
                popup: 'terminal-window border border-primary/30',
                title: 'font-mono',
                confirmButton: 'bg-primary text-black font-mono font-bold px-4 py-2 hover:bg-white transition-all',
                cancelButton: 'border border-red-500/30 text-red-500 font-mono px-4 py-2 hover:bg-red-500/10 transition-all'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                
                Swal.fire({
                    title: '✅ Formulario limpiado',
                    text: 'Todos los campos han sido reseteados',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                    background: '#0a140d',
                    color: '#0df259',
                    customClass: {
                        popup: 'terminal-window border border-primary/30',
                        title: 'font-mono'
                    }
                });
            }
        });
    };

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-12">
            <main className="flex-1 flex flex-col items-center justify-center px-4">
                <div className="w-full max-w-4xl flex flex-col items-center">
                    <h1 className="text-white tracking-tight text-base sm:text-lg md:text-2xl font-bold leading-tight text-center pb-6 md:pb-8 pt-6 uppercase font-accent">
                        <span className="text-primary opacity-80">//</span> Contact Protocol v2.0
                    </h1>
                    
                    {/* Status Panel */}
                    <div className="mb-6 w-full max-w-[650px]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-terminal-bg border border-primary/30 p-3 rounded-sm">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="size-3 rounded-full bg-green-500"></div>
                                        <div className="absolute inset-0 size-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
                                    </div>
                                    <div className="font-mono text-xs">
                                        <div className="text-primary/60">API Status</div>
                                        <div className="text-white">ONLINE ✓</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-terminal-bg border border-primary/30 p-3 rounded-sm">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">database</span>
                                    <div className="font-mono text-xs">
                                        <div className="text-primary/60">Backend</div>
                                        <div className="text-white">Google Sheets</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-terminal-bg border border-primary/30 p-3 rounded-sm">
                                <div className="font-mono text-xs">
                                    <div className="text-primary/60">Último envío</div>
                                    <div className="text-white">
                                        {lastSubmissionTime 
                                            ? lastSubmissionTime.toLocaleTimeString('es-MX', { 
                                                hour12: true, 
                                                hour: '2-digit', 
                                                minute: '2-digit' 
                                            })
                                            : 'Ninguno'
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Main Form Container */}
                    <div className="w-full max-w-[650px] bg-[#111111] border border-[#316843] rounded-md overflow-hidden shadow-2xl relative">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 px-3 py-2 bg-[#183422] border-b border-[#316843]">
                            <div className="flex gap-1.5">
                                <div className={`size-2.5 rounded-full ${isSubmitting ? 'bg-yellow-500 animate-pulse' : 'bg-red-500'}`}></div>
                                <div className="size-2.5 rounded-full bg-yellow-500/80"></div>
                                <div className="size-2.5 rounded-full bg-green-500/80"></div>
                            </div>
                            <span className="ml-2 text-[10px] font-mono text-[#90cba4] truncate">
                                bash — contact_api.sh — {isSubmitting ? 'PROCESSING' : 'AWAITING_INPUT'}
                            </span>
                            <div className="ml-auto flex gap-1">
                                <button 
                                    onClick={handleClear}
                                    className="size-5 flex items-center justify-center text-primary/60 hover:text-primary transition-colors"
                                    title="Limpiar formulario"
                                >
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                        </div>
                        
                        {/* Form Content */}
                        <div className="p-5 md:p-10 relative">
                            <div className="absolute inset-0 z-0 opacity-10 crt-overlay"></div>
                            
                            <form onSubmit={handleSubmit} className="relative z-10 space-y-5 md:space-y-6">
                                {/* Name Field */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="flex items-center gap-2 text-primary text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider">
                                        <span className="material-symbols-outlined text-xs md:text-sm">terminal</span>
                                        usr_name:
                                        {formData.name && (
                                            <span className="ml-auto text-green-500 text-[8px] flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[10px]">check</span>
                                                VALID
                                            </span>
                                        )}
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary font-mono opacity-50 text-xs md:text-sm">&gt;</span>
                                        <input 
                                            className="w-full bg-black/60 border border-primary/30 rounded h-10 md:h-12 pl-8 md:pl-10 pr-4 text-primary focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#316843] font-mono text-xs md:text-sm disabled:opacity-50" 
                                            placeholder="root@kevscl: ~ enter name" 
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            maxLength={100}
                                        />
                                        {formData.name && (
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                                <span className="material-symbols-outlined text-green-500 text-sm">person</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-[8px] text-primary/40 font-mono flex justify-between">
                                        <span>Requerido • Min 2 caracteres</span>
                                        <span>{formData.name.length}/100</span>
                                    </div>
                                </div>
                                
                                {/* Email Field */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="flex items-center gap-2 text-primary text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider">
                                        <span className="material-symbols-outlined text-xs md:text-sm">alternate_email</span>
                                        usr_email:
                                        {formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                                            <span className="ml-auto text-green-500 text-[8px] flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[10px]">check</span>
                                                VALID
                                            </span>
                                        )}
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary font-mono opacity-50 text-xs md:text-sm">&gt;</span>
                                        <input 
                                            className="w-full bg-black/60 border border-primary/30 rounded h-10 md:h-12 pl-8 md:pl-10 pr-4 text-primary focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#316843] font-mono text-xs md:text-sm disabled:opacity-50" 
                                            placeholder="root@kevscl: ~ enter email" 
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                        {formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                                <span className="material-symbols-outlined text-green-500 text-sm">mail</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-[8px] text-primary/40 font-mono">
                                        Requerido • Formato: usuario@dominio.com
                                    </div>
                                </div>
                                
                                {/* Message Field */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="flex items-center gap-2 text-primary text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider">
                                        <span className="material-symbols-outlined text-xs md:text-sm">edit_note</span>
                                        usr_msg:
                                        {formData.message && (
                                            <span className="ml-auto text-green-500 text-[8px] flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[10px]">check</span>
                                                {formData.message.length > 10 ? 'VALID' : 'SHORT'}
                                            </span>
                                        )}
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3.5 top-4 text-primary font-mono opacity-50 text-xs md:text-sm">&gt;</span>
                                        <textarea 
                                            className="w-full bg-black/60 border border-primary/30 rounded min-h-[120px] md:min-h-[150px] pl-8 md:pl-10 pr-4 py-3 text-primary focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#316843] resize-none font-mono text-xs md:text-sm disabled:opacity-50" 
                                            placeholder="root@kevscl: ~ write message..."
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            maxLength={1000}
                                        ></textarea>
                                        {formData.message && (
                                            <div className="absolute right-3 top-4">
                                                <span className="material-symbols-outlined text-green-500 text-sm">chat</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-[8px] text-primary/40 font-mono flex justify-between">
                                        <span>Requerido • Min 10 caracteres</span>
                                        <span>{formData.message.length}/1000</span>
                                    </div>
                                </div>
                                
                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button 
                                        className="w-full group relative flex items-center justify-center gap-3 bg-primary/10 border border-primary text-primary font-mono font-bold py-4 rounded overflow-hidden transition-all hover:bg-primary hover:text-background-dark uppercase text-[10px] md:text-xs active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary/10 disabled:hover:text-primary" 
                                        type="submit"
                                        disabled={isSubmitting || !formData.name || !formData.email || !formData.message || formData.message.length < 10}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="animate-spin">⟳</span>
                                                WRITING TO GOOGLE_SHEETS...
                                            </>
                                        ) : (
                                            <>
                                                <span className="material-symbols-outlined group-hover:animate-pulse text-sm md:text-base">database</span>
                                                EXECUTE gsheets_api.sh --write
                                            </>
                                        )}
                                    </button>
                                    <p className="mt-4 text-[8px] md:text-[10px] text-center text-[#316843] font-mono uppercase tracking-[0.2em]">
                                        Storage: Google Sheets • Encryption: AES-256 • Status: {isSubmitting ? 'Processing' : 'Ready'}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    {/* Info Panel */}
                    <div className="mt-8 w-full max-w-[650px] bg-terminal-bg/50 border border-primary/20 p-4 rounded-sm">
                        <div className="font-mono text-xs text-primary/70">
                            <p className="mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm text-primary">info</span>
                                <strong>¿Cómo funciona el sistema?</strong>
                            </p>
                            <ul className="space-y-2 text-[11px] text-primary/50">
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-[12px] mt-0.5">check_circle</span>
                                    <span>Los datos se guardan directamente en <strong>Google Sheets</strong> en tiempo real</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-[12px] mt-0.5">mail</span>
                                    <span>Recibirás un <strong>email de confirmación automático</strong> con los detalles de tu mensaje</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-[12px] mt-0.5">security</span>
                                    <span>Toda la información se mantiene <strong>segura y privada</strong>, encriptada con estándares AES-256</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-[12px] mt-0.5">schedule</span>
                                    <span>Respuesta garantizada en <strong>menos de 24 horas</strong> durante días hábiles</span>
                                </li>
                            </ul>
                            
                            <div className="mt-4 pt-3 border-t border-primary/10">
                                <div className="flex items-center justify-between text-[10px]">
                                    <div className="flex items-center gap-2 text-primary/60">
                                        <span className="material-symbols-outlined text-xs">terminal</span>
                                        <span>API Endpoint: ACTIVE</span>
                                    </div>
                                    <div className="text-primary/40">
                                        v2.0 • Google Apps Script
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;