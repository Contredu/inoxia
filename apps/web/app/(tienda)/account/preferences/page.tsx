import { FaEuroSign } from "react-icons/fa";

export default function PreferencesPage() {
    return (
        <>            <h1 className="text-center">Preferencias y Configuración Adicional</h1>
            <p></p>

            {/* • Fecha de nacimiento (Opcional; útil para promociones o descuentos de cumpleaños) */}
            <div>
                <label htmlFor="birthday">Fecha de nacimiento</label>
                <input type="date" id="birthday" name="birthday" />
            </div>

            {/* • Género (Opcional) */}
            <div>
                <label htmlFor="gender">Género</label>
                <input type="text" id="gender" name="gender" />
            </div>

            {/* • Idioma / Moneda preferida */}
            <div>
                <label htmlFor="language">Idioma</label>
                <select id="language" name="language">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>

            <div className="flex">
                <label htmlFor="currency" className="flex items-center gap-1"><FaEuroSign />Moneda</label>
                <select id="currency" name="currency">
                    <option value="EUR" selected>EUR</option>
                    <option value="USD">USD</option>
                </select>
            </div>

            {/* • Suscripción a la Newsletter / Marketing (Casilla de verificación / Checkbox) */}
            <div>
                <label htmlFor="newsletter">Suscripción a la Newsletter / Marketing</label>
                <input type="checkbox" id="newsletter" name="newsletter" />
            </div>

            {/* • Preferencias de notificaciones (Alertas por SMS, WhatsApp o correo sobre pedidos) */}
            <div>
                <label htmlFor="notifications">Preferencias de notificaciones</label>
                <input type="checkbox" id="notifications" name="notifications" />
            </div>


        </>
    )
}

// Preferencias y Configuración Adicional

// • Fecha de nacimiento (Opcional; útil para promociones o descuentos de cumpleaños)
// • Género (Opcional)
// • Idioma / Moneda preferida
// • Suscripción a la Newsletter / Marketing (Casilla de verificación / Checkbox)
// • Preferencias de notificaciones (Alertas por SMS, WhatsApp o correo sobre pedidos)