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
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className=" flex h-16 items-center justify-around  ">
                    <div className=" ">
                        <h1 className="text-2xl text-center text-white font-bold">Sports Jersey<br/> Kingdom</h1>
                    </div>

                    <div className="hidden sm:block ">
                        <ul className="flex">
                            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link href="/">Pagina Inicial</Link></li>
                            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link href="/basquete">Basquete</Link></li>
                            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"><Link href="/futebol">Futebol</Link></li>
                            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" ><Link href="/login">Login</Link></li>
                        </ul>
                    </div>
                
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-zinc-800 p-1 bg-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <h1>Carrinho</h1>
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">View notifications</span>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    ) 
}
