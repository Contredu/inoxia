import { FaArrowLeft, FaArrowRightLong, FaTruck } from "react-icons/fa6";
import { IoCheckmarkDoneCircleSharp, IoDiamondSharp, IoShieldCheckmark } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";

// FALTA:
// -INTERACTIVIDAD CON LA BASE DE DATOS
// -

export default function CheckoutSuccessPage() {

    const cart = [
        {
            id: 1,
            name: "Pendiente infinito",
            price: 32.99,
            quantity: 1,
            image: "../pendiente_exhibicion.webp"
        }
    ]
    return (
        <>

            {/* encabezado de la pagina de checkout         */}
            <div className="bg-[url('/forgot.webp')] bg-cover bg-position-[50%_10%] px-20 pb-10 w-full h-72 border-b-4 border-[#C9A84C]/60 mb-10 pt-10">
                <a href="/" className="w-full flex justify-start items-center gap-2 my-4 text-sm text-[#C9A84C] font-semibold font-sans"><FaArrowLeft /> Volver a la tienda</a>
                <p className="text-4xl font-sant text-[#C9A84C]">¡COMPRA EXITOSA!</p>
                <p>Gracias por tu compra. Tu pedido ha sido procesado correctamente.</p>
            </div>

            <div className="flex flex-col justify-center items-center w-full gap-2">
                <IoCheckmarkDoneCircleSharp className="text-[#C9A84C] text-6xl" />
                <p className="text-3xl font-semibold">¡Tu pedido se ha realizado con éxito!</p>
                <p className="text-md text-center">Hemos enviado un correo electrónico con los detalles de tu pedido<br /> y el seguimiento de tu envío.</p>
                <div className="flex flex-col justify-center items-center gap-2 border-2 border-[#C9A84C]/50 rounded-lg px-5 py-2">
                    <p className="text-sm font-semibold">Número de pedido:</p>
                    <p className="text-lg font-semibold text-[#C9A84C]">#INX-2025-1047</p>
                </div>
                <a href="/home" className="flex justify-center items-center gap-2 bg-[#C9A84C]/90 text-black rounded-lg px-5 py-2 mt-4 hover:bg-[#C9A84C] hover:scale-105 duration-400 cursor-pointer">Volver a la tienda<FaArrowRightLong /></a>
            </div>

            {/* contenedor con los detalles del pedido */}
            <div className="bg-black/25 border border-[#C9A84C] rounded-lg h-full mt-15 px-10 mx-20 mb-10">
                <div className="flex justify-between items-center p-2">
                    <p className="w-2/3 font-semibold text-xl mt-4 mb-2">Resumen de tu pedido</p>
                    <p className="text-sm">Fecha: 02/11/2026</p>
                    <p className="text-sm">Método de pago: Tarjeta</p>
                </div>
                <hr className="border-[#C9A84C]/50" />

                <div className="flex flex-col">
                    {cart.map((item) => (
                        <div key={item.id} className="flex gap-6 my-4">
                            <img src="../pendiente_exhibicion.webp" alt="" className="size-25 border border-[#C9A84C] object-cover object-[70%_50%]" />
                            <div className="flex flex-col gap-2">
                                <p>{item.name}</p>

                                <p className="text-white/50">cantidad: {item.quantity}</p>
                            </div>
                            <p className="flex w-full justify-end">€{item.price}</p>
                        </div>
                    ))}
                </div>
                <hr className="border-[#C9A84C]/50" />
                <div className="flex justify-between my-2">
                    <p>Subtotal</p>
                    <p>€32,99</p>
                </div>
                <div className="flex justify-between my-2">
                    <p>Envio</p>
                    <p>€0,00</p>
                </div>
                <hr className="border-[#C9A84C]/50" />
                <div className="flex justify-between mt-10 mb-5">
                    <p className="text-2xl font-semibold text-[#C9A84C]">Total</p>
                    <p className="text-2xl font-semibold text-[#C9A84C]">€32,99</p>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:my-4 md:py-4 border-y border-[#C9A84C]/50">
                <div className="flex flex-col justify-center items-center border-r border-[#C9A84C]/50 my-4 p-4">
                    <IoShieldCheckmark className="text-[#C9A84C] size-10" />
                    <p className="text-md font-semibold">Compra segura</p>
                    <p className="text-sm">Tus datos protegidos</p>
                </div>
                <div className="flex flex-col justify-center items-center border-r border-[#C9A84C]/50">
                    <FaTruck className="text-[#C9A84C] size-10" />
                    <p className="text-md font-semibold">Envíos en 24/48h</p>
                    <p className="text-sm">Rápidos y seguros</p>
                </div>
                <div className="flex flex-col justify-center items-center border-r border-[#C9A84C]/50">
                    <TfiHeadphoneAlt className="text-[#C9A84C] size-10" />
                    <p className="text-md font-semibold">atención personalizada</p>
                    <p className="text-sm">Siempre contigo</p>
                </div>
                <div className="flex flex-col justify-center items-center my-4">
                    <IoDiamondSharp className="text-[#C9A84C] size-10" />
                    <p className="text-md font-semibold">Calidad garantizada</p>
                    <p className="text-sm">Joyas que perduran</p>
                </div>
            </div>
        </>
    )
}