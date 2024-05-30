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
            dropdown: [
                {
                    title: "Ocean & Canal - SOLD OUT",
                    subtitle: "Exclusive development with unique taste, offering a private canal.",
                    url: "/ocean-and-canal/",
                },
                {
                    title: "Tower 1 y 2",
                    url: "/ocean-and-canal/tower-1-and-2/",
                },
                {
                    title: "Tower 3",
                    url: "/ocean-and-canal/tower-3/",
                },
                {
                    title: "Work in Progress",
                    url: "/ocean-and-canal/work-in-progress/",
                }
            ]
        },
        {
            title: "Ocean & Canal II",
            url: "/ocean-and-canal-2/",
            dropdown : [ {
                title: "Ocean & Canal II",
                subtitle: "Exclusive development with unique taste, offering a private canal.",
                url: "/ocean-and-canal-2/",
            },
            {
                title: "Tower 4",
                url: "/ocean-and-canal-2/tower-4/",
            },
            {
                title: "Tower 5",
                url: "/ocean-and-canal-2/tower-5/",
            },
            {
                title: "Work in Progress",
                url: "/ocean-and-canal-2/work-in-progress/",
            
            }]
        },
        {
            title: "Golf Residences",
            url: "/golf-residences",
            dropdown : [
                {
                    title: "SOLD OUT",
                    subtitle: " ",
                    url: "/golf-residences",
                }
            ]
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








    return (
        <>
            <NavLink href="/" closeMenu={closeMenu}>Home</NavLink>
            <NavLink href="/ocean-and-canal" dropdownData={data[1].dropdown} closeMenu={closeMenu}>Ocean & Canal I</NavLink>
            <NavLink href="/ocean-and-canal-2" dropdownData={data[2].dropdown} closeMenu={closeMenu}>Ocean & Canal 2</NavLink>
            <NavLink href="/golf-residences" dropdownData={data[3].dropdown} closeMenu={closeMenu}>Golf Residences</NavLink>
            <NavLink href="/banderas-bay" closeMenu={closeMenu}>Banderas Bay</NavLink>
            <NavLink href="/tower-garden" closeMenu={closeMenu}>Garden</NavLink>
            <NavLink href="/work-in-progress" closeMenu={closeMenu}>Progress</NavLink>
        </>
       /*  <div>
            <div>
                <div className="hidden md:block relative group">
                    <div className="group-hover:mt-5">
                        <button onClick={closeMenu}>
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

                <div className="md:hidden">
                    <button onClick={closeMenu}>
                        <NavLink href="/ocean-and-canal"  >
                           Ocean & Canal I
                        </NavLink>
                    </button>
                </div>
            </div>

        </div> */
/*         <>
            {data.map((menu, index) => {
            if (menu.title === "Ocean & Canal I")  {
                return (
                    <div key={index} >
                        <div className="hidden md:block relative group">
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

                        <div className="md:hidden">
                            <button onClick={closeMenu} key={index}>
                                <NavLink href={menu.url}  >
                                    {menu.title}
                                </NavLink>
                            </button>
                        </div>
                    </div>
                )
                } else if (menu.title === "Ocean & Canal II"){
                    return(
                        <div key={index} >
                            <div className="hidden md:block relative group">
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
                            <div className="md:hidden">
                                <button onClick={closeMenu} key={index}>
                                    <NavLink href={menu.url}  >
                                        {menu.title}
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                        
                    )
                    
                } else if (menu.title === "Golf Residences"){
                    return(
                        <div key={index} >
                            <div className="hidden md:block relative group">
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
                            <div className="md:hidden">
                                <button onClick={closeMenu} key={index}>
                                    <NavLink href={menu.url}  >
                                        {menu.title}
                                    </NavLink>
                                </button>
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
        </> */
    );
};

export default NavLinks;

