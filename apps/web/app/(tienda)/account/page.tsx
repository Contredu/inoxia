import { FaArrowLeft, FaUserLarge } from "react-icons/fa6"

export default function AccountPage() {
    const dataUser = {
        name: "Carlos Contreras",
        email: "carlos.contredu@gmail.com",
        image: "",
        address: [
            {
                calle: "Cardenal Benlloch",
                portal: 21,
                piso: 2,
                puerta: "3",
                escalera: "",
                Localidad: "Valencia",
                poblacion: "Mislata",
                codigo_postal: "46920",
                país: "España"
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

            <div className="flex flex-col w-1/3 border-2 border-[#C9A84C]/50 rounded-xl m-2">


                {/* Información principal */}
                <div className="flex flex-col justify-center items-center my-2">
                    {dataUser.image === "" ? (
                        <FaUserLarge className="border-2 border-[#C9A84C] text-[#C9A84C] rounded-full size-20" />
                    ) : (
                        <img className="border-2 border-[#C9A84C] rounded-full size-20" />
                    )}
                    <p className="font-semibold">{dataUser.name}</p>
                    <p className="text-white/70 text-sm">{dataUser.email}</p>
                </div>

                {/* Selección de datos a cambiar */}
                <div className="flex flex-col">
                    <ul>
                        <li>Mi perfil</li>
                        <li>Mis pedidos</li>
                        <li>Direcciones</li>
                        <li>Métodos de pago</li>
                        <li>Favoritos</li>

                    </ul>

                </div>
            </div>

        </>
    )
}