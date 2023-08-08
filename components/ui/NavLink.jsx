import Link from "next/link"
import { FaArrowRight, FaChevronDown } from "react-icons/fa"

const NavLink = ({children,href,title,subtitle,multi}) => {
  if(subtitle){
    return (<Link href={href} className="flex items-center gap-2"><FaArrowRight className="text-xs"/> {children}</Link>)
  } else if (title){
    return (<Link href={href} > {children}</Link>)
  } else if (multi)  {
    return (<Link href={href} className="text-white md:text-sm lg:text-base font-nav uppercase font-semibold flex items-center gap-1">{children} <FaChevronDown className="text-sm"/> </Link>)
  } else {
    return (<Link href={href} className="text-white md:text-sm lg:text-base font-nav uppercase font-semibold"> {children}</Link>)
  }
} 

export default NavLink