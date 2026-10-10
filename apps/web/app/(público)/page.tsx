import { FaArrowRightLong } from "react-icons/fa6";


export default function Landing() {
    return (
        <>
            {/* Header Público */}
            <div className="w-full h-full relative">
                <img className="w-full h-full object-cover" src="header_4.webp" alt="Portada Inoxia" />
                <div className="absolute top-30 left-20">
                    <p>ACERO INOXIDABLE - BELLEZA ETERNA</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 m-8">
                <div className="flex flex-col gap-3 my-auto">
                    <p className="text-sm">NUESTRAS COLLECIONES</p>
                    <p className="text-3xl">ELIGE TU<br />ESTILO</p>
                    <p className="text-xs">Cada pieza a sido Diseñada para<br />acompañarte en todos tus momentos.<br />Encuentra la joya que mejor se adapte a ti.</p>
                    <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">VER TODAS LAS COLECCIONES
                        <FaArrowRightLong />
                    </button>
                </div>

                <div className="relative group border transition-all duration-300 hover:scale-110">
                    <img src="./collar_enfocado.webp" alt="Collar Coleccion" className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3">
                        <p className="text-left text-white text-lg">Colección</p>
                        <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">Explorar
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>

                                <div className="relative group border transition-all duration-300 hover:scale-110">
                    <img src="./collar_enfocado.webp" alt="Collar Coleccion" className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3">
                        <p className="text-left text-white text-lg">Colección</p>
                        <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">Explorar
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>

                                <div className="relative group border transition-all duration-300 hover:scale-110">
                    <img src="./collar_enfocado.webp" alt="Collar Coleccion" className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3">
                        <p className="text-left text-white text-lg">Colección</p>
                        <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">Explorar
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>

                                <div className="relative group border transition-all duration-300 hover:scale-110">
                    <img src="./collar_enfocado.webp" alt="Collar Coleccion" className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3">
                        <p className="text-left text-white text-lg">Colección</p>
                        <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">Explorar
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}