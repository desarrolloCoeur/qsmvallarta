"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Links from "./Links";
import Link from "next/link";
import { handleClientScriptLoad } from "next/script";


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


    return (
        <>
            <nav className={`transition-all z-10 fixed w-full  py-2 px-3 ${scrolled ? 'bg-main' : 'background-header'}`}>
                <div className="container mx-auto flex justify-between ">
                    <Link href="/">
                        <Image
                            src="/img/qsm-logo.png"
                            width={180}
                            height={100}
                            alt="QSM Vallarta"
                            className="w-36 md:w-44"
                        />
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className="text-white flex items-center justify-end w-full text-2xl md:hidden"
                    >
                        <FaBars />
                    </button>
                    <div id="menu" className="flex flex-row">
                        <div className="hidden md:flex flex-row items-center gap-5">
                            <Links />
                        </div>
                    </div>
                </div>
            </nav>
            {MenuOpen && (
                <div className="bg-main text-center pt-3 pb-10">
                    <Links />
                </div>
            )}
        </>
    );
};

export default Header;
