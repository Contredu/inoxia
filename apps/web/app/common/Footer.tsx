import { FaCcPaypal, FaCcStripe, FaInstagram, FaTiktok } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex } from "react-icons/fa";


export const Footer = () => {
    return (
        <>
            <footer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 bg-black p-2 border-b-2 border-[#C9A84C]/20" id="Footer">
                <div className="p-6">
                    <a href="#"><img className="w-40" src="./inoxia_metalico.webp" alt="Logo inoxia" /></a>
                    <p className="text-xs text-[#A09070]">Joyería de acero inoxidable de alta calidad.</p>
                    <p className="text-xs text-[#A09070]">Diseños atemporales que brillan con fuerza.</p>
                    <p className="text-xs text-[#A09070]">y duran para siempre.</p>
                </div>
                <div>
                    <p className="text-md font-semibold text-[#C9A84C] py-6 text-sm">TIENDA</p>
                    <ul className="mb-4">
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Novedades</li></a>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Más vendidos</li></a>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Pendientes</li></a>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Pulseras</li></a>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Conjuntos</li></a>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Tobilleras</li></a>
                    </ul>
                </div>
                <div>
                    <p className="text-md font-semibold text-[#C9A84C] py-6 text-sm">AYUDA</p>
                    <ul>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Envíos</li></a>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Devoluciones</li></a>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Cuidado de joyas</li></a>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Contacta con nosotros (aqui te llevara a un formulario)</li></a> 
                    </ul>
                </div>
                <div>
                    <p className="text-md font-semibold text-[#C9A84C] py-6 text-sm">POLÍTICAS</p>
                    <ul>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Términos legales</li></a>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Política de privacidad</li></a>
                        <a href="#"><li className="text-sm hover:text-[#C9A84C] hover:underline">Política de cookies</li></a>
                    </ul>
                </div>
                <div>
                    <p className="text-md font-semibold text-[#C9A84C] py-6 text-sm">Síguenos</p>
                    <ul className="flex gap-4">
                        <li><a className="text-2xl hover:text-[#C9A84C] hover:underline" href="https://www.tiktok.com/@inoxia_jewerly" target="_blank"><FaTiktok /></a></li>
                        <li><a className="text-2xl hover:text-[#C9A84C] hover:underline" href="https://www.instagram.com/inoxia_jewerly/" target="_blank"><FaInstagram /></a></li>
                    </ul>
                </div>
            </footer>
            <div className="bg-black p-6 flex justify-between items-center">
                <p className="text-xs text-[#C9A84C]/70">© {new Date().getFullYear()} Inoxia Jewerly. Todos los derechos reservados.</p>
                <div className="flex justify-end items-center gap-5">
                    <p className="size-8"><FaCcVisa className="text-[#C9A84C]/70 size-8" /></p>
                    <p className="size-8"><FaCcMastercard className="text-[#C9A84C]/70 size-8" /></p>
                    <p className="size-8"><FaCcPaypal className="text-[#C9A84C]/70 size-8" /></p>
                    <p className="size-8"><FaCcAmex className="text-[#C9A84C]/70 size-8" /></p>
                    <p className="size-8"><FaCcStripe className="text-[#C9A84C]/70 size-8" /></p>
                </div>
            </div>
        </>
    )
};
