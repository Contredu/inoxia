import { FaArrowRightLong, FaTruck } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";



export default function Landing() {
    return (
        <>
            {/* Header Público */}
            <div className="w-full h-full relative mask-b-from-50%">
                <img className="w-full h-full object-cover" src="header_4.webp" alt="Portada Inoxia" />
                <div className="absolute top-30 left-20">
                    <p className="text-[#E8C96A]/80">ACERO INOXIDABLE - BELLEZA ETERNA</p>
                    <p className="text-6xl my-3">JOYERÍA QUE <br />TE ACOMPAÑA<br />SIEMPRE</p>
                    <p className="text-[#E8C96A]">Diseños atemporales, resistentes al tiempo<br />y creados para realzar tu esencia. En Inoxia Jewerly<br />
                        encontrarás la joya perfecta para cada momento.
                    </p>
                    <button className="flex items-center gap-2 mt-4 border-2 border-[#C9A84C] bg-[#C9A84C] text-black px-4 py-2 rounded-lg hover:scale-110 transition-all duration-400 hover:bg-[#E8C96A] hover:border-[#E8C96A] hover:text-[#0D0D0D] font-semibold cursor-pointer">Descubre
                        nuestros productos <FaArrowRightLong />
                    </button>
                </div>
            </div>

            {/* Collections Publicas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mx-8 my-20">
                <div className="flex flex-col gap-3 my-auto">
                    <p className="text-sm">NUESTRAS COLECCIONES</p>
                    <p className="text-3xl">ELIGE TU<br />ESTILO</p>
                    <p className="text-xs">Cada pieza a sido Diseñada para<br />acompañarte en todos tus momentos.<br />Encuentra la joya que mejor se adapte a ti.</p>
                    <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">VER TODAS LAS COLECCIONES
                        <FaArrowRightLong />
                    </button>
                </div>

                <div className="relative group border border-[#C9A84C]/50 transition-all duration-300 hover:scale-110">
                    <img src="./collar_enfocado.webp" alt="Collar Coleccion" className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3">
                        <p className="text-left text-white text-lg">Colección</p>
                        <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">Explorar
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>


            {/* Favoritos de la temporada */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mx-8 my-20">
                <div className="flex flex-col gap-3 my-auto">
                    <p className="text-sm">MÁS VENDIDOS</p>
                    <p className="text-3xl">FAVORITOS<br />DE NUESTRA<br />COMUNIDAD</p>
                    <p className="text-xs">Las piezas que más enamoran.<br />Calidad, diseño y estilo en cada detalle.</p>
                    <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">VER TODAS LAS COLECCIONES
                        <FaArrowRightLong />
                    </button>
                </div>

                <div className="relative group border border-[#C9A84C]/50 transition-all duration-300 hover:scale-110">
                    <img src="./pendiente_exhibicion.webp" alt="Collar Coleccion" className="w-full h-[70%] object-cover" />
                    <div className="absolute bottom-3 left-3">
                        <p className="text-left text-white text-lg">Pendiente Largo</p>
                        <p className="text-left text-white text-lg font-serif">12.99 €</p>
                        <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">Comprar
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>


            {/* Porque elegir inoxia */}
            <div className="mask-y-from-90% my-20">
                <div className="relative">
                    <img src="./header_2.webp" alt="" className="w-full h-[50%] object-cover object-[20%_15%]" />
                    <div className="absolute top-56 right-10">
                        <p className="text-sm text-[#C9A84C]">POR QUÉ ELEGIR INOXIA</p>
                        <p className="text-3xl">MÁS QUE JOYAS,<br />ES CONFIANZA</p>
                        <p className="text-xs text-[#C9A84C]">El acero inoxidable es resistente, duradero e hipoalergénico<br />y mantiene su brillo por mucho mas tiempo.<br />Además te ofrecemos un servicio seguro y cercano.</p>
                    </div>

                    <div className="absolute top-20 left-30">
                        <div className="flex flex-col justify-start items-center gap-10">
                            <div className="border-r-4 pr-3 border-r-[#C9A84C]/18 w-40">
                                <p className="text-md">ACERO INOXIDABLE<br />DE ALTA CALIDAD</p>
                                <p className="text-xs"> <br />Resistente, duradero y<br />siempre brillante.</p>
                            </div>
                            <div className="border-r-4 pr-3 border-r-[#C9A84C]/18 w-40 hover:scale-110 transition-all duration-300">
                                <FaTruck className="text-4xl text-[#C9A84C]" />
                                <p className="text-md">ENVÍOS SEGUROS</p>
                                <p className="text-xs">Tu joya en buenas manos.</p>
                            </div>
                            <div className="border-r-4 pr-3 border-r-[#C9A84C]/18 w-40 hover:scale-110 transition-all duration-300">
                                <GoArrowSwitch className="text-4xl text-[#C9A84C]" />
                                <p className="text-md">DEVOLUCIONES</p>
                                <p className="text-xs">Fáciles y sin complicaciones.</p>
                            </div>
                            <div className="border-r-4 pr-3 border-r-[#C9A84C]/18 w-40 hover:scale-110 transition-all duration-300">
                                <FaPersonCircleExclamation className="text-4xl text-[#C9A84C]" />
                                <p className="text-md">ATENCIÓN PERSONALIZADA</p>
                                <p className="text-xs">Estamos aquí para tí.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-8 my-20">
                <div className="flex flex-col gap-3 my-auto">
                    <p className="text-sm">LO QUE DICEN DE NOSOTROS</p>
                    <p className="text-3xl">BELLEZA REAL,<br />PERSONAS REALES.</p>
                    <p className="text-xs">Historias de quienes ya forman parte de<br /><span className="text-[#C9A84C]">Inoxia Jewerly.</span></p>
                </div>

                <div className="border-2 border-[#C9A84C]/50 p-3">
                    <div className="size-10 rounded-full my-2">
                        <IoPersonCircle className="w-full h-full" />
                    </div>
                    <p className="line-clamp-2 text-xs ">Inoxia es simplemente amazing. La calidad de las joyas es incredible, no se oxida y es súper cómoda de llevar todos los días. Además, el diseño es súper moderno y elegante. ¡Totalmente recomendada!</p>
                    <p className="text-xs my-2">María P.<br />⭐⭐⭐⭐⭐</p>
                    <p className="text-xs">Hace 2 días</p>
                </div>
            </div>

            {/* Registro */}
            <div className="border-y-2 border-[#C9A84C]/50 h-70 w-full my-4 flex justify-between items-center">
                <div className="w-full h-full bg-[#C9A84C] mask-r-from-90% inset-0">
                    <img src="./header_ariana.webp" alt="imagen registro" className="w-full h-full object-cover object-[20%_30%]" />
                </div>
                <div className="flex-col gap-2 mx-30">
                    <p className="text-sm my-2">ÚNETE A INOXIA</p>
                    <p className="text-3xl my-2">SÉ LA PRIMERA EN DESCUBRIR<br />NUESTRAS NOVEDADES.</p>
                    <p className="text-xs my-1.5">Accede a lanzamientos exclusivos, promociones especiales<br />y mucho más. Solo para nuestra comunidad.</p>
                    <div className="flex my-2 xs:flex-col">
                        <input type="email" placeholder="Tu correo electrónico" className="border-2 border-[#C9A84C]/50 p-2 w-60" />
                        <button className="flex items-center justify-center gap-2 border-2 border-[#C9A84C]/50 bg-[#C9A84C] text-black p-2 w-40 hover:bg-[#E8C96A] hover:border-[#E8C96A] hover:text-white hover:transition-colors hover:duration-300 hover:cursor-pointer">Suscribirse <FaArrowRightLong /></button>
                    </div>

                </div>
            </div>
        </>
    )
}