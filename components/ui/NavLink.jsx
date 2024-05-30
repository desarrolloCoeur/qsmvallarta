import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

const NavLink = ({ children, href, dropdownData, closeMenu}) => {
    const [isHover, setIsHover] = useState(false);

    const handleIsHover = () => {
        setIsHover(true);
    };

    const handleOutHover = () => {
        setIsHover(false);
    };

    if (dropdownData?.length > 0) {
        return (
            <div 
                className="relative"
                onMouseEnter={handleIsHover}
                onMouseLeave={handleOutHover}
            >
                <Link
                    href={href}
                    className="text-white md:text-[12px] lg:text-base font-nav uppercase font-semibold flex items-center gap-1 h-full"
                    onClick={closeMenu}
                >
                    {children}
                    <FaChevronDown className="text-sm hidden md:block" />
                </Link>
                {isHover && (
                    <div className="hidden md:block absolute left-[-90px] gap-5 w-[350px] p-8 shadow-xl rounded-sm bg-white">
                        <div className="flex flex-col gap-5">
                            {dropdownData?.map((link, index) =>  
                                <>
                                    {link.subtitle ? (
                                        <Link href={link.url} key={index}> 
                                            {link.title}
                                            <p className="mb-0"><span className="text-sm">{link.subtitle}</span></p>
                                        </Link>
                                    ) : (

                                        <Link href={link.url} className="flex items-center gap-2">
                                            <FaArrowRight className="text-xs" /> {link.title}
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <Link
                href={href}
                className="text-white md:text-[12px] lg:text-base font-nav uppercase font-semibold"
                onClick={closeMenu}
            >
                {children}
            </Link>
        );
    }
};

export default NavLink;
