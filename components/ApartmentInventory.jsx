import Link from "next/link";

const ApartmentInventory = ({points,status,apartmentNumber,x,y,onPopupOpen}) => {

    let polygonClass = 'fill-current opacity-70 stroke-[2px] ';

    if( status === "available"){
        polygonClass += "fill-green-500 stroke-green-900"
    } else if (status === "on-hold") {
        polygonClass += "fill-yellow-500"
    } else if (status === "sold"){
        polygonClass += "fill-red-500"
    }
    const handleClick = (event) => {
        event.preventDefault(); // Prevenir la navegación predeterminada
        onPopupOpen(); // Llamar a la función para abrir el popup
    };

  return (
    <Link href="#" onClick={handleClick}>
        <polygon
            className={polygonClass}
            points={points}
        ></polygon>
        <text
            x={x}
            y={y}
            fontSize="30"
            fontWeight="regular"
            fill="#fff"
            >
            {apartmentNumber}
        </text>
    </Link>
  )
}

export default ApartmentInventory