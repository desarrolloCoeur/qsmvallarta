"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Links from "./Links";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6"

const Header = () => {

    const [MenuOpen, setMenuOpen] = useState(false);

    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 600;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll',  handleScroll)


        return () => {
            window.removeEventListener('scroll',  handleScroll)
        }
    })


    const toggleMenu = () => {
        setMenuOpen(!MenuOpen);
    };

    const closeMenu = () =>{
        setMenuOpen(false);
    }


    return (
        <>
            <nav className={`transition-all z-10 fixed w-full  py-2 px-3 ${scrolled ? 'bg-main' : 'background-header'}`}>
                <div className="w-full mx-auto flex justify-between max-w-screen-xl md:gap-10">
                    <Link href="/">
                        <Image
                            src="/img/qsm-logo.png"
                            width={180}
                            height={100}
                            alt="QSM Vallarta"
                            className="w-36 md:w-44"
                        />
                    </Link>
                    <div className="md:hidden w-full flex items-center justify-end">
                        <button
                            onClick={toggleMenu}
                            className="text-white flex items-center justify-end text-2xl "
                        >
                            <FaBars />
                        </button>
                    </div>

                    
                    <div id="menu" className="flex flex-row">
                        <div className="hidden md:flex flex-row items-center gap-5">
                            <Links />
                        </div>
                    </div>
                </div>
            </nav>
            {MenuOpen && (
                <div className="bg-main text-center flex flex-col justify-center items-center pb-10 h-screen text-2xl sm:text-4xl gap-3 fixed top-0 z-10 w-full">
                    <button onClick={toggleMenu} className="absolute top-5 right-10 text-white"><FaXmark /></button>
                    <Links closeMenu={closeMenu}/>
                </div>
            )}
        </>
    );
};

export default Header;