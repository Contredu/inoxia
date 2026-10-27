import { FaArrowRightLong, FaRegHeart } from "react-icons/fa6"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";



export default function Tienda() {
    const itemsList = [
        {
            'category': 'Collares',
            'name': 'Collar cola de sirena',
            'price': '12.99 €',
            'rating': '4.5',
            'image': '../collar_enfocado.webp'
        },
        {
            'category': 'Collares',
            'name': 'Collar cola de sirena',
            'price': '12.99 €',
            'rating': '4.2',
            'image': '../collar_enfocado.webp'
        },
        {
            'category': 'Collares',
            'name': 'Collar cola de sirena',
            'price': '12.99 €',
            'rating': '4.0',
            'image': '../collar_enfocado.webp'
        },
        {
            'category': 'Anillos',
            'name': 'Anillo de serpiente',
            'price': '5.99 €',
            'rating': '4.8',
            'image': '#'
        },
        {
            'category': 'Pulseras',
            'name': 'Brazalete de oro',
            'price': '22.99 €',
            'rating': '4.6',
            'image': '#'
        },
        {
            'category': 'Pulseras',
            'name': 'Brazalete de oro',
            'price': '22.99 €',
            'rating': '4.9',
            'image': '#'
        },
    ]
    return (
        <>
            <div className="flex w-full h-full">

                {/* filtrador */}
                <div className="flex flex-col sticky right-0 px-10 border-r-2 border-[#C9A84C]/50">

                    <div className="flex flex-col items-start justify-center p-2">
                        <p className="font-semibold text-sm my-2">CATEGORIAS</p>
                        <ul className="">
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Collares</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Pendientes</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Pulseras</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Anillos</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Conjuntos</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Tobilleras</li>
                        </ul>
                    </div>
                    <hr className="border-[#C9A84C]/50" />
                    <div className="flex flex-col items-start justify-center p-2">
                        <p className="font-semibold text-sm my-2">COLOR</p>
                        <ul className="">
                            <li className="flex items-center gap-2"><button className="rounded-full bg-yellow-500 size-4"></button>Dorado</li>
                            <li className="flex items-center gap-2"><button className="rounded-full bg-gray-500 size-4"></button>Plateado</li>
                            <li className="flex items-center gap-2"><button className="rounded-full bg-black size-4"></button>Negro</li>
                            <li className="flex items-center gap-2"><button className="rounded-full bg-linear-to-b from-yellow-500 via-blue-400 to-red-500 size-4"></button>Mix</li>
                        </ul>
                    </div>
                    <hr className="border-[#C9A84C]/50" />
                    <div className="flex flex-col items-start justify-center p-2">
                        <p className="font-semibold text-sm my-2">MATERIAL</p>
                        <ul className="">
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Acero inoxidable</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Xuping</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Plata</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Oro</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Metal-cristal</li>
                        </ul>
                    </div>
                    <hr className="border-[#C9A84C]/50" />

                    {/* falta interactividad de la barra */}
                    <div className="flex flex-col items-start justify-center p-2">
                        <p className="font-semibold text-sm my-2">PRECIO</p>
                        <input type="range" id="filtroPrecio" className="control accent-[#C9A84C]" min="0" max="300" step="1" value="250" />

                        <div className="info-precio flex justify-between w-full">
                            <span id="minPrecio">0€</span>
                            <span id="maxPrecio">300€</span>
                        </div>
                    </div>
                    <button className="mx-auto my-5 bg-[#C9A84C] hover:bg-[#C9A84C]/80 transition-colors border-2 border-[#C9A84C]/40 text-black font-semibold px-4 py-2">Limpiar filtros</button>
                </div>

                {/* Lista de todos los items */}
                <div className="flex flex-col items-start w-full p-2">

                    {/* filtrado y ordenado */}
                    <div className="flex justify-between items-center w-full">
                        <p className="text-sm lg:pl-6">Mostrando 1 - 12 de 250 productos</p>
                        <div className="flex justify-end items-center text-sm lg:pr-4">
                            Ordenado por:
                            <select className="border-2 border-[#C9A84C]/50 mx-2 p-2">
                                <option className="text-white bg-[#1F1F1F]" value="" >Ascendente</option>
                                <option className="text-white bg-[#1F1F1F]" value="" selected>Descendente</option>
                                <option className="text-white bg-[#1F1F1F]" value="">Mas vendidos</option>
                                <option className="text-white bg-[#1F1F1F]" value="" >Mas recientes</option>
                                <option className="text-white bg-[#1F1F1F]" value="" >Novedades</option>
                                <option className="text-white bg-[#1F1F1F]" value="">Ofertas</option>
                                <option className="text-white bg-[#1F1F1F]" value="">Relevantes</option>
                            </select>
                        </div>
                    </div>

                    {/* Todos los items de la tienda */}
                    <div className="flex flex-wrap justify-evenly w-full gap-4 my-4 lg:my-6 lg:gap-6">
                        {itemsList.length === 0 ? (
                            <div className="justify-center items-center w-full flex-col p-3">
                                <p className="text-center">No hay productos relacionados</p>
                            </div>
                        ) : (
                            itemsList.map((item: any, index: number) => (
                                <div key={index} className="flex flex-col relative justify-between border border-[#C9A84C]/50 transition-all duration-300 hover:scale-110 size-50 lg:size-96 lg:hover:scale-105">
                                    <img src={item['image']} alt={item['name']} className="w-full h-[70%] object-cover" />
                                    <div className="absolute top-2 right-2">
                                        <button className="flex items-center justify-center gap-2 size-8 text-[#C9A84C] hover:transition-all hover:duration-300 hover:underline">
                                            <FaRegHeart className="text-[#C9A84C] hover:text-red-600 transition-colors duration-300 hover:scale-110" />
                                        </button>
                                    </div>
                                    <div className="px-2">
                                        <p className="text-[#C9A84C] text-sm font-semibold font-sans my-2.5">{item['category']}</p>
                                        <p className="text-white text-sm mt-2">{item['name']}</p>
                                        <p className="text-sm">{item['rating']} ⭐</p>
                                    </div>
                                    <div className="flex justify-between items-center p-2">
                                        <p className="text-[#C9A84C] text-md font-serif">{item['price']}</p>
                                        <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">
                                            <FaCartPlus className="size-5 mr-2 hover:scale-110 transition-colors duration-200" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Paginación */}
                    <div className="flex justify-center w-full my-4 gap-2">
                        <button className="border-2 border-[#C9A84C]/50 px-2 py-1 rounded-lg text-white hover:bg-[#C9A84C] hover:text-black transition-colors cursor-pointer">
                            <IoIosArrowBack />
                        </button>
                        <button className="border-2 border-[#C9A84C]/50 px-2 py-1 rounded-lg text-white hover:bg-[#C9A84C] hover:text-black transition-colors cursor-pointer">1</button>
                        <button className="border-2 border-[#C9A84C]/50 px-2 py-1 rounded-lg text-white hover:bg-[#C9A84C] hover:text-black transition-colors cursor-pointer">2</button>
                        <button className="border-2 border-[#C9A84C]/50 px-2 py-1 rounded-lg text-white hover:bg-[#C9A84C] hover:text-black transition-colors cursor-pointer">3</button>
                        <button className="border-2 border-[#C9A84C]/50 px-2 py-1 rounded-lg text-white hover:bg-[#C9A84C] hover:text-black transition-colors cursor-pointer">
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}