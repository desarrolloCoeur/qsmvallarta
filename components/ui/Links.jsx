import { useState } from "react";
import NavLink from "@/components/ui/NavLink";


const NavLinks = () => {
    const data = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Ocean & Canal I",
            url: "#",
        },
        {
            title: "Ocean & Canal II",
            url: "#",
        },
        {
            title: "Golf Residences",
            url: "/golf-residences",
        },
        {
            title: "Banderas Bay",
            url: "/banderas-bay",
        },
        // {
        //     title: "Garden",
        //     url: "/tower-garden",
        // },
        {
<<<<<<< HEAD
=======
            title: "Garden",
            url: "/tower-garden",
        },
        {
>>>>>>> main
            title: "Progress",
            url: "/work-in-progress",
        }
        
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
            if (menu.title === "Ocean & Canal I")  {
                return (
                    <div key={index} className="relative group">
                        <div className="group-hover:mt-5">
                            <NavLink href="#" multi>Ocean & Canal I</NavLink>
                        </div>
                        <div className="hidden group-hover:block  ">
                            <div  className=" mb-5">
                                <div className="absolute left-[-90px] gap-5  w-[350px] p-8 shadow-xl rounded-sm bg-white">
                                    <div className="flex flex-col gap-5">
                                        <NavLink href="/ocean-and-canal" title>
                                            Ocean & Canal
                                            <p className="mb-0"><span className="text-sm">Exclusive development with unique taste, offering a private canal.</span></p>
                                        </NavLink>
                                        <NavLink href="/ocean-and-canal/tower-1-and-2" subtitle>Tower 1 y 2</NavLink>
                                        <NavLink href="/ocean-and-canal/tower-3" subtitle>Tower 3</NavLink>
                                        <NavLink href="/ocean-and-canal/work-in-progress" subtitle>Work in Progress</NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                } else if (menu.title === "Ocean & Canal II"){
                    return(
                        <div key={index} className="relative group">
                        <div className="group-hover:mt-5">
                            <NavLink href="#" multi>Ocean & Canal II</NavLink>
                        </div>
                        <div className="hidden group-hover:block  ">
                            <div  className=" mb-5">
                                <div className="absolute left-[-90px] gap-5  w-[350px] p-8 shadow-xl rounded-sm bg-white">
                                    <div className="flex flex-col gap-5">
                                        <NavLink href="/ocean-and-canal-2" title>
                                            Ocean & Canal II
                                            <p className="mb-0"><span className="text-sm">Exclusive development with unique taste, offering a private canal.</span></p>
                                        </NavLink>
                                        <NavLink href="/ocean-and-canal-2/tower-4" subtitle>Tower 4</NavLink>
                                        <NavLink href="/ocean-and-canal-2/tower-5" subtitle>Tower 5</NavLink>
                                        <NavLink href="/ocean-and-canal-2/work-in-progress" subtitle>Work in Progress</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    )
                    
                } else {
                    return (
                        <div key={index}>
                            <NavLink href={menu.url}  >
                                {menu.title}
                            </NavLink>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default NavLinks;

