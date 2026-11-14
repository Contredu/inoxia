'use client'

import { FaWallet, FaPlus, FaPencil } from "react-icons/fa6"
import { MdOutlinePayment } from "react-icons/md";
import { IoHome, IoRemoveCircle, IoSave } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { useState } from "react";

// FALTA:
// -INTERACTIVIDAD DE LOS BOTONES (FUNCIONALIDADES)
// -CONEXION REAL CON LA BASE DE DATOS (CUANDO ESTE TERMINADA)


export default function PaymentsPage() {

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
        payment: [
            {
                id: 1,
                name: "Carlos Enrique Contreras Duque",
                numero_de_tarjeta: "4512-5412-4852-4756",
                exp: "10/33",
                cvv: 654,
                default: false
            },
            {
                id: 2,
                name: "Noelia Isabel Medina Díaz",
                numero_de_tarjeta: "9812-5412-4852-4306",
                exp: "07/30",
                cvv: 698,
                default: true
            }
        ]
    }
    const paymentDefault = dataUser.payment.find(tarj => tarj.default === true)
    const [clickEdit, setClickEdit] = useState(false);
    const [clickAdd, setClickAdd] = useState(false);


    return (
        <>
            {/* Informacion de tarjetas de pago */}
            <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4 my-2">
                <div className="flex flex-col">
                    <div className="flex">
                        <MdOutlinePayment className="size-12 m-2" />
                        <div className="p-2 px-6 w-2/3">
                            <p className="text-lg">Mis Tarjetas</p>
                            <p className="text-sm">Actualíza o gestiona tus métodos de pagos.</p>
                        </div>
                    </div>
                    <hr className="my-4 border-[#C9A84C]" />
                    {/* Tarjeta predeterminada */}
                    {paymentDefault && (
                        <div className="flex m-2">
                            <FaWallet className="text-[#C9A84C] size-25" />
                            <div className="flex flex-col w-full gap-3 mx-4 pl-4">
                                <p className="font-semibold text-xl">Método de pago predeterminado</p>
                                <p className="font-light">{paymentDefault.name}</p>
                                <p className="font-light">{paymentDefault.numero_de_tarjeta}</p> { /* Falta ocultar los primeros 12 nº */}
                                <p className="font-light">{paymentDefault.exp}</p>
                            </div>
                            {paymentDefault && (
                                <div className="flex justify-center items-center h-[5%] p-2 rounded-lg bg-[#C9A84C] border-2 border-black">
                                    <p className="font-bold text-black">Predeterminada</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Otras tarjetas */}
            {dataUser.payment.length === 0 ?
                (
                    <p className="flex justify-center my-20 font-bold"> NO HAY MÉTODOS DE PAGOS</p>

                ) : (
                    dataUser.payment.map((a) => (
                        <div key={a.id} className="flex my-4 p-6 w-full border-2 border-[#C9A84C]/70 rounded-lg">
                            <FaWallet className="text-blue-950 size-25" />
                            <div className="flex flex-col w-full gap-3 mx-4 pl-4">
                                <p className="font-bold text-xl">Tarjeta {a.id}</p>
                                <p className="font-light"><span className="font-semibold" >Nombre: </span>{a.name}</p>
                                <p className="font-light"><span className="font-semibold" >Nº de la tarjeta: </span>{a.numero_de_tarjeta}</p>
                                <p className="font-light"><span className="font-semibold" >Expiración: </span>{a.exp}</p>
                            </div>
                            <div className="flex w-full justify-end items-center gap-4">
                                <button className="flex items-center bg-black gap-2 p-2 rounded-lg border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-110 all-transition duration-300"><FaPencil />editar</button>
                                <button className="flex items-center bg-black gap-2 p-2 rounded-lg border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-110 all-transition duration-300"><IoRemoveCircle />eliminar</button>
                            </div>
                        </div>
                    ))
                )}

            {/* este se abrirá cuando el cliente desee editar una tarjeta existente */}
            {clickEdit === true && (
                <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-3xl text-[#C9A84C] my-4">Editando Tarjeta</p>
                    <form action="">
                        <form action="" className="flex flex-col">
                            <label>Nombre en la tarjeta<span className="text-[#C9A84C]"> *</span></label>
                            <input type="text" placeholder="Nombre" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            <label>Nº de la tarjeta<span className="text-[#C9A84C]"> *</span></label>
                            <input type="text" placeholder="Número de la tarjeta" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            <div className="flex justify-between items-center gap-2 my-2">
                                <label>Fecha de expiración<span className="text-[#C9A84C]"> * :</span></label>
                                <input type="text" placeholder="ej: 10/34" required className="w-[35%] border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                <label>CVV<span className="text-[#C9A84C]"> * :</span></label>
                                <input type="number" placeholder="568" required className="w-[35%] border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            </div>
                        </form>
                        <div className="flex justify-end items-center w-full mt-4 py-2 gap-2">
                            <button type="submit" className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><IoSave />Guardar cambios</button>
                            <button type="submit" className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><MdCancel />Cancelar</button>

                        </div>
                    </form>
                </div>
            )}

            {/* este se abrirá cuando el cliente desee add una tarjeta */}
            {clickAdd === true && (
                <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-3xl text-[#C9A84C] my-4">Nueva Tarjeta</p>
                    <form action="">
                        <form action="" className="flex flex-col">
                            <label>Nombre en la tarjeta<span className="text-[#C9A84C]"> *</span></label>
                            <input type="text" placeholder="Nombre" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            <label>Nº de la tarjeta<span className="text-[#C9A84C]"> *</span></label>
                            <input type="text" placeholder="Número de la tarjeta" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            <div className="flex justify-between items-center gap-2 my-2">
                                <label>Fecha de expiración<span className="text-[#C9A84C]"> * :</span></label>
                                <input type="text" placeholder="ej: 10/34" required className="w-[35%] border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                                <label>CVV<span className="text-[#C9A84C]"> * :</span></label>
                                <input type="number" placeholder="568" required className="w-[35%] border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                            </div>
                        </form>
                        <div className="flex justify-end items-center w-full mt-4 py-2 gap-2">
                            <button type="submit" className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><IoSave />Guardar nueva tarjeta</button>
                            <button type="submit" className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><MdCancel />Cancelar</button>

                        </div>
                    </form>
                </div>
            )}

            {/* boton para add mas métodos de pagos */}
            {dataUser.address.length <= 2 && (
                <div className="flex justify-center items-center my-10 p-5 border-2 border-[#C9A84C]/70 rounded-lg">
                    <button className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black  hover:scale-110 all-transition duration-300"><FaPlus />Añadir dirección</button>
                </div>
            )}

        </>
    )
}