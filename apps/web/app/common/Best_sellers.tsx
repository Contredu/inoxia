import { ItemsData } from "../data/ItemsData";

export const Best_sellers = () => {
    return (
        <>
            <div className="my-6 mx-2">
                <p className="text-md font-bold text-[#C9A84C]">SELECCIÓN DE TEMPORADA</p>
                <p className="text-3xl font-serif">Más vendidos</p>
                <ul className="flex justify-start items-center gap-4 w-full mt-2">
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3"><li>Todos</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3"><li>Anillos</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3"><li>Collares</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3"><li>Pendientes</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3"><li>Pulseras</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3"><li>Novedades</li></a>
                    <a href="#" className="border-2 border-[rgba(201,168,76,0.18)] rounded-4xl px-3"><li>Ofertas</li></a>

                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {ItemsData.length === 0 ? (
                    <p>No hay categorias disponibles</p>
                ) : (
                    ItemsData.map((item) => (
                        <div key={item.id} className="my-4 mx-2 border-2 border-[rgba(201,168,76,0.18)] rounded-sm hover:border-[rgba(201,168,76,0.45)] transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#C9A84C]/50">
                            <img src={item.img} alt={item.alt} className="w-full h-80 object-cover" />
                            <div className="text-white font-lg p-2">
                                <p className="text-lg">{item.category}</p>
                                <p className="font-bold text-xl">{item.name}</p>
                                <p className="text-md text-[#C9A84C] font-serif">{item.rating}⭐</p>
                                <p className="text-xs text-[#C9A84C] font-serif">{item.price}€</p>
                            </div>
                        </div>
                    ))  
                )}

            </div>
        </>
    )
};