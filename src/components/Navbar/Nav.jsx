
import { useState } from "react";
import Link from "../Link/Link"
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Nav = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ]

    return (
        <div className="bg-blue-300 text-black text-lg font-medium">
            <button onClick={()=> setOpen(!open)} className="text-3xl md:hidden ml-1 mt-1">
                {
                    open === true ? <RxCross2 /> : <IoMenu  />
                }
            </button>
            
            <ul className={`md:flex absolute md:static duration-500 ${open?'left-2':'-left-52'} bg-rose-400  ml-6 md:ml-0 p-2 py-4 rounded-xl md:rounded-none shadow-2xl`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>

    )
}

export default Nav