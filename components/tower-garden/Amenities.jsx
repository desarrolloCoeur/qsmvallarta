import Image from "next/image";
import {
    FaSwimmingPool,
    FaStoreAlt,
    FaShower,
    FaGlassMartini,
    FaHome,
    FaShieldAlt,
    FaParking,
    FaConciergeBell,
} from "react-icons/fa";

const Amenities = () => {
    return (
        <div className="bg-verde">
            <div className="lg:mx-24 mx-6">
                <div class="grid lg:grid-cols-2 grid-cols-1 text-white">
                    <div>
                        <h1 className="lg:mt-12 mt-10 text-center lg:text-4xl text-2xl font-semibold text-dorado">
                            A NEW CHAPTER OF QUINTA SAN MIGUEL DEVELOPMENT.
                        </h1>
                        <div class="bg-white h-px w-3/4 mx-auto m-6"></div>
                        <div className="flex items-center flex-col md:flex-row">
                            <div className="text-center  w-full">
                                <p className="tracking-wide text-lg italic">
                                    Our tower offers incredible views, commodity and the best amenities:
                                </p>
                                <div>
                                    <ul className="font-medium text-lg mt-7 mb-10">
                                        <li className="flex gap-3 items-center mb-3 justify-center">
                                            <FaHome />
                                            Roof Top
                                        </li>
                                        <li className="flex gap-3 items-center mb-3 justify-center">
                                            <FaSwimmingPool />
                                            Pool
                                        </li>
                                        <li className="flex gap-3 items-center mb-3 justify-center">
                                            <FaShieldAlt />
                                            Security 24/7
                                        </li>
                                        <li className="flex gap-3 items-center mb-3 justify-center">
                                            <FaShower />
                                            Showers and toilets
                                        </li>
                                        <li className="flex gap-3 items-center mb-3 justify-center">
                                            <FaParking />
                                            Semi underground parking
                                        </li>
                                        <li className="flex gap-3 items-center mb-3 justify-center">
                                            <FaStoreAlt />
                                            Commercial area
                                        </li>
                                        <li className="flex gap-3 items-center mb-3 justify-center">
                                            <FaGlassMartini />
                                            Bar
                                        </li>
                                        <li className="flex gap-3 items-center mb-3 justify-center">
                                            <FaConciergeBell />
                                            Lobby
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 lg:my-12 my-6 items-center">
                        <div className="md:w-[90%]">
                            <Image src="/img/garden.webp" alt="" height={600} width={700} />
                        </div>
                        <div className="md:w-[90%]">
                            <Image src="/img/garden2.webp" alt="" height={600} width={700} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Amenities;
