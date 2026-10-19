import { FaArrowRightLong, FaTruck, FaHeart, FaDrumSteelpan } from "react-icons/fa6";
import { IoWater, IoShieldCheckmark } from "react-icons/io5";



export default function ItemPage() {

    const itemData = {
        'name': 'Collar cola de sirena',
        'price': '12.99 €',
        'image': '../collar_enfocado.webp',
        'description': 'Un pendiente largo con un diseño elegante y moderno. Perfecto para cualquier ocasión en la cual luciras unica y especial.',
        'sizes': [],
        'condition': 'Mas vendido',
        'status': '',
        'rating': 4.5,
        'colors': ["Dorado", "Plata"],
        'numeroReviews': 145
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="size-130 m-auto border-2 border-[#C9A84C]/30">
                    <img src={itemData['image']} alt="" className="w-full h-full object-cover object-[100%_26%]" />
                </div>

                <div className="flex flex-col py-6 px-10">

                    {/* Condition */}
                    {itemData['condition'] !== '' ? <p className="text-[#C9A84C]/80 text-sm">{itemData['condition']}</p> : ''}

                    {/* Nombre del item */}
                    <p className="text-3xl font-semibold text-white mb-2">{itemData['name']}</p>
                    <p className="text-xs mb-2">{itemData['rating']}<span> ({itemData['numeroReviews']} Reseñas)</span></p>

                    {/* Precio */}
                    <p className="text-2xl font-semibold text-[#C9A84C] mb-6">{itemData['price']} <span className="text-xs text-[#C9A84C]/30">IVA incluido</span></p>

                    {/* Descripción */}
                    <p className="text-white mb-6 text-lg">{itemData['description']}</p>

                    {/* Características */}
                    <div className="flex flex-col items-start gap-2 text-sm mb-6">
                        <div className="flex items-center gap-2">
                            <FaDrumSteelpan className="text-[#C9A84C]" />
                            <p className="text-white">Acero inoxidable de alta calidad</p>
                        </div>

                        {/* Resistente al agua */}
                        <div className="flex items-center gap-2">
                            <IoWater className="text-[#C9A84C]" />
                            <p className="text-white">Resistente al agua y al sudor</p>
                        </div>

                        {/* Hipoalergenico */}
                        <div className="flex items-center gap-2">
                            <IoShieldCheckmark className="text-[#C9A84C]" />
                            <p className="text-white">Hipoalergénico</p>
                        </div>
                    </div>

                    {/* Tallas disponibles */}
                    {itemData['sizes'].length > 0 ? (
                        <div className="mb-6">
                            <h3 className="text-white font-semibold text-lg mb-3">Tallas disponibles</h3>
                            <div className="flex gap-3">
                                {itemData['sizes'].map((size: string, index: number) => (
                                    <button key={index} className="border-2 border-[#C9A84C] px-4 py-2 rounded-full text-white hover:bg-[#C9A84C] hover:text-black transition-colors cursor-pointer">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-white">Talla única</p>
                    )}
                    <hr className="border-[#C9A84C]/30 my-4" />

                    {/* Colores disponibles */}
                    <div className="flex gap-3 items-center mb-6">
                        <h3 className="text-white font-semibold text-lg mb-3">Color:</h3>
                        <div className="flex gap-3">
                            {itemData['colors'].map((color: string, index: number) => (
                                <button key={index} className="border-2 border-[#C9A84C] px-4 py-2 rounded-xs text-white hover:bg-[#C9A84C] hover:text-black transition-colors cursor-pointer">
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Botones de agregar al carrito y lista de deseos */}
                    <div className="flex gap-4">
                        {/* Botón de agregar al carrito */}
                        <button className="w-full mt-4 border-2 border-[#C9A84C] bg-[#C9A84C] text-white px-4 py-2 rounded-xs hover:bg-[#E8C96A] hover:border-[#E8C96A] hover:text-[#0D0D0D] transition-colors duration-300 font-semibold cursor-pointer">
                            Agregar al carrito
                        </button>
                        {/* FALTA EDITAR DE LISTA DE DESEOS */}
                        <button className="mt-4 border-2 border-[#C9A84C] bg-[#C9A84C] text-white px-4 py-2 rounded-xs hover:bg-[#E8C96A] hover:border-[#E8C96A] hover:text-[#0D0D0D] transition-colors duration-300 font-semibold cursor-pointer"><FaHeart /></button>
                    </div>
                    <p className="flex items-center gap-2 text-xs mt-5 text-left"><FaTruck />Envio en 24/48h | Devoluciones en 14 días </p>
                </div>

            </div>
        </>
    )
}