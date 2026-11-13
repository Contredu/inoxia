import React from 'react'

import { FaArrowLeft, FaUserLarge, FaLocationDot, FaWallet, FaHeart } from "react-icons/fa6"
import { IoBag, IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
    const dataUser = {
        name: "Arianna Contreras",
        email: "carlos.contredu@gmail.com",
        image: "../header_2.webp",
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
    return (
        <>
            {/* encabezado de la pagina de checkout         */}
            <div className="bg-[url('/forgot.webp')] bg-cover bg-position-[50%_15%] px-20 pb-10 w-full h-50 border-b-4 border-[#C9A84C]/60 mb-5 pt-10">
                <a href="/" className="w-full flex justify-start items-center gap-2 my-4 text-sm text-[#C9A84C] font-semibold font-sans"><FaArrowLeft /> Volver a la tienda</a>
                <p className="text-4xl font-sant text-[#C9A84C]">MI CUENTA</p>
                <p>Gestiona tu perfil, direcciones y preferencias.</p>
            </div>

            {/* Panel del usuario */}
            <div className='flex'>
                <div className="flex flex-col w-1/3 border-2 border-[#C9A84C]/70 rounded-xl mt-4 ml-2 h-full">

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

                    {/* Selección de opciones del cliente */}
                    <div className="flex flex-col mt-4">
                        <ul>
                            <a href='/account'><li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black"><FaUser />Mi perfil</li></a>
                            <a href='/account/address'><li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black"><FaLocationDot />Direcciones</li></a>
                            <a href='/account/payments'><li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black"><FaWallet /> Métodos de pago</li></a>
                            <a href='/account/security'><li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black">Seguridad</li></a>
                            <a href='/account/orders'><li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black"><IoBag /> Mis pedidos</li></a>
                            <a href='/account/wishlist'><li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black"><FaHeart />Favoritos</li></a>
                            <a href='/account/preferences'><li className="flex items-center gap-4 py-2 hover:bg-[#C9A84C]/70 pl-6 hover:text-black">Otros datos</li></a>
                        </ul>

                    </div>

                    {/* boton de cerrar sesión */}
                    <div className="m-4 p-2 bg-[#C9A84C]/70 hover:text-black hover:bg-[#C9A84C]">
                        <button className="flex w-full items-center justify-center gap-2" type="submit">Cerrar sesión<IoLogOut /></button>

                    </div>
                </div>

                <main className="w-full m-2">{children}</main>
            </div>
        </>
    );
}