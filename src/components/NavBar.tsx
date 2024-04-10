import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import Script from "next/script";
import Image from "next/image";

interface NavBarProps{
    active: "basquete" | "futebol" | "login" | "paginaInicial"
}
export default function NavBar(props: NavBarProps ){
    const{ active } = props 
    const classActive = "border-b-4 border-pink-500 pb-2"

    return(
        <nav className="bg-zinc-800 w-full">
            <div className="mx-auto  px-2 sm:px-6 lg:px-8">
                <div className=" flex h-16 ">

                    <div className="flex items-center ">
                        <Image src="/banner.png" alt="logo" className="dark:invert" width={100} height={24} priority/>
                    </div>

                    <div>
                        <h1 className="text-2xl text-center text-white font-bold">Sports Jersey<br/> Kingdom</h1>
                    </div>

                    <div className="hidden sm:block items-center  ">
                        <ul className="flex">
                            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link href="/">Pagina Inicial</Link></li>
                            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link href="/basquete">Basquete</Link></li>
                            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link href="/futebol">Futebol</Link></li>
                            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" ><Link href="/login">Login</Link></li>
                        </ul>
                    </div>
                
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">View notifications</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    ) 
}
