import { FaBagShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


export const Navbar = () => {



    const openModal = () => {

    }


    const toggleCart = () => {

    }



    return (

        <>
            <nav className="flex justify-between items-center h-15 py-4 bg-black top-0 sticky z-10 ">
                <a href="#"><img className="w-80 h-19 object-cover" src="./inoxia_metalico.webp" alt="Logo inoxia" /></a>
                <ul className="flex justify-center items-center gap-10 w-full">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Colecciones</a></li>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <div className="flex items-center justify-end pr-12 gap-6 w-full">
                    <div className="flex justify-center items-center px-2 gap-2 border-2 border-[#A09070] rounded-2xl">
                        <FaSearch className="text-[#A09070]" />
                        <input type="text" placeholder="Buscar joyas..." id="searchInput" />
                    </div>
                    <button className="flex justify-center items-center border-2 border-[#A09070] p-2 rounded-full size-10">
                        <FaUser className="text-[#C9A84C]" />
                    </button>
                    <button className="flex justify-center items-center border-2 border-[#A09070] p-2 rounded-full relative size-10">
                        <FaBagShopping className="text-[#C9A84C]" />
                        <span className="absolute top-0 right-0 bg-[#C9A84C] text-white rounded-full w-4 h-4 flex justify-center items-center text-xs" id="cartBadge">0</span>
                    </button>
                </div>
            </nav>
        </>
    )
};

// FALTA INTERACTIVIDAD