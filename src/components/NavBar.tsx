import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";


interface NavBarProps{
    active: "basquete" | "futebol" | "login" | "paginaInicial"
}
export default function NavBar(props: NavBarProps ){
    const{ active } = props 
    const classActive = "border-b-4 border-pink-500 pb-2"

    return(
        <nav className="bg-zinc-700 w-full py-3 shadow-xl">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className=" flex h-16 items-center justify-around">
                    <div>
                        <h1 className="text-2xl text-center text-white font-bold">Sports Jersey<br/> Kingdom</h1>
                    </div>

                    <div className="hidden sm:block">
                        <ul className="flex">
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-bold"><Link href="/">Pagina Inicial</Link></li>
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-bold"><Link href="/basquete">Basquete</Link></li>
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-bold"><Link href="/futebol">Futebol</Link></li>
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-bold" ><Link href="/login">Login</Link></li>
                        </ul>
                    </div>
                
                    <div className="absolute inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                        <button type="button" className="flex font-bold relative rounded-full bg-gray-800 p-1 bg-zinc-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <ShoppingCart/>
                        <h1>Carrinho</h1>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    ) 
}
