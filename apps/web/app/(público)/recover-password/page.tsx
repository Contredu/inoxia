import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

// FALTA:
// -INTERACTIVIDAD EN LOS BOTONES Y CAMPOS (ENLACES DE REGISTRO E INICIO DE SESION)
// -MANEJAR ERRORES EN LOS CAMPOS
// -VALIDACION DE CAMPOS
// -INTENTO DE LOGIN FUNCIONAL
// -LOGOUT FUNCIONAL

export default function recoverPassword() {
    return (
        <>
            <div className="bg-[url('/forgot.webp')] border-b-2 border-[#C9A84C] bg-position-[100%_15%]">
                <div className="flex flex-col px-5">
                    <a href="/" className="w-full flex justify-start items-center gap-2 my-10 text-sm text-[#C9A84C] font-semibold font-sans"><FaArrowLeft /> Volver a la tienda</a>
                    <p className="text-5xl w-full text-start text-[#C9A84C] font-sant mb-4">RECUPERA TU CUENTA.</p>
                    <p className="w-full mb-8 text-lg">No te preocupes, te ayudamos a restablecer tu contraseña de forma rápida y segura.</p>
                </div>
                <div className="bg-black/80 border border-[#C9A84C] rounded-lg my-10 px-20 py-10 mx-[25%]">
                    <CiLock className="flex justify-center w-full size-15 text-[#C9A84C] mb-4" />
                    <p className="text-4xl text-center">¿Olvidaste tu contraseña?</p>
                    <p className="text-sm text-center">Introduce tu correo electrónico y te enviaremos un enlace<br />para restablecer tu contraseña.</p>
                    <form action="" method="post" className="flex flex-col">
                        <label htmlFor="" className="my-2">Correo electrónico<span className="text-[#C9A84C]">*</span></label>
                        <input type="email" placeholder="tu@email.com" required className="border-2 border-[#C9A84C] p-2 rounded-lg my-2" />
                        <button type="submit" className="w-full flex justify-center items-center gap-2 bg-[#C9A84C]/90 text-black rounded-lg my-4 px-5 py-2 hover:bg-[#C9A84C] hover:scale-105 duration-400 cursor-pointer">Enviar enlace de restablecimiento <FaArrowRightLong /></button>
                    </form>
                    <hr className="w-full border-[#C9A84C]/50 my-10" />
                    <div className="flex flex-col w-full justify-around items-center gap-4">
                        <button className="flex justify-center items-center gap-2 w-full rounded-lg border-2 border-[#A09070] px-5 py-2 hover:scale-110 duration-400 hover:text-black hover:bg-[#C9A84C] hover:border-none ">
                            <FcGoogle />Continuar con Google
                        </button>
                        <button className="flex justify-center items-center gap-2 w-full rounded-lg border-2 border-[#A09070] px-5 py-2 hover:scale-110 duration-400 hover:text-black hover:bg-[#C9A84C] hover:border-none">
                            <FaApple className="size-5" />Continuar con Apple
                        </button>
                        <a href="/login" className="w-full flex justify-center items-center gap-2 mt-2 text-sm text-[#C9A84C] font-semibold font-sans underline"><FaArrowLeft /> Volver a iniciar sesión</a>

                    </div>
                </div>
            </div>
        </>
    )
}   