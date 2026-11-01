import { FaTrashAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";

// FALTA:
// -INTERACTIVIDAD CON EL CARRITO
// -INTERACTIVIDAD CON LOS FORMULARIOS


export default function CheckoutPage() {
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
            <div className="bg-[url('/forgot.webp')] h-72 bg-cover bg-position-[0%_10%] px-20 py-16">
                <a href="/" className="w-full flex justify-start items-center gap-2 my-4 text-sm text-[#C9A84C] font-semibold font-sans"><FaArrowLeft /> Volver a la tienda</a>
                <p className="text-4xl font-sant text-[#C9A84C]">Finalizar Compra</p>
                <p>Completa tus datos y elige tu método de pago.</p>
            </div>

            <div className="flex">
                {/* Relleno de indormación del cliente */}
                <div className="w-2/3 h-full my-10 mr-20 px-10">
                    {/* Formulario de Informacion Personal */}
                    <p className="font-semibold text-xl text-[#C9A84C] mt-4 mb-2">INFORMACIÓN PERSONAL</p>
                    <form action="" className="flex flex-col">
                        <label>Nombre Completo<span className="text-[#C9A84C]"> *</span></label>
                        <input type="text" placeholder="Nombre Completo" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                        <label>Correo electrónico<span className="text-[#C9A84C]"> *</span></label>
                        <input type="email" placeholder="Correo electrónico" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                        <label htmlFor="telefono">Teléfono<span className="text-[#C9A84C]"> *</span></label>
                        <input type="tel" placeholder="Teléfono" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                    </form>

                    {/* Formulario de Direccion de envio */}
                    <p className="font-semibold text-xl text-[#C9A84C] mt-6 mb-2">DIRECCIÓN DE ENVÍO</p>
                    <form action="" className="flex flex-col">
                        <label htmlFor="">Dirección<span className="text-[#C9A84C]"> *</span></label>
                        <input type="text" placeholder="Dirección" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                        <label htmlFor="">Ciudad<span className="text-[#C9A84C]"> *</span></label>
                        <input type="text" placeholder="Ciudad" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                        <label htmlFor="">Código Postal<span className="text-[#C9A84C]"> *</span></label>
                        <input type="text" placeholder="Código Postal" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                        <label htmlFor="">país<span className="text-[#C9A84C]"> *</span></label>
                        <select required className="border-2 border-[#C9A84C] p-2 my-2 rounded-lg" >
                            <optgroup label="Europa" className="bg-black text-[#C9A84C]">
                                <option value="España" className="bg-black text-[#C9A84C]" selected={true}>España</option>
                                <option value="Portugal" className="bg-black text-[#C9A84C]">Portugal</option>
                                <option value="Francia" className="bg-black text-[#C9A84C]">Francia</option>
                                <option value="Italia" className="bg-black text-[#C9A84C]">Italia</option>
                                <option value="Alemania" className="bg-black text-[#C9A84C]">Alemania</option>
                                <option value="Reino Unido" className="bg-black text-[#C9A84C]">Reino Unido</option>
                            </optgroup>
                            <optgroup label="America" className="bg-black text-[#C9A84C]">
                                <option value="Col" className="bg-black text-[#C9A84C]">Colombia</option>
                                <option value="Per" className="bg-black text-[#C9A84C]">Peru</option>
                            </optgroup>
                        </select>
                    </form>
                    <div className="flex justify-start items-center gap-2 w-full my-4">
                        <input type="checkbox" required className="size-4 accent-[#C9A84C]" />
                        <p className="w-full text-sm">Quiero recibir novedades y promociones exclusivas por correo.</p>
                    </div>
                    <button className="flex justify-center items-center w-full h-full py-4 my-4 gap-2 bg-[#C9A84C]/90 text-black hover:bg-[#C9A84C] hover:scale-105 duration-400 cursor-pointer ">Continuar con el envío <FaArrowRightLong /></button>

                </div>

                {/* Informacion de la compra */}
                <div className="border border-[#C9A84C] rounded-lg w-1/3 h-full mt-15 px-10 mx-20 mb-10">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold text-xl text-[#C9A84C] mt-4 mb-2">TU PEDIDO</p>
                        <p>1 producto</p>
                    </div>
                    <hr className="border-[#C9A84C]/50" />

                    <div className="flex flex-col">
                        {cart.map((item) => (
                            <div key={item.id} className="flex gap-6 my-4">
                                <img src="../pendiente_exhibicion.webp" alt="" className="size-25 border border-[#C9A84C] object-cover object-[70%_50%]" />
                                <div className="flex flex-col gap-2">
                                    <p>{item.name}</p>
                                    <p>€{item.price}</p>
                                    <p className="text-white/50">cantidad: {item.quantity}</p>
                                </div>
                                <button type="submit" className="flex w-1/3 justify-end items-start hover:text-red-600 transition-colors duration-300"><FaTrashAlt /></button>
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
            </div>
        </>
    )
}   