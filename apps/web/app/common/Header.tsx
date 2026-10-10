export const Header = () => {
    return (
        <>
            <div className="w-full mask-b-from-90 relative">
                <img src="./header_ariana.webp" alt="Header" className="w-full h-96 object-cover object-[100%_18%]" />
                <div className="absolute top-30 left-10">
                    <p className="text-[#C9A84C] mb-3 font-semibold text-4xl font-serif">Belleza que dura.</p>
                    <p className="text-white text-lg">Joyería de acero inoxidable para cada historia.</p>
                    <button className="mt-4 border-2 border-[#C9A84C] bg-[#C9A84C] text-white px-4 py-2 rounded-full hover:bg-[#E8C96A] hover:border-[#E8C96A] hover:text-[#0D0D0D] transition-colors duration-300 font-semibold cursor-pointer">Ver colecciones</button>
                </div>
            </div>
        </>
    )
};