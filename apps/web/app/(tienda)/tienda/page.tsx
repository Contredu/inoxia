export default function Tienda() {
    return (
        <>
            <div className="flex w-full h-full">

                {/* filtrador */}
                <div className="flex flex-col sticky right-0 px-10 border-r-2 border-[#C9A84C]/50">

                    <div className="flex flex-col items-start justify-center p-2">
                        <p className="font-semibold text-sm my-2">CATEGORIAS</p>
                        <ul className="">
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Collares</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Pendientes</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Pulseras</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Anillos</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Conjuntos</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Tobilleras</li>
                        </ul>
                    </div>
                    <hr className="border-[#C9A84C]/50"/>
                    <div className="flex flex-col items-start justify-center p-2">
                        <p className="font-semibold text-sm my-2">COLOR</p>
                        <ul className="">
                            <li className="flex items-center gap-2"><button className="rounded-full bg-yellow-500 size-4"></button>Dorado</li>
                            <li className="flex items-center gap-2"><button className="rounded-full bg-gray-500 size-4"></button>Plateado</li>
                            <li className="flex items-center gap-2"><button className="rounded-full bg-black size-4"></button>Negro</li>
                            <li className="flex items-center gap-2"><button className="rounded-full bg-linear-to-b from-yellow-500 via-blue-400 to-red-500 size-4"></button>Mix</li>
                        </ul>
                    </div>
                    <hr className="border-[#C9A84C]/50"/>
                    <div className="flex flex-col items-start justify-center p-2">
                        <p className="font-semibold text-sm my-2">MATERIAL</p>
                        <ul className="">
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Acero inoxidable</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Xuping</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Plata</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Oro</li>
                            <li className="flex items-center gap-2"><input type="checkbox" className="accent-[#C9A84C]" />Metal-cristal</li>
                        </ul>
                    </div>
                    <hr className="border-[#C9A84C]/50"/>

                    {/* falta interactividad de la barra */}
                    <div className="flex flex-col items-start justify-center p-2">
                        <p className="font-semibold text-sm my-2">PRECIO</p>
                        <input type="range" id="filtroPrecio" className="control accent-[#C9A84C]" min="0" max="300" step="1" value="250" />

                        <div className="info-precio flex justify-between w-full">
                            <span id="minPrecio">0€</span>
                            <span id="maxPrecio">300€</span>
                        </div>
                    </div>
                    <button className="mx-auto my-5 bg-[#C9A84C] hover:bg-[#C9A84C]/80 transition-colors border-2 border-[#C9A84C]/40 text-black font-semibold px-4 py-2">Limpiar filtros</button>
                </div>

                {/* Lista de todos los items */}
                <div>

                </div>
            </div>
        </>
    )
}