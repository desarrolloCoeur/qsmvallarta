import { useState } from "react";
import NavLink from "@/components/ui/NavLink";


const NavLinks = ({closeMenu}) => {
    const data = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Ocean & Canal I",
            url: "/ocean-and-canal/",
        },
        {
            title: "Ocean & Canal II",
            url: "/ocean-and-canal-2/",
        },
        {
            title: "Golf Residences",
            url: "/golf-residences",
        },
        {
            title: "Banderas Bay",
            url: "/banderas-bay",
        },
        {
            title: "Garden",
            url: "/tower-garden",
        },
        {
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
                            <button onClick={closeMenu} key={index}>
                                <NavLink href="/ocean-and-canal" multi>Ocean & Canal I</NavLink>
                            </button>
                        </div>
                        <div className="hidden group-hover:block  ">
                            <div  className=" mb-5">
                                <div className="absolute left-[-90px] gap-5  w-[350px] p-8 shadow-xl rounded-sm bg-white">
                                    <div className="flex flex-col gap-5">
                                        <NavLink href="/ocean-and-canal" title>
                                            Ocean & Canal - SOLD OUT
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
                            <button onClick={closeMenu}>
                                <NavLink href="/ocean-and-canal-2/" multi>Ocean & Canal II</NavLink>
                            </button>                        
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
                    
                } else if (menu.title === "Golf Residences"){
                    return(
                        <div key={index} className="relative group">
                        <div className="group-hover:mt-5">
                            <button onClick={closeMenu} key={index}>
                            
                                <NavLink href="/golf-residences">Golf Residences</NavLink>
                            </button>
                        </div>
                        <div className="hidden group-hover:block  ">
                            <div  className=" mb-5">
                                <div className="absolute left-[-10px] gap-5  w-[180px] p-6 shadow-xl rounded-sm bg-white">
                                    <div className="flex flex-col gap-5">
                                        <NavLink href="/golf-residences" title>
                                            SOLD OUT
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    )
                    
                } else {
                    return (
                        <button onClick={closeMenu} key={index}>

                            <NavLink href={menu.url}  >
                                {menu.title}
                            </NavLink>
                        </button>
                    );
                }
            })}
        </>
    );
};

export default NavLinks;

