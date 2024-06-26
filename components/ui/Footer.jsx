import { FaFacebookSquare, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#b0a49c] text-white mt-20">
            <div className="p-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <div className="mb-5">
                            <h4>Contact Us</h4>
                            <div className="bg-white h-px w-full"></div>
                            <a href="tel:+523223735781">
                                <h5 className="flex items-center justify-start gap-2">
                                    <FaPhone /> PVR: (322) 373-5781
                                </h5>
                            </a>
                            <a href="mailto:ventas@qsmvallarta.com">
                                <h5 className="flex items-center justify-start gap-2">
                                    <FaEnvelope /> ventas@qsmvallarta.com
                                </h5>
                            </a>
                        </div>
                        <div></div>
                        <div className="mb-5 ">
                            <h4>Follow Us</h4>
                            <div className="bg-white h-px w-full"></div>
                            <a href="https://www.facebook.com/quintasanmiguelpv" target="_blank">
                                <h5 className="flex items-center justify-start gap-2 ">
                                    <FaFacebookSquare /> Facebook
                                </h5>
                            </a>
                            <a href="https://www.instagram.com/qsmvallarta/" target="_blank">
                                <h5 className="flex items-center justify-start gap-2">
                                    <FaInstagram /> Instagram
                                </h5>
                            </a>
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
