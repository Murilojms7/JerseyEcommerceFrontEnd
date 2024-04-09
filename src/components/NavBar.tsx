import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import Carrinho from "@/components/Carrinho"
import Script from "next/script";
interface NavBarProps{
    active: "basquete" | "futebol" | "login" | "paginaInicial"
}
export default function NavBar(props: NavBarProps ){
    const{ active } = props 
    const classActive = "border-b-4 border-pink-500 pb-2"

    return(
        <nav className="bg-zinc-800 w-full justify-between pt-5 shadow-2xl font-bold">
        <div className="flex items-center px-80 gap-20"> 
            <div className="w-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/150" alt="Avatar do usuário" />
                
            </div>

            <h1 className="text-2xl text-center">Sports Jersey<br/> Kingdom</h1>

            <div className="bg-zinc-500 rounded-full basis-1/3 justify-between flex size-12 py-3 px-10"> 
                <h1 className="opacity-40">Procurar Camisa</h1>
                <h1 className="opacity-40"><Search/></h1>
            </div>

            <button id="botaoCarrinho" className="flex gap-3 bg-zinc-500 rounded-full py-2 px-2">
                <Carrinho/>
                <ShoppingCart/>
                <h3>Carrinho</h3>
            </button>
        </div>
        
        <ul className="flex justify-between px-96">
        <li className={active == "paginaInicial" ? classActive : ""}><Link href="/">Pagina Inicial</Link></li>
          <li className={active == "basquete" ? classActive : ""}><Link href="/basquete">Basquete</Link></li>
          <li className={active == "futebol" ? classActive : ""}><Link href="/futebol">Futebol</Link></li>
          <li className={active == "login" ? classActive : ""} ><Link href="/login">Login</Link></li>
        </ul>
      </nav>

    ) 
}
