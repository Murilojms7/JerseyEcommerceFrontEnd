import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";


interface NavBarProps{
    active: "basquete" | "futebol" | "login" | "paginaInicial" | "cadastrar" | "remover"
}
export default function NavBar(props: NavBarProps ){
    const{ active } = props 
    const classActive = "border-b-4 border-gray-400 pb-2 px-2"

    return(
        <nav className="bg-gray-700 w-full py-3 shadow-xl">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className=" flex h-16 items-center justify-around">
                    <div>
                        <h1 className="text-2xl text-center text-white font-bold">Sports Jersey<br/>Kingdom</h1>
                    </div>
                    <div className="hidden sm:block">
                        <ul className="flex gap-8 ">
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-base font-bold "><Link href="/" className={active == "paginaInicial" ? classActive : ""}>Pagina Inicial</Link></li>
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-base font-bold"><Link href="/basquete" className={active == "basquete" ? classActive : ""}>Basquete</Link></li>
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-base font-bold"><Link href="/futebol" className={active == "futebol" ? classActive : ""}>Futebol</Link></li>
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-base font-bold"> | </li>
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-base font-bold" ><Link href="/remover" className={active == "remover" ? classActive : ""}>Remover</Link></li>
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-base font-bold" ><Link href="/cadastro" className={active == "cadastrar" ? classActive : ""}>Cadastrar</Link></li>
                            <li className="text-gray-200 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-base font-bold" ><Link href="/login" className={active == "login" ? classActive : ""}>Login</Link></li>
                        </ul>
                    </div>
                    
                    <div className=" text-baseabsolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                        <button type="button" className="flex font-bold relative rounded-full  p-2  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <ShoppingCart/>
                        <h1 className="pl-1">Carrinho</h1>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    ) 
}
