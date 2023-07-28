import React, { useState } from "react";
import Link from "next/link";
import './Header.css';

const Links = () => {
    const data = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Tower 4",
            url: "/tower-4",
        },
        {
            title: "Garden",
            url: "/tower-garden",
        },
        {
            title: "Work in Progress",
            url: "/work-in-progress",
            url2:"/ocean-canal-2-progress"
        },
    ];

    // Estado para controlar si el menú desplegable está abierto o cerrado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para manejar el clic en el botón
    const handleButtonClick = () => {
        setIsMenuOpen(!isMenuOpen); // Cambiamos el estado al contrario del valor actual
    };

    return (
        <>
            {data.map((menu, index) => {
                if (menu.title === "Work in Progress") {
                    return (
                        <div
                            key={index}
                            className="menu-container"
                        >
                            {/* Agrega un botón para el enlace y maneja el clic */}
                            <button
                                className="text-white uppercase font-semibold text-lg"
                                onClick={handleButtonClick}
                            >
                                {menu.title}
                            </button>
                            {isMenuOpen && (
                                <div className="dropdown-menu py-6 px-6">
                                    {/* Contenido del menú desplegable */}
                                    <Link href={menu.url} className="text-white uppercase font-semibold text-sm ">
                                        Ocean & Canal
                                    </Link><br/>
                                    <Link href={menu.url2} className="text-white uppercase font-semibold text-sm ">
                                        Ocean & Canal 2
                                    </Link>
                                    {/* Agrega más enlaces dentro del menú desplegable si es necesario */}
                                </div>
                            )}
                        </div>
                    );
                } else {
                    return (
                        <div key={index}>
                            <Link href={menu.url} className="text-white uppercase font-semibold text-lg font-nav">
                                {menu.title}
                            </Link>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default Links;

