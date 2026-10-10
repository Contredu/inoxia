import { TbWritingSignFilled } from "react-icons/tb";
import { TbLogin2 } from "react-icons/tb";


export const NavbarLogin = () => {
    return (
        <>
            <nav className="flex justify-between items-center top-0 sticky z-10 backdrop-blur-xs bg-black/60">
                <a href="#"><img className="h-15 object-cover mx-3" src="./inoxia_metalico.webp" alt="Logo inoxia" /></a>
                {/* <div className="flex items-center justify-end pr-12 gap-6 w-full">
                    <button className="flex justify-center items-center gap-2 border-2 p-2 rounded-md text-[#A09070] cursor-pointer hover:scale-110 hover:text-[#C9A84C] hover:transition-all hover:duration-300 hover:underline">Registrate<TbWritingSignFilled />
                    </button>
                    <button className="flex justify-center items-center gap-2 border-2 p-2 rounded-md text-[#A09070] cursor-pointer hover:scale-110 hover:text-[#C9A84C] hover:transition-all hover:duration-300 hover:underline">Iniciar Sesión<TbLogin2 />
                    </button>
                </div> */}
            </nav>
        </>
    )
};