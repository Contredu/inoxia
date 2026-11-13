import { FaLocationDot, FaPencil, FaPlus } from "react-icons/fa6"
import { IoHome, IoRemoveCircle } from "react-icons/io5";



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
            </div>         </>
    )
}

// Direcciones predeterminadas (Envío y Facturación)

// • Dirección (Calle, número, piso/puerta)
// • Código Postal
// • Ciudad / Localidad
// • Provincia / Estado
// • País