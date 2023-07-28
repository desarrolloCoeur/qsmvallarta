import Image from "next/image";
import {
    FaSwimmingPool,
    FaTableTennis,
    FaStoreAlt,
    FaShower,
    FaGlassMartini,
} from "react-icons/fa";

const Amenities = () => {
    return (
        <div className="lg:mx-24 mx-6">
            <div>
                <h1 className="lg:m-12 m-6 text-center lg:text-6xl text-2xl font-semibold">
                    A NEW CHAPTER OF QUINTA SAN MIGUEL DEVELOPMENT.
                </h1>
            </div>
            <div className="flex items-center flex-col md:flex-row">
                <div className="text-center  md:w-1/2">
                    <p className="tracking-wide text-lg italic">
                    Our new tower is the perfect place for relaxation, featuring breathtaking views,
                    convenience and top amenities.
                    </p>
                    <div>
                        <ul className="font-medium text-lg mt-7 mb-10">
                            <li className="flex gap-3 items-center mb-3 justify-center">
                                <FaSwimmingPool />
                                Roof Top Pool
                            </li>
                            <li className="flex gap-3 items-center mb-3 justify-center">
                                <FaGlassMartini />
                                Restaurant Bar
                            </li>
                            <li className="flex gap-3 items-center mb-3 justify-center">
                                <FaTableTennis />
                                Raquet Club
                            </li>
                            <li className="flex gap-3 items-center mb-3 justify-center">
                                <FaShower />
                                Showers & Toilets
                            </li>
                            <li className="flex gap-3 items-center mb-3 justify-center">
                                <FaStoreAlt />
                                Commercial area
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-2/3">
                    <Image src="/img/5.webp" alt="" height={500} width={600}/>
                </div>
            </div>
        </div>
    );
};

export default Amenities;
