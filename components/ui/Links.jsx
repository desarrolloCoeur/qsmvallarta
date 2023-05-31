import Link from "next/link";

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
        },
    ];

    return (
        <>
            {data.map((menu, index) => {
                return (
                    <div key={index}>
                        <Link
                            href={menu.url}
                            className="text-white uppercase font-semibold text-lg"
                        >
                            {menu.title}
                        </Link>
                    </div>
                );
            })}
        </>
    );
};

export default Links;
