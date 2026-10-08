import { PiStarThin } from "react-icons/pi";
import { ReviewsData } from "../data/ReviewsData";

export const Reviews = () => {
    return (
        <>
            <div className="my-16 mx-6">
                <p className="text-md font-sans font-semibold text-[#C9A84C]">OPINIONES</p>
                <p className="text-3xl font-serif">Lo que dice nuestrass clientas</p>
            </div>
            {ReviewsData.length === 0 ? (
                <p>No hay opiniones disponibles</p>
            ) : (
                <div className="flex gap-4 mx-2 px-4 py-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory scrollbar-thumb-[#C9A84C]/20">
                    {ReviewsData.map((review) => (
                        <div key={review.id} className="shrink-0 w-96 min-w-96 h-auto border-2 border-[rgba(201,168,76,0.18)]  bg-black p-4 rounded-sm snap-center">
                            <p className="text-[#C9A84C] text-md font-bold font-mono mb-4 flex justify-start items-center gap-2">{review.rating}<PiStarThin /><PiStarThin /><PiStarThin /><PiStarThin /><PiStarThin /></p>
                            <p className="text-[#A09070]">"{review.review}"</p>
                            <div className="flex flex-col justify-center items-start mt-4">
                                <p className="font-semibold text-xs">{review.name}</p>
                                <div className="flex justify-center items-start gap-2 text-[#A09070]">
                                    <p className="text-xs">{review.location}</p>
                                    <p className="text-xs">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
};
