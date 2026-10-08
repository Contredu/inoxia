import { CategoriesData } from "../data/CategoriesData";

export const Categories = () => {
    return (
        <>
            <div className="m-6">
                <p className="text-md font-bold text-[#C9A84C]">CATEGORÍAS</p>
                <p className="text-3xl font-serif">Descubre tu estilo</p>
                <p className="text-[#A09070]">Acero inoxidable de calidad superior. Diseños que duran</p>
            </div>
            <div className=" mx-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {CategoriesData.length === 0 ? (
                    <p>No hay categorias disponibles</p>
                ) : (
                    CategoriesData.map((category) => (
                        <div key={category.id} className="my-4 mx-2 border-2 border-[rgba(201,168,76,0.18)] rounded-sm hover:border-[rgba(201,168,76,0.45)] transition-all duration-500 hover:scale-105">
                            <img src={category.img} alt={category.alt} className="w-full h-80 object-cover" />
                            <div className="text-white font-lg p-2">
                                <p className="font-bold text-xl">{category.name}</p>
                                <p className="text-xs text-[#C9A84C]">{category.stock} Productos</p>
                            </div>
                        </div>
                    ))

                )}

            </div>
        </>
    )
};