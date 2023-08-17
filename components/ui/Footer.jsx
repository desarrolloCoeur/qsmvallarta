import { FaFacebookSquare, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#b0a49c]">
            <div className="p-10 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <div className="mb-5">
                            <h4>Contact Us</h4>
                            <div className="bg-white h-px w-full"></div>
                            <h5 className="flex items-center justify-start gap-2">
                                <FaPhone/> PVR: (322) 373-5781
                            </h5>
                            <h5 className="flex items-center justify-start gap-2">
                                <FaEnvelope/> qsmvallarta@gmail.com
                            </h5>
                        </div>
                        <div></div>
                        <div className="mb-5 ">
                            <h4>Follow Us</h4>
                            <div className="bg-white h-px w-full"></div>
                            <h5 className="flex items-center justify-start gap-2 ">
                                <FaFacebookSquare/> Facebook
                            </h5>
                            <h5 className="flex items-center justify-start gap-2">
                                <FaInstagram/> Instagram
                            </h5>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-center font-light pt-6 text-white">
                            ©All Rights Reserved. Quinta San Miguel 2023 |
                            Powered by CoeurMKT
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
