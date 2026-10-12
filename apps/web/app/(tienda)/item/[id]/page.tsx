import { FaArrowRightLong } from "react-icons/fa6";

export default function ItemPage() {

    const itemData = {
        'name': 'Pendiente Largo',
        'price': '12.99 €',
        'image': '../collar_enfocado.webp',
        'description': 'Un pendiente largo con un diseño elegante y moderno. Perfecto para cualquier ocasión.',
        'sizes': ['6', '7', '8'],
        'condition': 'Mas vendido',
        'status': '',
        'rating': 4.5,
        'colors': ["dorado", "plateado"],
        'numeroReviews': 145
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2">
                <div className="size-100 m-10 border-2 ">
                    <img src={itemData['image']} alt="" className="w-full h-full object-cover object-[100%_26%]" />
                </div>

                <div className="border-2 border-[#C9A84C]flex gap-4 p-6">
                    {/* Condition */}
                    {itemData['condition'] !== '' ? <p className="text-[#C9A84C]/80 text-sm">{itemData['condition']}</p> : ''}
                    {/* Nombre del item */}
                    <p className="text-3xl font-semibold text-white mb-2">{itemData['name']}</p>
                    <p className="text-xs mb-2">{itemData['rating']}<span> ({itemData['numeroReviews']} Reseñas)</span></p>
                    {/* Precio */}
                    <p className="text-2xl font-semibold text-[#C9A84C] mb-6">{itemData['price']}</p>

                    {/* Descripción */}
                    <p className="text-white mb-6 text-lg">{itemData['description']}</p>

                    {/* Tallas disponibles */}
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

                    {/* Colores disponibles */}
                    <div className="mb-6">
                        <h3 className="text-white font-semibold text-lg mb-3">Colores disponibles</h3>
                        <div className="flex gap-3">
                            {itemData['colors'].map((color: string, index: number) => (
                                <button key={index} className="border-2 border-[#C9A84C] px-4 py-2 rounded-full text-white hover:bg-[#C9A84C] hover:text-black transition-colors cursor-pointer">
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Botón de agregar al carrito */}
                    <button className="mt-4 border-2 border-[#C9A84C] bg-[#C9A84C] text-white px-4 py-2 rounded-full hover:bg-[#E8C96A] hover:border-[#E8C96A] hover:text-[#0D0D0D] transition-colors duration-300 font-semibold cursor-pointer">
                        Agregar al carrito
                    </button>

                </div>

            </div>
        </>
    )
}

// <div className="w-full p-4 flex flex-col justify-center">
//    