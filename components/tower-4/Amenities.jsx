import Image from "next/image";
import {
    FaSwimmingPool,
    FaTableTennis,
    FaStoreAlt,
    FaShower,
    FaGlassMartini,
    FaSun,
} from "react-icons/fa";

const Amenities = () => {
    return (
        <>
            <div>
                <h1 className="text-center">
                    A NEW CHAPTER OF QUINTA SAN MIGUEL DEVELOPMENT.
                </h1>
            </div>
            <div className="mx-auto flex justify-center flex-col md:flex-row gap-5 mt-16">
                <div className="text-center  md:w-1/2 max-w-[500px] mx-auto">
                    <p>
                        Our tower 4 offers incredible views, commodity and the
                        best amenities:
                    </p>
                    <div>
                        <ul className="grid grid-cols-2 md:grid-cols-3 justify-between gap-1 mt-7 mb-10">
                            <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                <FaSwimmingPool className="text-4xl text-[#212529]"/>
                                <p>Pools</p>
                            </li>
                            <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                <FaGlassMartini className="text-4xl text-[#212529]"/>
                                <p>Restaurant Bar</p>
                            </li>
                            <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                <FaTableTennis className="text-4xl text-[#212529]"/>
                                <p>Tennis court</p>
                            </li>
                            <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                <FaSun className="text-4xl text-[#212529]"/>
                                <p>Sunbathing areas</p>
                            </li>
                            <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                <FaShower className="text-4xl text-[#212529]"/>
                                <p>Showers & Toilets</p>
                            </li>
                            <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                <FaStoreAlt className="text-4xl text-[#212529]"/>
                                <p>Commercial area</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Image src="/img/5.webp" alt="" height={500} width={600} className="block mx-auto"/>
                </div>
            </div>
        </>
    );
};

export default Amenities;
