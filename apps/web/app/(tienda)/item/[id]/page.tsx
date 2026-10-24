import { FaArrowRightLong, FaTruck, FaHeart, FaDrumSteelpan } from "react-icons/fa6";
import { IoWater, IoShieldCheckmark, IoDiamondSharp, IoGift, IoPersonCircle } from "react-icons/io5";

// FALTA POR HACER EN ESTA VISTA:
// -INTERACTIVIDAD CON LA BASE DE DATOS CUANDO ESTE TERMINADA
// -CONSULTAR SI EXISTE EL ITEM, SI NO, REDIRECCIONAR A LA TIENDA
// -EN OPINIONES INSERTAR LA OPCION DE LA IMAGEN SI EL CLIENTE QUIERE ADJUNTAR UNA IMAGEN DEL PRODUCTO
// -INSERTAR MAS OPCIONES DE IMAGEN
// -FLECHAS PARA PASAR LAS IMAGENES DEL PRODUCTO ACTUAL Y DE LAS REVIEWS Y PRODIA INTERESARTE (INTERACTIVIDAD)
// -FUNCIONES DE LOS BOTONES AÑADRI A CARRITO, CANTIDADES, LISTA DE DESEOS Y CORAZON.


export default function ItemPage() {

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

    const itemsList = [
        {
            'name': 'Collar cola de sirena',
            'price': '12.99 €',
            'image': '../collar_enfocado.webp'
        },
        {
            'name': 'Collar cola de sirena',
            'price': '12.99 €',
            'image': '../collar_enfocado.webp'
        },
        {
            'name': 'Collar cola de sirena',
            'price': '12.99 €',
            'image': '../collar_enfocado.webp'
        },
        {
            'name': 'Anillo de serpiente',
            'price': '5.99 €',
            'image': '#'
        },
        {
            'name': 'Brazalete de oro',
            'price': '22.99 €',
            'image': '#'
        },
        {
            'name': 'Brazalete de oro',
            'price': '22.99 €',
            'image': '#'
        },
    ]

    return (
        <>

            {/* Item unico */}
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

            {/* Caracteristicas */}
            <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-0 gap-5 mb-10 p-5">
                <div className="flex flex-col justify-center items-center sm:border-r border-[#C9A84C]/30"><IoWater className="text-[#C9A84C]" />RESISTENTE AL AGUA
                    <p className="text-xs">Llevala contigo sin límites.</p>
                </div>
                <div className="flex flex-col justify-center items-center sm:border-r border-[#C9A84C]/30"><IoDiamondSharp className="text-[#C9A84C]" />ACERO INOXIDABLE DE ALTA CALIDAD
                    <p className="text-xs">No se oxida, no se decolora, siempre brilla.</p>
                </div>
                <div className="flex flex-col justify-center items-center sm:border-r border-[#C9A84C]/30"><IoShieldCheckmark className="text-[#C9A84C]" /> HIPOALERGÉNICO
                    <p className="text-xs">Cuida tu piel siempre.</p>
                </div>
                <div className="flex flex-col justify-center items-center"><IoGift className="text-[#C9A84C]" />ENVÍOS SEGUROS
                    <p className="text-xs">Tu joya en perfectas condiciones.</p>
                </div>
            </div>

            {/*Reviews del producto*/}
            <div className="flex flex-col gap-4 my-20">
                <div className="flex flex-col gap-3 my-auto mx-3">
                    <p className="text-xs">LO QUE DICEN NUESTRAS CLIENTAS</p>
                    <p className="text-3xl">OPINIONES REALES</p>
                </div>

                <div className="mx-2 flex flex-wrap gap-2">
                    {itemData['reviewBody'].length === 0 ? (
                        <div className="justify-center items-center w-full flex-col p-3">
                            <p className="text-center">No hay reseñas para este producto</p>
                        </div>
                    ) : (
                        itemData['reviewBody'].map((review: string, index: number) => (
                            <div key={index} className="w-80 lg:w-90 border-2 border-[#C9A84C]/50 p-3">
                                <div className="size-10 rounded-full my-2">
                                    <IoPersonCircle className="w-full h-full" />
                                </div>
                                <p className="line-clamp-2 text-xs ">{review}</p>
                                <p className="text-xs my-2">María P.<br />⭐⭐⭐⭐⭐</p>
                                <p className="text-xs">Hace 2 días</p>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/*Tambien podría interesarte*/}
            <div className="flex flex-col gap-4 my-20">
                <div className="flex flex-col gap-3 my-auto mx-3">
                    <p className="text-xs">TAMBIÉN TE PUEDE GUSTAR</p>
                </div>

                <div className="mx-2 flex flex-wrap sm:flex-nowrap gap-4">
                    {itemsList.length === 0 ? (
                        <div className="justify-center items-center w-full flex-col p-3">
                            <p className="text-center">No hay productos relacionados</p>
                        </div>
                    ) : (
                        itemsList.map((item: any, index: number) => (
                            <div key={index} className="relative group border border-[#C9A84C]/50 transition-all duration-300 hover:scale-110 size-50">
                                <img src={item['image']} alt={item['name']} className="w-full h-[70%] object-cover" />
                                <div className="absolute bottom-1 left-1">
                                    <p className="text-left text-white text-sm">{item['name']}</p>
                                    <p className="text-left text-white text-sm font-serif">{item['price']}</p>
                                    <button className="flex items-center gap-2 text-xs text-left text-[#C9A84C] hover:text-[#E8C96A] hover:transition-all hover:duration-300 hover:underline">Ir al producto
                                        <FaArrowRightLong />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}