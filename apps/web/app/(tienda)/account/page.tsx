import { FaArrowLeft, FaUserLarge, FaLocationDot, FaWallet, FaHeart, FaPencil, FaPlus } from "react-icons/fa6"
import { IoBag, IoLogOut, IoSave, IoHome, IoRemoveCircle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { map } from "zod";



export default function AccountPage() {
    const dataUser = {
        name: "Arianna Contreras",
        email: "carlos.contredu@gmail.com",
        image: "header_2.webp",
        address: [
            {
                id: 1,
                calle: "Cardenal Benlloch",
                portal: 21,
                piso: 2,
                puerta: "3",
                escalera: "",
                Localidad: "Valencia",
                poblacion: "Mislata",
                codigo_postal: "46920",
                país: "España",
                default: true,
            },
            {
                id: 2,
                calle: "Calle Priorato",
                portal: 16,
                piso: "Bajo",
                puerta: "C",
                escalera: "",
                Localidad: "Madrid",
                poblacion: "Leganes",
                codigo_postal: "28915",
                país: "España",
                default: false,
            }
        ],
        phone: 671717731
    }

    const addressDefault = dataUser.address.find(item => item.default === true)

    return (

        <>

            {/* encabezado de la pagina de checkout         */}
            <div className="bg-[url('/forgot.webp')] bg-cover bg-position-[50%_15%] px-20 pb-10 w-full h-50 border-b-4 border-[#C9A84C]/60 mb-5 pt-10">
                <a href="/" className="w-full flex justify-start items-center gap-2 my-4 text-sm text-[#C9A84C] font-semibold font-sans"><FaArrowLeft /> Volver a la tienda</a>
                <p className="text-4xl font-sant text-[#C9A84C]">MI CUENTA</p>
                <p>Gestiona tu perfil, direcciones y preferencias.</p>
            </div>

            <div className="flex">

                {/* arte izquierda Panel del usuario */}
                <div className="flex flex-col w-1/3 border-2 border-[#C9A84C]/50 rounded-xl m-2">


                    {/* Información principal */}
                    <div className="flex flex-col justify-center items-center my-2">
                        {dataUser.image === "" ? (
                            <FaUserLarge className="border-2 border-[#C9A84C] text-[#C9A84C] rounded-full size-20" />
                        ) : (
                            <img src={dataUser.image} alt={dataUser.name} className="border-2 border-[#C9A84C] rounded-full size-20 object-cover" />
                        )}
                        <p className="font-semibold">{dataUser.name}</p>
                        <p className="text-white/70 text-sm">{dataUser.email}</p>
                    </div>

                    {/* Selección de datos a cambiar */}
                    <div className="flex flex-col mt-4">
                        <ul>
                            <li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black"><FaUser />Mi perfil</li>
                            <li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black"><IoBag /> Mis pedidos</li>
                            <li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black"><FaLocationDot />Direcciones</li>
                            <li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black"><FaWallet /> Métodos de pago</li>
                            <li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black"><FaHeart />Favoritos</li>

                        </ul>

                    </div>

                    {/* boton de cerrar sesión */}
                    <div className="flex items-center justify-center gap-2 m-4 p-2 bg-[#C9A84C]/70 hover:text-black hover:bg-[#C9A84C]">
                        <button type="submit">Cerrar sesión</button>
                        <IoLogOut />
                    </div>
                </div>

                {/* Parte derecha, informacion seleccionada del usuario de la parte izq */}
                <div className="w-full m-2">

                    {/* Informacion personal para separar en otro archivo */}
                    {/* Datos actuales */}
                    {/* <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4">
                        <div className="flex flex-col">
                            <div className="flex">
                                <FaUser className="size-12 m-2" />
                                <div className="p-2 px-6 w-2/3">
                                    <p className="text-lg">Información personal</p>
                                    <p className="text-sm">Actualiza tus datos personales.</p>
                                </div>
                                <div className="flex justify-end items-center w-full mr-4">
                                    <button className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black"><FaPencil /> Editar Perfil</button>
                                </div>
                            </div>
                            <hr className="my-4 border-[#C9A84C]" />

                            <div className="flex my-2 mx-4">
                                {dataUser.image === "" ? (
                                    <FaUserLarge className="border-2 border-[#C9A84C] text-[#C9A84C] rounded-full size-30" />
                                ) : (
                                    <img src={dataUser.image} alt={dataUser.name} className="border-2 border-[#C9A84C] rounded-full size-30 object-cover" />
                                )}
                                <div className="flex flex-col gap-4 mx-4 pl-4">
                                    <p className="font-semibold"><span className="font-light">Nombre Completo:</span> {dataUser.name}</p>
                                    <p className="font-semibold"><span className="font-light">Correo Electrónico: </span>{dataUser.email}</p>
                                    <p className="font-semibold"><span className="font-light">Teléfono: </span>{dataUser.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* formulario de edición de informacion personal */}
                    {/* <div className="w-full border-2 border-[#9CA84C]/70 rounded-lg p-4 mt-4">
                        <form action="">
                            <form action="" className="flex flex-col">
                                <label>Nombre Completo<span className="text-[#C9A84C]"> *</span></label>
                                <input type="text" placeholder="Nombre Completo" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                <label>Correo electrónico<span className="text-[#C9A84C]"> *</span></label>
                                <input type="email" placeholder="Correo electrónico" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                <label htmlFor="telefono">Teléfono<span className="text-[#C9A84C]"> *</span></label>
                                <input type="tel" placeholder="Teléfono" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            </form>
                            <div className="flex justify-end items-center w-full mt-4 py-2">
                                <button type="submit" onClick={"#"} className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black"><IoSave />Guardar cambios</button>
                            </div>
                        </form>
                    </div> */}


                    {/* Informacion direcciones para separar en otro archivo */}
                    <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4">
                        <div className="flex flex-col">
                            <div className="flex">
                                <FaLocationDot className="size-12 m-2" />
                                <div className="p-2 px-6 w-2/3">
                                    <p className="text-lg">Mis direcciones</p>
                                    <p className="text-sm">Actualiza tus direcciones.</p>
                                </div>
                            </div>
                            <hr className="my-4 border-[#C9A84C]" />
                            <div className="flex m-2">
                                <IoHome className="text-[#C9A84C] size-25" />
                                <div className="flex flex-col w-full gap-3 mx-4 pl-4">
                                    <p className="font-semibold text-xl">Dirección Principal</p>
                                    <p className="font-light">{dataUser.address[0].calle} {dataUser.address[0].portal}</p>
                                    <p className="font-light">{dataUser.address[0].poblacion}, {dataUser.address[0].Localidad} {dataUser.address[0].codigo_postal}</p>
                                </div>
                                {addressDefault && (
                                    <div className="flex justify-center items-center my-8 p-4 rounded-lg bg-[#C9A84C] border-2 border-black">
                                        <p className="font-bold text-black">Predeterminada</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {dataUser.address.length === 0 ?
                        (
                            <p className="flex justify-center my-20 font-bold"> NO HAY MAS DIRECCIONES</p>

                        ) : (
                            dataUser.address.map((a) => (
                                <div key={a.id} className="flex my-4 p-6 w-full border-2 border-[#C9A84C]/70 rounded-lg">
                                    <IoHome className="text-[#C9A84C] size-25" />
                                    <div className="flex flex-col w-full gap-3 mx-4 pl-4">
                                        <p className="font-semibold text-xl">Dirección {a.id}</p>
                                        <p className="font-light">{a.calle} {a.portal} , Piso: {a.piso} Puerta: {a.puerta}</p>
                                        <p className="font-light">{a.poblacion} , {a.Localidad} {a.codigo_postal}</p>
                                    </div>
                                    <div className="flex w-full justify-end items-center gap-4">
                                        <button className="flex items-center bg-black gap-2 p-2 rounded-lg border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black"><FaPencil />editar</button>
                                        <button className="flex items-center bg-black gap-2 p-2 rounded-lg border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black"><IoRemoveCircle />eliminar</button>
                                    </div>
                                </div>
                            ))
                        )}
                    {/* boton para add mas direcciones */}
                    <div className="flex justify-center items-center my-10 p-5 border-2 border-[#C9A84C]/70 rounded-lg">
                        <button className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black"><FaPlus />Añadir dirección</button>
                    </div>
                </div>
            </div>
        </>
    )
}


// 1. Datos de Identificación y Cuenta

// • Nombre (Obligatorio)
// • Apellidos (Obligatorio)
// • Correo electrónico (Email) (Obligatorio; requiere validación y, a menudo, confirmación por seguridad si se modifica)
// • Teléfono de contacto / Móvil (Útil para avisos de entrega)

// 2. Datos de Acceso y Seguridad

// • Contraseña actual (Necesaria por seguridad para autorizar cambios críticos)
// • Nueva contraseña (Opcional)
// • Confirmar nueva contraseña

// 3. Direcciones predeterminadas (Envío y Facturación)

// • Dirección (Calle, número, piso/puerta)
// • Código Postal
// • Ciudad / Localidad
// • Provincia / Estado
// • País

// 4. Preferencias y Configuración Adicional

// • Fecha de nacimiento (Opcional; útil para promociones o descuentos de cumpleaños)
// • Género (Opcional)
// • Idioma / Moneda preferida
// • Suscripción a la Newsletter / Marketing (Casilla de verificación / Checkbox)
// • Preferencias de notificaciones (Alertas por SMS, WhatsApp o correo sobre pedidos)
