'use client'

import { FaUserLarge, FaPencil } from "react-icons/fa6"
import { IoSave } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useState } from "react";

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
        phone: 671717731,
        genero: "Femenino",
        nacimiento: "22/07/1992",
        idioma: "Español",
        moneda: "€ EUR"
    }

    const [click, setClick] = useState(false);

    return (

        <>
            <div className="flex">
                {/* Informacion seleccionada del usuario en el panel */}
                <div className="w-full m-2">

                    {/* Informacion personal para separar en otro archivo */}
                    {/* Datos actuales */}
                    <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4">
                        <div className="flex flex-col">
                            <div className="flex">
                                <FaUser className="size-12 m-2" />
                                <div className="p-2 px-6 w-2/3">
                                    <p className="text-lg">Información personal</p>
                                    <p className="text-sm">Actualiza tus datos personales.</p>
                                </div>
                                <div className="flex justify-end items-center w-full mr-4">
                                    <button
                                        onClick={() => setClick(true)}
                                        type="submit"
                                        className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300">
                                        <FaPencil /> Editar Perfil
                                    </button>
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
                                    <p className="font-semibold"><span className="font-light">Género: </span>{dataUser.genero}</p>
                                    <p className="font-semibold"><span className="font-light">Fecha de nacimiento: </span>{dataUser.nacimiento}</p>
                                    <p className="font-semibold"><span className="font-light">Idioma: </span>{dataUser.idioma}</p>
                                    <p className="font-semibold"><span className="font-light">Moneda: </span>{dataUser.moneda}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* formulario de edición de informacion personal */}
                    {click === true && (
                        <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4 mt-4">
                            <form action="">
                                <form action="" className="flex flex-col">
                                    <label>Nombre Completo<span className="text-[#C9A84C]"> *</span></label>
                                    <input type="text" placeholder="Nombre Completo" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                    <label>Correo electrónico<span className="text-[#C9A84C]"> *</span></label>
                                    <input type="email" placeholder="Correo electrónico" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                    <label htmlFor="telefono">Teléfono<span className="text-[#C9A84C]"> *</span></label>
                                    <input type="tel" placeholder="Teléfono" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                </form>
                                <div className="flex justify-end items-center w-full mt-4 py-2 gap-2">
                                    <button
                                        type="submit"
                                        className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300">
                                        <IoSave />Guardar cambios
                                    </button>
                                    <button
                                        onClick={() => setClick(false)}
                                        type="submit"
                                        className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300">
                                        <MdCancel />Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
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



