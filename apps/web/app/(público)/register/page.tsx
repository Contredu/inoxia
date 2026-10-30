import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";


export default function newAccount() {
    return (
        <>
            <div className="flex">
                <div className="bg-black flex items-center flex-col gap-5 w-1/2 md:w-1/2 lg:w-1/2 h-full px-20 mask-r-from-90%">
                    <button className="w-full flex justify-start items-center gap-2 my-4 text-sm text-[#C9A84C] font-semibold font-sans"><FaArrowLeft /> Volver a la tienda</button>
                    <p className="w-full flex justify-start text-xs">ÚNETE A INOXIA</p>
                    <p className="text-5xl w-full text-start text-[#C9A84C] font-sant font-semibold">CREA TU CUENTA</p>
                    <p className="w-full mb-8">Disfruta de una experiencia más personalizada, accedea tus favoritos y sé la primera en conocer nuestras novedades.</p>

                    <hr className="w-full border-[#C9A84C]/50 my-4" />
                    <p className="w-full flex justify-start">Crea una cuenta con tu correo electrónico:</p>

                    <div className="flex w-full justify-around items-center gap-4">
                        <button className="flex justify-center items-center gap-2 w-full rounded-lg border-2 border-[#A09070] px-5 py-2 hover:scale-110 duration-400 hover:text-black hover:bg-[#C9A84C] hover:border-none ">
                            <FcGoogle /> Iniciar sesión con Google
                        </button>
                        <button className="flex justify-center items-center gap-2 w-full rounded-lg border-2 border-[#A09070] px-5 py-2 hover:scale-110 duration-400 hover:text-black hover:bg-[#C9A84C] hover:border-none">
                            <FaApple className="size-5" />Iniciar sesión con Apple
                        </button>
                    </div>

                    <hr className="w-full border-[#C9A84C]/50 my-4" />

                    <form action="/register" target="/" className="flex flex-col w-full gap-2">
                        <label className="my-2">Nombre completo<span>*</span></label>
                        <input type="text" placeholder="Tu nombre" required className="border-2 border-[#A09070] p-2 rounded-lg w-full" />
                        <label className="w-full my-2">Correo electrónico<span className="text-[#C9A84C]">*</span></label>
                        <input type="email" placeholder="tu@email.com" required className="border-2 border-[#A09070] p-2 rounded-lg w-full" />
                        <label className="w-full my-2">Contraseña<span className="text-[#C9A84C]">*</span></label>
                        <input type="password" placeholder="Mínimo 8 caracteres" required className="border-2 border-[#A09070] p-2 rounded-lg w-full" />
                        <label htmlFor="" className="my-2">Confirmar Contraseña<span className="text-[#C9A84C]">*</span></label>
                        <input type="password" placeholder="Repite tu contraseña" required className="border-2 border-[#A09070] p-2 rounded-lg w-full" />
                        <div className="flex justify-start items-center gap-2 w-full my-4">
                            <input type="checkbox" required className="size-4" />
                            <p className="w-full text-sm">Acepto los <a href="#" className="underline text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">terminos y condiciones</a> y la <a href="#" className="underline text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">política de privacidad</a> de INOXIA</p>
                        </div>
                    </form>
                    <button type="submit" className="w-full flex justify-center items-center gap-2 bg-[#C9A84C]/90 text-black rounded-lg px-5 py-2 hover:bg-[#C9A84C] hover:scale-105 duration-400 cursor-pointer">Registrarse<FaArrowRightLong /></button>
                    <p className="text-white mb-40">¿Ya tienes una cuenta? <a href="#" className="underline text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">Inicia sesión</a></p>
                </div>
                <div className="w-1/2">
                    <img src="../header_2.webp" alt="" className="h-full w-full object-cover object-[50%_50%] mask-l-from-95%" />
                </div>
            </div>
        </>
    )
}