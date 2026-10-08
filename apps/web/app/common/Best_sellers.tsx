import { ItemsData } from "../data/ItemsData";
import { PiStarThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";


export const Best_sellers = () => {
    return (
        <>
            <div className="my-6 mx-6">
                <p className="text-md font-bold text-[#C9A84C]">SELECCIÓN DE TEMPORADA</p>
                <p className="text-3xl font-serif">Más vendidos</p>
                <ul className="flex justify-start items-center gap-4 w-full mt-4 text-[#C9A84C]">
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3 hover:border-[#C9A84C]/45 hover:shadow-md hover:shadow-[#C9A84C]/50"><li>Todos</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3 hover:border-[#C9A84C]/45 hover:shadow-md hover:shadow-[#C9A84C]/50"><li>Anillos</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3 hover:border-[#C9A84C]/45 hover:shadow-md hover:shadow-[#C9A84C]/50"><li>Collares</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3 hover:border-[#C9A84C]/45 hover:shadow-md hover:shadow-[#C9A84C]/50"><li>Pendientes</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3 hover:border-[#C9A84C]/45 hover:shadow-md hover:shadow-[#C9A84C]/50"><li>Pulseras</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3 hover:border-[#C9A84C]/45 hover:shadow-md hover:shadow-[#C9A84C]/50"><li>Novedades</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3 hover:border-[#C9A84C]/45 hover:shadow-md hover:shadow-[#C9A84C]/50"><li>Ofertas</li></a>

                </ul>
            </div>
            <div className="mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {ItemsData.length === 0 ? (
                    <p>No hay categorias disponibles</p>
                ) : (
                    ItemsData.map((item) => (
                        <div key={item.id} className="my-4 mx-2 border-2 border-[rgba(201,168,76,0.18)] rounded-sm hover:border-[rgba(201,168,76,0.45)] transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#C9A84C]/50">
                            <div className="relative">
                                <img src={item.img} alt={item.alt} className="w-full h-80 object-cover" />
                                <div className="absolute top-2 left-2 flex flex-col gap-2">
                                    {item.status !== '' && (
                                        <p className="bg-[#C9A84C] p-2 text-xs text-black font-semibold font-sans rounded-sm">{item.status}</p>
                                    )}
                                </div>
                                <div className="absolute top-2 right-2 p-2 flex justify-center items-center rounded-full bg-black hover:bg-red-600 transition-colors duration-300 hover:scale-110">
                                    <button className=""><FaRegHeart className="text-[#C9A84C]" /></button>
                                </div>
                            </div>
                            <div className="text-white m-2">
                                <p className="text-sm text-[#c9a84c] font-semibold font-sans">{item.category}</p>
                                <p className="font-bold text-md font-serif">{item.name}</p>
                                <p className="text-md text-[#C9A84C] font-serif flex justify-start items-center gap-1">{item.rating}<PiStarThin /></p>
                                <div className="flex justify-between my-4">
                                    <p className="text-md text-[#C9A84C] font-serif">{item.price}€</p>
                                    <button className="bg-[#C9A84C] text-black rounded-sm px-3 font-mono hover:bg-[#E8C96A] transition-colors duration-500 hover:scale-95">Añadir</button>
                                </div>

                            </div>
                        </div>
                    ))
                )}

            </div>
        </>
    )
};

// FALTA INTERACTIVIDAD Y FUNCIONALIDAD