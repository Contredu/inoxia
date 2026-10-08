import { FaInstagram, FaTiktok } from "react-icons/fa6";

export const Footer = () => {
    return (
        <>
            <footer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-black p-2 border-b-2 border-[#C9A84C]/20">
                <div className="p-6">
                    <a href="#"><img className="w-40" src="./inoxia_metalico.webp" alt="Logo inoxia" /></a>
                    <p className="text-xs">Joyería de acero inoxidable de alta calidad.</p>
                    <p className="text-xs">Diseños atemporales que brillan con fuerza.</p>
                    <p className="text-xs">y duran para siempre.</p>
                </div>
                <div>
                    <p className="text-md font-semibold text-[#C9A84C] py-6 text-sm">TIENDA</p>
                <ul className="mb-4">
                    <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Novedades</li></a>
                    <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Más vendidos</li></a>
                    <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Pendientes</li></a>
                    <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Pulseras</li></a>
                    <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Conjuntos</li></a>
                    <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Anillos</li></a>
                </ul>
            </div>
            <div>
                <p className="text-md font-semibold text-[#C9A84C] py-6 text-sm">AYUDA</p>
                <ul>
                    <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Envíos</li></a>
                    <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Devoluciones</li></a>
                    <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Cuidado de joyas</li></a>
                </ul>
            </div>
            <div>
                <p className="text-md font-semibold text-[#C9A84C] py-6 text-sm">Síguenos</p>
                <ul className="flex gap-4">
                    <li><a className="text-2xl hover:text-[#C9A84C] hover:underline" href="#"><FaTiktok /></a></li>
                    <li><a className="text-2xl hover:text-[#C9A84C] hover:underline" href="#"><FaInstagram /></a></li>
                </ul>
            </div>
        </footer>
        <div className="bg-black px-4 py-8">
            <p className="text-xs text-white">© {new Date().getFullYear()} Inoxia Jewerly. Todos los derechos reservados.</p>
        </div>
        </>
    )
};
