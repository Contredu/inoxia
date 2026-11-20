import { FaUserLarge, FaPencil } from "react-icons/fa6"
import { FaUser } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { IoSave } from "react-icons/io5";

// FALTA:
// -LÓGICA DESDE EL BACKEND PARA LA ACTUALIZACIÓN CORRECTA DE LA CONTRASEÑA CON SU SEGURIDAD
// -FUNCIONALIDAD DE LOS BOTONES DE GUARDAR Y CANCELAR ACCIÓN
// -CONEXION CON LA BASE DE DATOS

export default function SecurityPage() {
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
            {/* Informacion personal para separar en otro archivo */}
            {/* Datos actuales */}
            <div className="w-full border-2 border-[#C9A84C]/70 rounded-lg p-4 my-2">
                <div className="flex flex-col">
                    <div className="flex">
                        <FaUser className="size-12 m-2" />
                        <div className="p-2 px-6 w-2/3">
                            <p className="text-lg">Información personal</p>
                            <p className="text-sm">Actualiza tus datos personales.</p>
                        </div>
                        <div className="flex justify-end items-center w-full mr-4">
                            <button className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><FaPencil /> Editar Perfil</button>
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
            </div>

            {/* Formulario para la actualización de contraseña */}
            <div className="flex flex-col gap-3 p-4 border-2 border-[#C9A84C]/70 rounded-lg">
                <p className="font-semibold text-3xl text-[#C9A84C] my-4">Actualización de contraseña</p>
                <form action="update" className="flex flex-col gap-2">
                    <label>Contraseña actual<span className="text-[#C9A84C]"> *</span></label>
                    <input type="password" placeholder="Introduce tu contraseña actual" className="border-2 border-[#C9A84C] p-2 rounded-lg my-2"></input>
                    <label>Nueva contraseña<span className="text-[#C9A84C]"> *</span></label>
                    <input type="password" placeholder="Introduce tu nueva contraseña" className="border-2 border-[#C9A84C] p-2 rounded-lg my-2"></input>
                    <label>Repetir nueva contraseña<span className="text-[#C9A84C]"> *</span></label>
                    <input type="password" placeholder="Repite tu nueva contraseña" className="border-2 border-[#C9A84C] p-2 rounded-lg my-2"></input>
                </form>
                <div className="flex justify-end items-center w-full mt-4 py-2 gap-2">
                    <button type="submit" className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><IoSave />Actualizar Contraseña</button>
                    <button type="submit" className="flex items-center gap-2 px-2 rounded-lg bg-black border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black hover:scale-105 all-transition duration-300"><MdCancel />Cancelar</button>

                </div>
            </div>
        </>
    )
}
//   Datos de Acceso y Seguridad

// • Contraseña actual (Necesaria por seguridad para autorizar cambios críticos)
// • Nueva contraseña (Opcional)
// • Confirmar nueva contraseña