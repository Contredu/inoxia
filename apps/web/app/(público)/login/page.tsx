import { FaApple } from "react-icons/fa";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

// FALTA: 
// -INTERACTIVIDAD EN LOS BOTONES Y CAMPOS
// -MANEJAR ERRORES EN LOS CAMPOS
// -VALIDACION DE CAMPOS
// -INTENTO DE LOGIN FUNCIONAL
// -LOGOUT FUNCIONAL

export default function AuthLogin() {
    return (
        <>
            <div className="flex">
                <div className="bg-black flex items-center flex-col gap-5 w-1/2 md:w-1/2 lg:w-1/2 h-full px-20 mask-r-from-90%">
                    <button className="w-full flex justify-start items-center gap-2 my-4 text-sm text-[#C9A84C] font-semibold font-sans"><FaArrowLeft /> Volver a la tienda</button>
                    <p className="w-full flex justify-start text-xs">TU ESTILO, TU CUENTA</p>
                    <p className="text-5xl w-full text-start text-[#C9A84C] font-sant font-semibold">INICIO DE SESIÓN</p>
                    <p className="w-full mb-8">Accede a tu cuenta y disfruta de una experiencia mas rápida y personalizada.</p>
                    <button className="flex justify-center items-center gap-2 w-full rounded-lg border-2 border-[#A09070] px-5 py-2 hover:scale-110 duration-400 hover:text-black hover:bg-[#C9A84C] hover:border-none ">
                        <FcGoogle /> Iniciar sesión con Google
                    </button>
                    <button className="flex justify-center items-center gap-2 w-full rounded-lg border-2 border-[#A09070] px-5 py-2 hover:scale-110 duration-400 hover:text-black hover:bg-[#C9A84C] hover:border-none">
                        <FaApple className="size-5" />Iniciar sesión con Apple
                    </button>
                    <hr className="w-full border-[#C9A84C]/50 my-4" />

                    <div className="flex flex-col justify-center items-center w-full gap-2">
                        <label className="w-full my-2">Correo electrónico<span className="text-[#C9A84C]">*</span></label>
                        <input type="email" placeholder="tu@email.com" required className="border-2 border-[#A09070] p-2 rounded-lg w-full" />
                        <label className="w-full my-2">Contraseña<span className="text-[#C9A84C]">*</span></label>
                        <input type="password" placeholder="*****************" required className="border-2 border-[#A09070] p-2 rounded-lg w-full" />
                        <div className="flex justify-start items-center gap-2 w-full">
                            <input type="checkbox" required className="size-4" />
                            <p className="w-1/2">Recordar mi sesión</p>
                            <a href="#" className="w-1/2 text-end text-xs text-[#C9A84C]/70 underline hover:text-[#C9A84C] transition-colors">¿Has olvidado tu contraseña?</a>
                        </div>
                    </div>
                    <button className="w-full flex justify-center items-center gap-2 bg-[#C9A84C]/90 text-black rounded-lg px-5 py-2 hover:bg-[#C9A84C] hover:scale-105 duration-400 cursor-pointer">Iniciar sesión <FaArrowRightLong /></button>
                    <p className="text-white mb-40">¿No tienes una cuenta? <a href="#" className="underline text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">Registrate</a></p>
                </div>
                <div className="w-1/2">
                    <img src="../header_ariana.webp" alt="" className="h-full w-full object-cover object-[70%_50%] mask-l-from-95%" />
                </div>
            </div>
        </>
    )
}