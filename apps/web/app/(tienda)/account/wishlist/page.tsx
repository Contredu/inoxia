'use client'
import { FaShare, FaTruck, FaPlus } from "react-icons/fa6";
import { IoWater, IoShieldCheckmark, IoDiamondSharp, IoGift, IoPersonCircle, IoRemoveCircle } from "react-icons/io5";
import { useState } from "react"

export default function WishlistPage() {
    const itemsList = [
        {
            'name': 'Collar cola de sirena',
            'price': '12.99 €',
            'image': '../collar_enfocado.webp'
        },
    ]

    const itemData = {
        'name': 'Collar cola de sirena',
        'price': '12.99 €',
        'image': '../collar_enfocado.webp',
        'description': 'Un collar  con un diseño elegante y moderno. Perfecto para cualquier ocasión en la cual luciras única y especial.',
        'sizes': [],
        'condition': 'Mas vendido',
        'status': '',
        'rating': 4.5,
        'colors': ["Dorado", "Plata"],
        'numeroReviews': 145,
        'reviewBody': ["Lo volvere a comprar", "me encanta comprar en esta tienda", "Todos los productos son geniales", "Producto de gran calidad"]
    }
    
    const [busqueda, setBusqueda] = useState("")

    return (
        <>
            <div className="border-2 border-[#C9A84C]/70 rounded-lg p-4 my-2">
                <h1 className="font-semibold text-[#C9A84C] text-3xl my-4">Tus favoritos</h1>
                <p className="mb-4">Aquí verás todos tus productos favoritos.</p>

                {/* Barra de búsqueda de producto */}
                <div className="relative max-w-md">
                    <input
                        type="text"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        placeholder="Buscar por nombre del producto"
                        className="w-full px-4 py-2 pr-10 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                    {busqueda && (
                        <button
                            type="button"
                            onClick={() => setBusqueda("")}
                            aria-label="Limpiar búsqueda"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C9A84C] hover:text-white font-bold"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            <div className="border-2 border-[#C9A84C]/70 rounded-lg p-4 my-2">
                <div className="flex justify-between mx-2 items-center">

                    <img src={itemData['image']} alt="" className="object-cover size-50 rounded-lg hover:zoom-150 " />


                    <div className="flex flex-col px-5">

                        {/* Condition */}
                        {itemData['condition'] !== '' ? <p className="text-[#C9A84C]/80 text-sm">{itemData['condition']}</p> : ''}

                        {/* Nombre del item */}
                        <p className="text-3xl font-semibold text-white mb-2">{itemData['name']}</p>
                        <p className="text-xs mb-2">{itemData['rating']}<span> ({itemData['numeroReviews']} Reseñas)</span></p>

                        {/* Precio */}
                        <p className="text-2xl font-semibold text-[#C9A84C] mb-6">{itemData['price']} <span className="text-xs text-[#C9A84C]/30">IVA incluido</span></p>

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
                    </div>

                    {/* Botones de agregar al carrito compartir y eliminar de lista de deseos */}
                    <div className="flex flex-col justify-center gap-4">
                        {/* Botón de agregar al carrito */}
                        <button type="button" className="flex justify-center items-center gap-2 mt-4 border-2 border-[#C9A84C] bg-[#C9A84C] text-white px-4 py-2 rounded-xs hover:bg-[#E8C96A] hover:border-[#E8C96A] hover:text-[#0D0D0D] transition-colors duration-300 font-semibold cursor-pointer">
                            Agregar al carrito<FaPlus />
                        </button>
                        <button type="button" className="flex justify-center items-center gap-2 mt-4 border-2 border-[#C9A84C] bg-[#C9A84C] text-white px-4 py-2 rounded-xs hover:bg-[#E8C96A] hover:border-[#E8C96A] hover:text-[#0D0D0D] transition-colors duration-300 font-semibold cursor-pointer">
                            Compartir<FaShare />
                        </button>
                        <button type="button" className="flex justify-center items-center gap-2 mt-4 border-2 border-[#C9A84C] bg-[#C9A84C] text-white px-4 py-2 rounded-xs hover:bg-[#E8C96A] hover:border-[#E8C96A] hover:text-[#0D0D0D] transition-colors duration-300 font-semibold cursor-pointer">
                            Eliminar<IoRemoveCircle />
                        </button>
                        <p className="flex items-center gap-2 text-xs mt-5 text-left"><FaTruck />Envio en 24/48h | Devoluciones en 14 días </p>

                    </div>

                </div>
            </div>
        </>
    )
}