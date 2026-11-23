import { FaEuroSign } from "react-icons/fa";

export default function PreferencesPage() {
    const handleSubmit = () => {
        
        // Lógica de guardado
    };

    return (
        <section className="w-full mx-auto my-2 p-6 border-2 border-[#C9A84C]/70 rounded-xl shadow-sm">
            {/* 1. Encabezado semántico del bloque */}
            <header className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-[#C9A84C]">
                    Preferencias y Configuración Adicional
                </h1>
                <p className="text-sm mt-1">
                    Personaliza tu experiencia. Todos estos campos son opcionales.
                </p>
            </header>

            {/* 2. Contenedor de formulario */}
            <form className="space-y-6">

                {/* GRUPO 1: Datos Personales Opcionales */}
                <fieldset className="border border-[#C9A84C]/70 p-4 rounded-lg space-y-4">
                    <legend className="px-2 text-sm font-semibold text-[#C9A84C]">
                        Información Personal
                    </legend>

                    {/* Fecha de nacimiento */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="birthday" className="text-sm font-medium">
                            Fecha de nacimiento <span className="text-xs text-gray-400">(Opcional)</span>
                        </label>
                        <input
                            type="date"
                            id="birthday"
                            name="birthday"
                            aria-describedby="birthday-help"
                            className="border border-[#C9A84C]/70 rounded-md p-2 focus:border-[#C9A84C] outline-none text-white/60"
                        />
                        <small id="birthday-help" className="text-xs text-white/60">
                            Útil para recibir sorpresas y descuentos especiales en tu cumpleaños.
                        </small>
                    </div>

                    {/* Género */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="gender" className="text-sm font-medium">
                            Género <span className="text-xs text-gray-400">(Opcional)</span>
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            defaultValue=""
                            className="border border-[#C9A84C]/70 rounded-md p-2 focus:border-[#C9A84C] outline-none text-white/60"
                        >
                            <option className="bg-black text-[#C9A84C]" value="" disabled>Selecciona una opción</option>
                            <option className="bg-black text-[#C9A84C]" value="female">Femenino</option>
                            <option className="bg-black text-[#C9A84C]" value="male">Masculino</option>
                            <option className="bg-black text-[#C9A84C]" value="non-binary">No binario</option>
                            <option className="bg-black text-[#C9A84C]" value="prefer-not-to-say">Prefiero no especificar</option>
                        </select>
                    </div>
                </fieldset>

                {/* GRUPO 2: Idioma y Moneda */}
                <fieldset className="border border-[#C9A84C]/70 p-4 rounded-lg space-y-4">
                    <legend className="px-2 text-sm font-semibold text-[#C9A84C]">
                        Región y Moneda
                    </legend>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Idioma */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="language" className="text-sm font-medium">
                                Idioma preferido
                            </label>
                            <select
                                id="language"
                                name="language"
                                defaultValue="es"
                                className="border border-[#C9A84C]/70 rounded-md p-2 focus:border-[#C9A84C] outline-none"
                            >
                                <option className="bg-black text-[#C9A84C]" value="es">Español</option>
                            </select>
                        </div>

                        {/* Moneda */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="currency" className="flex items-center gap-1 text-sm font-medium">
                                <FaEuroSign aria-hidden="true" /> Moneda
                            </label>
                            <select
                                id="currency"
                                name="currency"
                                defaultValue="EUR"
                                className="border border-[#C9A84C]/70 rounded-md p-2 focus:border-[#C9A84C] outline-none"
                            >
                                <option className="bg-black text-[#C9A84C]" value="EUR">EUR (€)</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* GRUPO 3: Comunicaciones y Notificaciones */}
                <fieldset className="border border-[#C9A84C]/70 p-4 rounded-lg space-y-3">
                    <legend className="px-2 text-sm font-semibold text-[#C9A84C]">
                        Comunicaciones y Avisos
                    </legend>

                    {/* Newsletter */}
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            id="newsletter"
                            name="newsletter"
                            className="mt-1 h-4 w-4 accent-[#C9A84C] rounded border-[#C9A84C]/70 focus:ring-[#C9A84C]"
                        />
                        <label htmlFor="newsletter" className="text-sm cursor-pointer">
                            <span className="font-medium block">Boletín informativo y ofertas</span>
                            <span className="text-xs text-white/60">Recibe novedades, descuentos y promociones exclusivas.</span>
                        </label>
                    </div>

                    {/* Notificaciones de pedidos */}
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            id="notifications"
                            name="notifications"
                            className="mt-1 h-4 w-4 accent-[#C9A84C] rounded border-gray-300 focus:ring-[#C9A84C]"
                        />
                        <label htmlFor="notifications" className="text-sm cursor-pointer">
                            <span className="font-medium block">Alertas de pedidos</span>
                            <span className="text-xs text-white/60">Notificaciones sobre el estado de tus compras por WhatsApp, SMS o correo.</span>
                        </label>
                    </div>
                </fieldset>

                {/* 3. Botón de guardado explícito */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-[#C9A84C] hover:bg-[#b0923f] text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    >
                        Guardar cambios
                    </button>
                </div>
            </form>
        </section>
    );
}