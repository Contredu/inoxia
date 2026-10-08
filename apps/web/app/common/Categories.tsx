import { CategoriesData } from "../data/CategoriesData";

export const Categories = () => {
    return (
        <>
            <div className="mx-6 my-16">
                <p className="text-md font-bold text-[#C9A84C]">CATEGORÍAS</p>
                <p className="text-3xl font-serif">Descubre tu estilo</p>
                <p className="text-[#A09070]">Acero inoxidable de calidad superior. Diseños que duran</p>
            </div>
            <div className="flex gap-6 mx-4 overflow-x-scroll scrollbar-hide snap-x snap-mandatory scrollbar-thumb-[#C9A84C]/20">
                {CategoriesData.length === 0 ? (
                    <p>No hay categorias disponibles</p>
                ) : (
                    CategoriesData.map((category) => (
                        <a href="#" key={category.id} className="shrink-0 w-80 min-w-80 h-auto my-4 mx-2 border-2 border-[rgba(201,168,76,0.18)] rounded-sm hover:border-[rgba(201,168,76,0.45)] transition-all duration-500 hover:scale-105">
                            <img src={category.img} alt={category.alt} className="w-full h-80 object-cover" />
                            <div className="text-white font-lg p-2">
                                <p className="font-bold text-xl">{category.name}</p>
                                <p className="text-xs text-[#C9A84C]">{category.stock} Productos</p>
                            </div>
                        </a>
                    ))

                )}

            </div>
        </>
    )
};