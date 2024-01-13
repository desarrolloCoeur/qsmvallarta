"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    FaSwimmingPool,
    FaTableTennis,
    FaStoreAlt,
    FaShower,
    FaGlassMartini,
    FaSun,
} from "react-icons/fa";
import ContacUs from "@/components/ContacUs";
import KeyLocations from "@/components/ui/KeyLocations";
import BuildingHero from "@/components/ui/BuildingHero";
import RoomSwiper from "@/components/ui/RoomSwiper";
import ApartmentInventory from "@/components/ApartmentInventory";
import Popup from "@/components/Popup";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';






const Page = () => {
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [selectedUnitType, setSelectedUnitType] = useState(null)
    const [isPopupOpen, setisPopupOpen] = useState(false);
    const [selectePrice ,setSelectedPrice] = useState("discount");

    const handlePriceOption = (option) => {
        setSelectedPrice(option);
        console.log(option);
    }

    const openPopup = (unit) => {
        setSelectedUnit(unit); // Establece la unidad seleccionada

        // Busca el objeto correspondiente en el array `data`
        const matchingRoomInData = data.find(room => room.title === unit.unitType);

        // Busca el objeto correspondiente en el array `dataPenthouses` si no se encuentra en `data`
        const matchingRoomInPenthouses = dataPenthouses.find(room => room.title === unit.unitType);

        if (matchingRoomInData) {
            setSelectedUnitType(matchingRoomInData);
        } else if (matchingRoomInPenthouses) {
            setSelectedUnitType(matchingRoomInPenthouses);
        } else {
            setSelectedUnitType(null); // Si no se encuentra ninguna correspondencia, establece null
        }
        setisPopupOpen(true);
    }

    const closePopup = () => {
        setSelectedUnit(null);
        setisPopupOpen(false);
    }

    const getColorStatus = (unitStatus) => {
        switch(unitStatus){
            case "available":
                return "bg-green-500";
            case "on-hold":
                return "bg-yellow-500";
            case "sold":
                return "bg-red-500";
        }
    }
    function formattedPrice(price, percentage, secondPercentage) {
        // Verificar si percentage es un número válido
        if (typeof percentage === 'number') {
            price *= percentage; // Calcular el precio con el porcentaje
        }

        if (typeof secondPercentage === 'number') {
            price *= secondPercentage; // Aplicar el segundo porcentaje
        }
        
        // Formatear el precio como moneda MXN con comas como separadores de miles
        const formattedPriceValue = new Intl.NumberFormat('en-US').format(price);
        return formattedPriceValue;
      }




    const data = [
        {
            id: "1",
            title: "Room Type - A",
            bedrooms: "2",
            bathroom: "2",
            size: "144 m2 - 1,550 ft2",
            gallery: [
                // "/img/tower-4/roomA.webp",
                "/img/tower-4/roomA3.webp",
                "/img/tower-4/roomA2.webp",
            ],
            plan: "/img/tower-4/roomA1.webp",
            interiorm: "82",
            interiorsqf: "882",
            terracem: "62",
            terracesqf: "667",
        },
        {
            id: "2",
            title: "Room Type - B",
            bedrooms: "3",
            bathroom: "3",
            size: "394 m2 – 4,241 ft2",
            gallery: [
                // "/img/tower-4/roomB.webp",
                "/img/tower-4/roomB2.webp",
                "/img/tower-4/roomB3.webp",
            ],
            plan: "/img/tower-4/roomB1.webp",
            interiorm: "146",
            interiorsqf: "1571",
            terracem: "248",
            terracesqf: "2670",
        },
        {
            id: "3",
            title: "Room Type - C",
            bedrooms: "3",
            bathroom: "3.5",
            size: "219 m2 – 2,357 ft2",
            gallery: [
                // "/img/tower-4/roomC.webp",
                "/img/tower-4/roomC2.webp",
                "/img/tower-4/roomC3.webp",
            ],
            plan: "/img/tower-4/roomC1.webp",
            interiorm: "140.5",
            interiorsqf: "1512",
            terracem: "78.5",
            terracesqf: "845",
        },
        {
            id: "4",
            title: "Room Type - D",
            bedrooms: "3",
            bathroom: "3",
            size: "235 m2 – 2,529 ft2",
            gallery: [
                // "/img/tower-4/roomD.webp",
                "/img/tower-4/roomD2.webp",
                "/img/tower-4/roomD3.webp",
            ],
            plan: "/img/tower-4/roomD1.webp",
            interiorm: "143",
            interiorsqf: "1540",
            terracem: "92",
            terracesqf: "990",
        },
        {
            id: "5",
            title: "Room Type - E",
            bedrooms: "3",
            bathroom: "3",
            size: "223 m2 – 2,325 ft2",
            gallery: [
                // "/img/tower-4/roomE.webp",
                "/img/tower-4/roomE2.webp",
                "/img/tower-4/roomE3.webp",
            ],
            plan: "/img/tower-4/roomE1.webp",
            interiorm: "119",
            interiorsqf: "1281",
            terracem: "104",
            terracesqf: "1120",
        },
        {
            id: "6",
            title: "Room Type - F",
            bedrooms: "3",
            bathroom: "3",
            size: "266 m2 – 2,874 ft2",
            gallery: [
                // "/img/tower-4/roomF.webp",
                "/img/tower-4/roomF2.webp",
                "/img/tower-4/roomF3.webp",
            ],
            plan: "/img/tower-4/roomF1.webp",
            interiorm: "143",
            interiorsqf: "1539",
            terracem: "123",
            terracesqf: "1324",
        },
        {
            id: "7",
            title: "Room Type - G",
            bedrooms: "1",
            bathroom: "1",
            size: "71 m2 – 764 ft2",
            gallery: [
                // "/img/tower-4/roomG.webp",
                "/img/tower-4/roomG3.webp",
                "/img/tower-4/roomG2.webp",
            ],
            plan: "/img/tower-4/roomG1.webp",
            interiorm: "53",
            interiorsqf: "570",
            terracem: "18",
            terracesqf: "194",
        },
        {
            id: "8",
            title: "Room Type - H",
            bedrooms: "1",
            bathroom: "1",
            size: "60 m2 – 645 ft2",
            gallery: [
                // "/img/tower-4/roomH.webp",
                "/img/tower-4/roomH3.webp",
                "/img/tower-4/roomH2.webp",
            ],
            plan: "/img/tower-4/roomH1.webp",
            interiorm: "54",
            interiorsqf: "581",
            terracem: "6",
            terracesqf: "64",
        },
        {
            id: "9",
            title: "Room Type - I",
            bedrooms: "3",
            bathroom: "3",
            size: "174 m2 – 1873 ft2",
            gallery: [
                // "/img/tower-4/roomI.webp",
                "/img/tower-4/roomI3.webp",
                "/img/tower-4/roomI2.webp",
            ],
            plan: "/img/tower-4/roomI1.webp",
            interiorm: "142",
            interiorsqf: "1528",
            terracem: "32",
            terracesqf: "344",
        },
        {
            id: "10",
            title: "Room Type - J",
            bedrooms: "2",
            bathroom: "2",
            size: "135 m2 – 1,453 ft2",
            gallery: [
                // "/img/tower-4/roomJ.webp",
                "/img/tower-4/roomJ2.webp",
                "/img/tower-4/roomJ3.webp",
            ],
            plan: "/img/tower-4/roomJ1.webp",
            interiorm: "117.5",
            interiorsqf: "1265",
            terracem: "17.5",
            terracesqf: "188",
        },
        {
            id: "11",
            title: "Room Type - K",
            bedrooms: "2",
            bathroom: "2",
            size: "106 m2 – 1141 ft2",
            gallery: [
                // "/img/tower-4/roomK.webp",
                "/img/tower-4/roomK3.webp",
                "/img/tower-4/roomK2.webp",
            ],
            plan: "/img/tower-4/roomK1.webp",
            interiorm: "95.6",
            interiorsqf: "1029",
            terracem: "10.4",
            terracesqf: "112",
        },
        {
            id: "12",
            title: "Room Type - L",
            bedrooms: "2",
            bathroom: "2",
            size: "160 m2 – 1,722 ft2",
            gallery: [
                // "/img/tower-4/roomL.webp",
                "/img/tower-4/roomL2.webp",
                "/img/tower-4/roomL3.webp",
            ],
            plan: "/img/tower-4/roomL1.webp",
            interiorm: "118",
            interiorsqf: "1270",
            terracem: "42",
            terracesqf: "452",
        },
    ];

    const dataPenthouses = [
        {
            id: "13",
            title: "Room Type - PH G",
            bedrooms: "1",
            bathroom: "2.5",
            size: "150 m2 – 1616 ft2",
            gallery: [
                //"/img/tower-4/roomPHG.webp",
                "/img/tower-4/roomPHG2.webp",
                "/img/tower-4/roomPHG1.webp",
            ],
            plan: "/img/tower-4/roomPHG3.webp",
            interiorm: "84",
            interiorsqf: "904",
            terracem: "18",
            terracesqf: "193",
            roofmp: "48.2",
            roofsqf: "519",
        },
        {
            id: "14",
            title: "Room Type - PH H",
            bedrooms: "1",
            bathroom: "2.5",
            size: "152 m2 – 1636 ft2",
            gallery: [
                //"/img/tower-4/roomPHH.webp",
                "/img/tower-4/roomPHH1.webp",
                "/img/tower-4/roomPHH2.webp",
            ],
            plan: "/img/tower-4/roomPHH3.webp",
            interiorm: "90",
            interiorsqf: "968.75",
            terracem: "6",
            terracesqf: "64.6",
            roofmp: "56",
            roofsqf: "602",
        },
        {
            id: "15",
            title: "Room Type - PH I",
            bedrooms: "3",
            bathroom: "3.5",
            size: "408 m2 – 4391 ft2",
            gallery: [
                //"/img/tower-4/roomPHI.webp",
                "/img/tower-4/roomPHI1.webp",
                "/img/tower-4/roomPHI2.webp",
            ],
            plan: "/img/tower-4/roomPHI3.webp",
            interiorm: "232",
            interiorsqf: "2497",
            terracem: "32",
            terracesqf: "344",
            roofmp: "144",
            roofsqf: "1550",
        },
        {
            id: "16",
            title: "Room Type - PH J",
            bedrooms: "3",
            bathroom: "4.5",
            size: "328 m2 – 3531 ft2",
            gallery: [
                //"/img/tower-4/roomPHJ.webp",
                "/img/tower-4/roomPHJ1.webp",
                "/img/tower-4/roomPHJ2.webp",
            ],
            plan: "/img/tower-4/roomPHJ3.webp",
            interiorm: "193.5",
            interiorsqf: "2083",
            terracem: "17.5",
            terracesqf: "188",
            roofmp: "117",
            roofsqf: "1260",
        },
        {
            id: "17",
            title: "Room Type - PH K 605",
            bedrooms: "3",
            bathroom: "3.5",
            size: "265 m2 – 2855 ft2",
            gallery: [
                //"/img/tower-4/roomPHK605.webp",
                "/img/tower-4/roomPHK605-1.webp",
                "/img/tower-4/roomPHK605-2.webp",
            ],
            plan: "/img/tower-4/roomPHK605-3.webp",
            interiorm: "159.25",
            interiorsqf: "1714",
            terracem: "10.4",
            terracesqf: "112",
            roofmp: "95.6",
            roofsqf: "1029",
        },
        {
            id: "18",
            title: "Room Type - PH K 606",
            bedrooms: "3",
            bathroom: "3.5",
            size: "268.4 m2 – 2888 ft2",
            gallery: [
                //"/img/tower-4/roomPHK606.webp",
                "/img/tower-4/roomPHK606-2.webp",
                "/img/tower-4/roomPHK606-1.webp",
            ],
            plan: "/img/tower-4/roomPHK606-3.webp",
            interiorm: "162.6",
            interiorsqf: "1750",
            terracem: "10.4",
            terracesqf: "112",
            roofmp: "95.4",
            roofsqf: "1026",
        },
        {
            id: "19",
            title: "Room Type - PH K 607",
            bedrooms: "3",
            bathroom: "3.5",
            size: "268 m2 – 2884 ft2",
            gallery: [
                //"/img/tower-4/roomPHK607.webp",
                "/img/tower-4/roomPHK607-1.webp",
                "/img/tower-4/roomPHK607-2.webp",
            ],
            plan: "/img/tower-4/roomPHK607-3.webp",
            interiorm: "162",
            interiorsqf: "1743.75",
            terracem: "10.4",
            terracesqf: "112",
            roofmp: "95.6",
            roofsqf: "1029",
        },
        {
            id: "20",
            title: "Room Type - PH L",
            bedrooms: "3",
            bathroom: "3.5",
            size: "335 m2 – 3606 ft2.",
            gallery: [
                //"/img/tower-4/roomPHL.webp",
                "/img/tower-4/roomPHL1.webp",
                "/img/tower-4/roomPHL2.webp",
            ],
            plan: "/img/tower-4/roomPHL3.webp",
            interiorm: "195",
            interiorsqf: "2099",
            terracem: "45",
            terracesqf: "452",
            roofmp: "98",
            roofsqf: "1055",
        },
    ];

    const units = [
        {
            unit : "101",
            unitType : "Room Type - A",
            level: "1",
            unitStatus : "on-hold",
            unitPrice : "10032000",
            points: "1288,646 1288,719 1205,732 1205,645",
            textPoints : [1220,700]
        },
        {
            unit : "102",
            unitType : "Room Type - B",
            level: "1",
            unitStatus : "sold",
            unitPrice : "25568000",
            points: "942,647 1200,644 1200,738 1140,758 872,749 873,687 942,681",
            textPoints : [1030,710]
        },
        {
            unit : "103",
            level: "1",
            unitType : "Room Type - C",
            unitStatus : "available",
            unitPrice : "15636000",
            points: "711,645 935,645 935,683 871,686 871,752 614,740 614,683 712,678",
            textPoints : [772,702]
        },
        {
            unit : "104",
            level: "1",
            unitType : "Room Type - D",
            unitStatus : "on-hold",
            unitPrice : "16592000",
            points: "520,647 708,647 708,678 613,683 613,742 395,726 395,682 520,676",
            textPoints : [530,700]
        },
        {
            unit : "105",
            unitType : "Room Type - E",
            unitStatus : "available",
            unitPrice : "15344000",
            points: "365,647 515,647 515,676 395,680 395,733 301,730 301,678 365,676",
            textPoints : [315,720]
        },
        {
            unit : "106",
            level: "1",
            unitType : "Room Type - F",
            unitStatus : "available",
            unitPrice : "20784000",
            points: "239,647 360,647 360,675 294,677 294,735 177,731 177,678 239,673",
            textPoints : [220,720]
        },
        {
            unit : "201",
            level: "2",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "5964000",
            points: "1242,571 1287,580 1287,642 1242,640",
            textPoints : [1255,624]
        },
        {
            unit : "202",
            level: "2",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "5040000",
            points: "1217,562 1241,571 1240,641 1217,641",
            textPoints : [1221,624]
        },
        {
            unit : "203",
            level: "2",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "4200000",
            points: "1186,548 1216,564 1216,640 1185,638",
            textPoints : [1187,624]
        },
        {
            unit : "204",
            level: "2",
            unitType : "Room Type - U",
            unitStatus : "sold",
            unitPrice : "9600000",
            points: "970,558 1180,548 1180,639 954,639 954,608 970,608",
            textPoints : [1030,610]
        },
        {
            unit : "205",
            level: "2",
            unitType : "Room Type - J",
            unitStatus : "available",
            unitPrice : "10800000",
            points: "729,568 908,560 908,640 708,640 707,613 729,613",
            textPoints : [772,615]
        },
        {
            unit : "206",
            level: "2",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "8480000",
            points: "594,574 677,569 677,640 571,640 572,616 594,616",
            textPoints : [605,618]
        },
        {
            unit : "207",
            level: "2",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "8480000",
            points: "476,577 548,574 548,642 453,642 453,618 478,618",
            textPoints : [485,622]
        },
        {
            unit : "208",
            level: "2",
            unitType : "Room Type - K",
            unitStatus : "on-hold",
            unitPrice : "8480000",
            points: "375,584 435,581 435,642 348,642 348,620 376,620",
            textPoints : [379,622]
        },
        {
            unit : "209",
            level: "2",
            unitType : "Room Type - LOFT C",
            unitStatus : "available",
            unitPrice : "7560000",
            points: "269,587 336,584 336,643 238,643 238,623 269,623",
            textPoints : [275,625]
        },
        {
            unit : "210",
            level: "2",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "5712000",
            points: "12,650 137,650 137,717 12,717",
            textPoints : [55,690]
        },
        {
            unit : "301",
            level: "3",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "6064000",
            points: "1224,489 1286,515 1286,579 1221,561",
            textPoints : [1232,545]
        },
        {
            unit : "302",
            level: "3",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "5140000",
            points: "1168,456 1187,459 1220,489 1220,562 1184,548 1168,547",
            textPoints : [1171,519]
        },
        {
            unit : "303",
            level: "3",
            unitType : "Room Type - F",
            unitStatus : "on-hold",
            unitPrice : "12600000",
            points: "970,470 1164,455 1164,548 953,556 953,522 972,526",
            textPoints : [1030,522]
        },
        {
            unit : "304",
            level: "3",
            unitType : "Room Type - J",
            unitStatus : "available",
            unitPrice : "10900000",
            points: "729,496 906,481 906,557 707,564 707,540 729,540",
            textPoints : [772,535]
        },
        {
            unit : "305",
            level: "3",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "8580000",
            points: "595,509 679,499 679,570 571,570 571,547 595,547",
            textPoints : [605,550]
        },
        {
            unit : "306",
            level: "3",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "8580000",
            points: "477,516 548,511 548,575 453,574 453,554 478,553",
            textPoints : [480,555]
        },
        {
            unit : "307",
            level: "3",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "8580000",
            points: "375,526 435,519 435,580 349,580 349,561 375,561",
            textPoints : [379,560]
        },
        {
            unit : "308",
            level: "3",
            unitType : "Room Type - LOFT C",
            unitStatus : "on-hold",
            unitPrice : "7660000",
            points: "270,534 339,529 339,584 237,587 237,564 269,562",
            textPoints : [275,570]
        },
        {
            unit : "309",
            level: "3",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "5812000",
            points: "16,525 144,525 144,594 16,594",
            textPoints : [55,572]
        },
        {
            unit : "401",
            level: "4",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "6164000",
            points: "1227,418 1288,457 1287,514 1222,486",
            textPoints : [1232,485]
        },
        {
            unit : "402",
            level: "4",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "5240000",
            points: "1169,364 1188,367 1221,416 1221,483 1187,453 1168,451",
            textPoints : [1170,440]
        },
        {
            unit : "403",
            level: "4",
            unitType : "Room Type - I",
            unitStatus : "on-hold",
            unitPrice : "12700000",
            points: "971,385 1165,364 1165,453 956,468 955,440 971,444",
            textPoints : [1030,430]
        },
        {
            unit : "404",
            level: "4",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "11000000",
            points: "729,422 907,402 909,475 706,490 706,463 730,465",
            textPoints : [772,460]
        },
        {
            unit : "405",
            level: "4",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "8680000",
            points: "596,439 677,429 678,494 571,500 571,477 595,478",
            textPoints : [605,475]
        },
        {
            unit : "406",
            level: "4",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "8,892,870",
            points: "376,465 548,443 548,504 350,519 350,500 376,500",
            textPoints : [420,495]
        },
        {
            unit : "407",
            level: "4",
            unitType : "Room Type - L",
            unitStatus : "on-hold",
            unitPrice : "11800000",
            points: "268,475 338,467 338,523 238,527 238,505 270,505",
            textPoints : [275,505]
        },
        {
            unit : "501",
            level: "5",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "6264000",
            points: "1231,346 1286,396 1286,454 1230,414",
            textPoints : [1232,415]
        },
        {
            unit : "502",
            level: "5",
            unitType : "Room Type - F",
            unitStatus : "on-hold",
            unitPrice : "5340000",
            points: "1165,272 1188,275 1228,343 1223,408 1190,364 1168,359",
            textPoints : [1170,350]
        },
        {
            unit : "503",
            level: "5",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "12800000",
            points: "971,296 1137,270 1162,271 1163,359 954,384 952,353 972,359",
            textPoints : [1030,340]
        },
        {
            unit : "504",
            level: "5",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "11100000",
            points: "730,349 909,321 909,390 707,416 705,386 730,391",
            textPoints : [772,380]
        },
        {
            unit : "505",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "8780000",
            points: "594,371 675,357 675,418 573,431 573,407 594,412",
            textPoints : [605,405]
        },
        {
            unit : "506",
            level: "5",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "8780000",
            points: "478,389 547,378 548,433 455,445 455,422 478,425",
            textPoints : [485,425]
        },
        {
            unit : "507",
            level: "5",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "8780000",
            points: "376,404 435,396 435,445 349,457 350,438 375,439",
            textPoints : [379,435]
        },
        {
            unit : "508",
            level: "5",
            unitType : "Room Type - L",
            unitStatus : "available",
            unitPrice : "11900000",
            points: "269,422 337,410 338,459 239,471 239,452 269,448",
            textPoints : [275,450]
        },
        {
            unit : "601",
            level: "6",
            unitType : "Room Type - PH G",
            unitStatus : "available",
            unitPrice : "13500000",
            points: "1221,183 1248,230 1289,274 1287,391 1222,328",
            textPoints : [1232,315]
        },
        {
            unit : "602",
            level: "6",
            unitType : "Room Type - PH-G",
            unitStatus : "sold",
            unitPrice : "7875000",
            points: "1163,86 1189,95 1220,182 1220,326 1188,273 1164,267",
            textPoints : [1165,235]
        },
        {
            unit : "603",
            level: "6",
            unitType : "Room Type - PH I",
            unitStatus : "sold",
            unitPrice : "30000000",
            points: "972,124 1128,84 1157,86 1158,265 958,298 956,271 972,272",
            textPoints : [1030,220]
        },
        {
            unit : "604",
            level: "6",
            unitType : "Room Type - PH J",
            unitStatus : "sold",
            unitPrice : "17020500",
            points: "731,203 905,162 903,304 708,338 707,312 729,316",
            textPoints : [772,265]
        },
        {
            unit : "605",
            level: "6",
            unitType : "Room Type - PH K 605",
            unitStatus : "available",
            unitPrice : "16500000",
            points: "595,236 671,214 674,343 571,359 571,335 595,340",
            textPoints : [605,300]
        },
        {
            unit : "606",
            level: "6",
            unitType : "Room Type - PH K 606",
            unitStatus : "available",
            unitPrice : "16500000",
            points: "478,263 544,244 547,363 453,379 452,356 476,360",
            textPoints : [485,320]
        },
        {
            unit : "607",
            level: "6",
            unitType : "Room Type - PH K 607",
            unitStatus : "available",
            unitPrice : "16500000",
            points: "379,284 434,271 434,380 350,394 350,374 376,375",
            textPoints : [379,345]
        },
        {
            unit : "608",
            level: "6",
            unitType : "Room Type - F",
            unitStatus : "sold",
            unitPrice : "18165000",
            points: "265,306 338,291 339,395 236,412 234,391 268,387",
            textPoints : [275,365]
        },
    ]
    


    return (
        <>
            <BuildingHero
                background="/img/tower-4/tower4-2.webp"
                title="Tower 4"
            />
            <div className="container w-11/12 mx-auto mt-16">
                <div>
                    <h1 className="text-center text-5xl">
                        ROOF TOP, COMMERCIAL AREA AND THE BEST AMENITIES.
                    </h1>
                    <div className="mx-auto flex justify-center flex-col md:flex-row gap-5 mt-16">
                        <div className="text-center  md:w-1/2 max-w-[500px] mx-auto">
                            <p className="italic">
                                Our tower 4 offers incredible views, commodity
                                and the best amenities:
                            </p>
                            <div>
                                <ul className="grid grid-cols-2 md:grid-cols-3 justify-between gap-1 mt-7 mb-10">
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaSwimmingPool className="text-4xl text-[#212529]" />
                                        <p>Pools</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaGlassMartini className="text-4xl text-[#212529]" />
                                        <p>Restaurant Bar</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaTableTennis className="text-4xl text-[#212529]" />
                                        <p>Padel court</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaSun className="text-4xl text-[#212529]" />
                                        <p>Sunbathing areas</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaShower className="text-4xl text-[#212529]" />
                                        <p>Showers & Toilets</p>
                                    </li>
                                    <li className="flex gap-3 items-center mb-3 justify-center flex-col">
                                        <FaStoreAlt className="text-4xl text-[#212529]" />
                                        <p>Commercial area</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/img/5.webp"
                                alt=""
                                height={500}
                                width={600}
                                className="block mx-auto"
                            />
                        </div>
                    </div>
                </div>
                <KeyLocations />
                <RoomSwiper roomData={data} title="Our Room Types" />
                <RoomSwiper roomData={dataPenthouses} title="Our Penthouses" />

                <h2>Explore Our Tower in Virtual Reality</h2>
                <iframe
                    src="https://my.matterport.com/show/?m=VHGUYVCKr92&nt=1"
                    width="100%"
                    height="600"
                ></iframe>

                <div className="mt-20">
                    <h2>Inventory</h2>
                    <div className="relative">
                        <Image src="/img/tower-4/tower4-2.webp" alt="Tower 4 - QSM" width={900} height={700} className="w-full"/>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 left-0 right-0 bottom-0"
                            viewBox="0 0 1600 900"
                        >
                            {
                                units.map((unit,i) => ((
                                    <ApartmentInventory key={i} status={unit.unitStatus} points={unit.points} apartmentNumber={unit.unit} x={unit.textPoints[0]} y={unit.textPoints[1]} onPopupOpen={() => openPopup(unit)}/>
                                )))
                            }
                        </svg>
                    </div>
                </div>
                <ContacUs className="mt-20" />
            </div>

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                {selectedUnit && selectedUnitType && ( // Comprueba si hay una unidad seleccionada
                <>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                        <h3>Unit {selectedUnit.unit} Details</h3>
                        <div className="flex items-center gap-1 flex-wrap">
                            <p className={`inline-block uppercase font-bold p-1 rounded-md text-white my-2 ${getColorStatus(selectedUnit.unitStatus)}`}>{selectedUnit.unitStatus}</p>
                            <p className="font-bold bg-main text-white p-1 my-2 rounded-md uppercase">{selectedUnit.unitType}</p>
                        </div>
                        <p><strong>Bedroom(s):</strong> {selectedUnitType.bedrooms}</p>
                        <p><strong>Bathroom(s):</strong> {selectedUnitType.bathroom}</p>
                        <p><strong>Level:</strong> {selectedUnit.level}</p>
                        <p><strong>Tower:</strong> 4</p>
                        <p><strong>Size:</strong> {selectedUnitType.size}</p>

                        <table className="flex items-center gap-2 border-collapse">
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 py-1 px-3"></td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        M2
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        SQF
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 py-1 px-3">
                                        Interior
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.interiorm}
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.interiorsqf}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 py-1 px-3">
                                        Terrace
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.terracem}
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.terracesqf}
                                    </td>
                                </tr>
                                { selectedUnitType.roofmp && (
                                    <>
                                                                     <tr>
                                    <td className="border border-slate-300 py-1 px-3">
                                        Roof Top
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.roofmp}
                                    </td>
                                    <td className="border border-slate-300 py-1 px-3">
                                        {selectedUnitType.roofsqf}
                                    </td>
                                </tr>
                                    </>
                                )


                                }
                            </tbody>
                        </table>
                        <div className="mt-5">
                        { selectedUnit.unitStatus === "available" && (
                                <>
                                <h3>Price Plans</h3>
                            <div>
                                {/* <button className={`font-bold px-2 py-1 rounded-md ${selectePrice == "discount" ? "text-white bg-main" : null}`} onClick={() => handlePriceOption('discount')}>5% Discount</button> */}
                                <button className={`font-bold px-2 py-1 rounded-md text-white bg-main`} onClick={() => handlePriceOption('list-price')}>List Price</button>
                                <div>
                                    <table className={`table-auto border my-4 `}>
                                        <tr>
                                            <td className="border p-2 text-center bg-main text-white" colSpan={2}>
                                                <h5 className="uppercase font-semibold">List Price</h5>
                                                <p className="text-lg font-semibold mb-0 text-white">{`$${formattedPrice(selectedUnit.unitPrice)} MXN`}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Down Payment (35%)</h5>
                                                <small>Payment at signature of the purchase-sale contract</small>
                                            </td>
                                            <td className="border p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.35)} MXN`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Monthly Payments (35%)</h5>
                                                <small>In monthly payments during construction, no interest</small>
                                            </td>
                                            <td className="border p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.35)} MXN`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Closing Payment (30%)</h5>
                                                <small>In monthly payments during construction, no interest</small>
                                            </td>
                                            <td className="borde p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.30)} MXN`}
                                            </td>
                                        </tr>
                                    </table>
                                    {/* <table className={`table-auto border my-4 ${selectePrice == "discount" ? null : "hidden"}`}>
                                        <tr>
                                            <td className="border p-2 text-center bg-main text-white" colSpan={2}>
                                                <h5 className="uppercase font-semibold">5% Discount Price</h5>
                                                <p className="text-lg font-semibold mb-0 text-white line-through">{`$${formattedPrice(selectedUnit.unitPrice)} MXN`}</p>
                                                <p className="text-lg font-semibold mb-0 text-white">{`$${formattedPrice(selectedUnit.unitPrice, 0.95)} MXN`}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Discount(5%)</h5>
                                            </td>
                                            <td className="border p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.05)} MXN`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Down Payment (35%)</h5>
                                                <small>Payment at signature of the purchase-sale contract</small>
                                            </td>
                                            <td className="border p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.95,0.35)} MXN`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2">
                                                <h5>Closing Payment (65%)</h5>
                                                <small>In monthly payments during construction, no interest</small>
                                            </td>
                                            <td className="borde p-2">
                                                {`$${formattedPrice(selectedUnit.unitPrice,0.95,0.65)} MXN`}
                                            </td>
                                        </tr>
                                    </table> */}
                                </div>
                            </div>  
                            <ul className="text-sm list-disc list-inside">
                                <li>Prices, discounts and payment plans are subject to modifications without previous notice.</li>
                                <li>The Purchase-Sale agreement must be signed within 10 days after signing of the Purchase Request</li>
                                <li>If the Purchase-Sale agreement is not signed the property will be released and Back on the Market</li>
                            </ul>


                                </>
                                )
                            
                            }

                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h3>Plan</h3>
                        <Image src={selectedUnitType.plan} width={500} height={300} alt={selectedUnitType.title}/>

                        <div className="mt-5">
                            <h3>Gallery</h3>
                            <Swiper>
                                <SwiperSlide>
                                    <Image src={selectedUnitType.gallery[0]} width={500} height={300} alt={selectedUnitType.title} className="h-auto"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={selectedUnitType.gallery[1]} width={500} height={300} alt={selectedUnitType.title} className="h-auto"/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>

                </>
                )}
            </Popup>
        </>
    );
};

export default Page;
