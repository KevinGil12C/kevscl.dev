import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center space-y-8">
                <div className="relative inline-block">
                    <h1 className="text-[120px] md:text-[180px] font-accent leading-none text-primary/10 select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-6xl md:text-8xl animate-pulse">warning</span>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold font-mono text-white uppercase tracking-tighter">
                        [ERROR] FILE_NOT_FOUND
                    </h2>
                    <p className="text-primary/60 font-mono text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                        El recurso solicitado no se encuentra en el servidor o ha sido movido a una partición restringida. 
                        Verifique su sintaxis o regrese al directorio raíz.
                    </p>
                </div>

                <div className="bg-primary/5 border border-primary/20 p-6 font-mono text-[10px] text-left rounded-sm relative overflow-hidden max-w-sm mx-auto">
                    <div className="text-primary/40 mb-2">stack_trace.log</div>
                    <p className="text-red-500/80">ERROR: Invalid_URL_Handled</p>
                    <p className="text-primary/60">SOURCE: Router_Internal_Middleware</p>
                    <p className="text-primary/60">ACTION: Redirecting_User_Requested</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={() => navigate('/')}
                        className="w-full sm:w-auto bg-primary text-black font-mono font-bold px-8 py-3 rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 uppercase text-[10px]"
                    >
                        <span className="material-symbols-outlined text-sm font-bold">home</span>
                        cd /root
                    </button>
                    <button 
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto border border-primary/50 text-primary font-mono font-bold px-8 py-3 rounded-sm hover:bg-primary/10 transition-all flex items-center justify-center gap-2 uppercase text-[10px]"
                    >
                        <span className="material-symbols-outlined text-sm font-bold">arrow_back</span>
                        return_to_last_state
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;