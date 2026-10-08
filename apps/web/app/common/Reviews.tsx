import { PiStarThin } from "react-icons/pi";

export const Reviews = () => {
    return (
        <>
            <div className="my-6 mx-2">
                <p className="text-md font-sans font-semibold text-[#C9A84C]">OPINIONES</p>
                <p className="text-3xl font-serif">Lo que dice nuestrass clientas</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 p-4">
                <div className="border-2 border-[#C9A84C] bg-black m-4 p-4 rounded-sm">
                    <p className="text-[#C9A84C] text-md font-bold font-mono mb-4 flex justify-start items-center gap-2"><PiStarThin /><PiStarThin /><PiStarThin /><PiStarThin /><PiStarThin /></p>
                    <p className="text-[#A09070]">"buena compra he hecho en inoxia una joya muy bonita y de muy buena calidad,volveré a comprar mas,lo recomiendo"</p>
                    <div className="flex flex-col justify-center items-start mt-4">
                        <p className="font-semibold text-xs">Noelia Isabel Medina Diaz</p>
                        <div className="flex justify-center items-start gap-2 text-[#A09070]">
                            <p className="text-xs">Madrid</p>
                            <p className="text-xs">{new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
    