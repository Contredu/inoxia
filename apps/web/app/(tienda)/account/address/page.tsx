'use client'

import { useState } from "react";
import { FaLocationDot, FaPencil, FaPlus } from "react-icons/fa6"
import { IoHome, IoRemoveCircle, IoSave } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

// FALTA:
// -INTERACTIVIDAD DE LOS BOTONES EDITAR, ELIMINAR, AÑADIR DIRECCIÓN, GUARDAR CAMBIOS/NUEVA DIRECCIÓN Y CANCELAR
// -CONEXION CON LA BASE DE DATOS (CUANDO ESTE TERMINADA)

export default function AddressPage() {

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
    const [click, setClick] = useState(false);
    const [clickEdit, setClickEdit] = useState(false);

    return (
        <>
            {/* Informacion direcciones para separar en otro archivo */}
            <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4 my-2">
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
                            <IoHome className="text-indigo-800 size-25" />
                            <div className="flex flex-col w-full gap-3 mx-4 pl-4">
                                <p className="font-semibold text-xl">Dirección {a.id}</p>
                                <p className="font-light">{a.calle} {a.portal} , Piso: {a.piso} Puerta: {a.puerta}</p>
                                <p className="font-light">{a.poblacion} , {a.Localidad} {a.codigo_postal}</p>
                            </div>
                            <div className="flex w-full justify-end items-center gap-4">
                                <button className="flex items-center bg-black gap-2 p-2 rounded-lg border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-110 all-transition duration-300"><FaPencil />editar</button>
                                <button className="flex items-center bg-black gap-2 p-2 rounded-lg border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-110 all-transition duration-300"><IoRemoveCircle />eliminar</button>
                            </div>
                        </div>
                    ))
                )}

            {/* este se abrirá cuando quieran crear una nueva address */}
            {click === true && (
                <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-3xl text-[#C9A84C] my-4">Creando nueva dirección</p>
                    <form action="">
                        <form action="" className="flex flex-col">
                            <label>Calle ó Avenida<span className="text-[#C9A84C]"> *</span></label>
                            <input type="text" placeholder="Nombre de la calle" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            <div className="flex justify-around items-center gap-2 my-2">
                                <label>Portal<span className="text-[#C9A84C]"> * :</span></label>
                                <input type="number" placeholder="nº de Portal" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                <label>Piso<span className="text-[#C9A84C]"> * :</span></label>
                                <input type="number" placeholder="nº de piso" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                <label className="">Puerta ó escalera <span className="text-[#C9A84C]"> * :</span></label>
                                <input type="text" placeholder="puerta ó escalera" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            </div>
                            <div className="flex justify-around items-center gap-2 my-2">
                                <label>Localidad<span className="text-[#C9A84C]"> * :</span></label>
                                <input type="text" placeholder="ej: Madrid" required className="border-2 border-[#C9A84C] mr-2 p-2 rounded-lg my-2" />
                                <label>Población <span className="text-[#C9A84C]"> * :</span></label>
                                <input type="text" placeholder="ej: Alcorcón" required className="border-2 border-[#C9A84C] ml-2 p-2 rounded-lg my-2" />
                                <label>Código postal <span className="text-[#C9A84C]"> *</span></label>
                                <input type="number" placeholder="ej: 28916" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            </div>
                        </form>
                        <div className="flex justify-end items-center w-full mt-4 py-2 gap-2">
                            <button type="submit" className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><IoSave />Guardar nueva dirección</button>
                            <button type="submit" className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><MdCancel />Cancelar</button>
                        </div>
                    </form>
                </div>
            )}

            {/* este se abrirá cuando el cliente desee editar una dirección existente */}
            {clickEdit === true && (
                <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-3xl text-[#C9A84C] my-4">Editando dirección</p>
                    <form action="">
                        <form action="" className="flex flex-col">
                            <label>Calle ó Avenida<span className="text-[#C9A84C]"> *</span></label>
                            <input type="text" placeholder="Nombre de la calle" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            <div className="flex justify-around items-center gap-2 my-2">
                                <label>Portal<span className="text-[#C9A84C]"> * :</span></label>
                                <input type="number" placeholder="nº de Portal" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                <label>Piso<span className="text-[#C9A84C]"> * :</span></label>
                                <input type="number" placeholder="nº de piso" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                <label className="">Puerta ó escalera <span className="text-[#C9A84C]"> * :</span></label>
                                <input type="text" placeholder="puerta ó escalera" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            </div>
                            <div className="flex justify-around items-center gap-2 my-2">
                                <label>Localidad<span className="text-[#C9A84C]"> * :</span></label>
                                <input type="text" placeholder="ej: Madrid" required className="border-2 border-[#C9A84C] mr-2 p-2 rounded-lg my-2" />
                                <label>Población <span className="text-[#C9A84C]"> * :</span></label>
                                <input type="text" placeholder="ej: Alcorcón" required className="border-2 border-[#C9A84C] ml-2 p-2 rounded-lg my-2" />
                                <label>Código postal <span className="text-[#C9A84C]"> *</span></label>
                                <input type="number" placeholder="ej: 28916" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            </div>
                        </form>
                        <div className="flex justify-end items-center w-full mt-4 py-2 gap-2">
                            <button type="submit" className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><IoSave />Guardar cambios</button>
                            <button type="submit" className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><MdCancel />Cancelar</button>

                        </div>
                    </form>
                </div>
            )}

            {/* boton para add mas direcciones */}
            {dataUser.address.length <= 2 && (
                <div className="flex justify-center items-center my-10 p-5 border-2 border-[#C9A84C]/70 rounded-lg">
                    <button className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black  hover:scale-110 all-transition duration-300"><FaPlus />Añadir dirección</button>
                </div>
            )}
        </>
    )
}

// Direcciones predeterminadas (Envío y Facturación)

// • Dirección (Calle, número, piso/puerta)
// • Código Postal
// • Ciudad / Localidad
// • Provincia / Estado
// • País