import NavBar from "@/components/NavBar";
import Banner from "@/app/banner.png"
import Carrinho from "@/components/Carrinho"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <NavBar active={"paginaInicial"}/>
      
      <div className="">
        <img src="@/app/banner.png" alt="Banner Principal"/>
      </div>
      
      <div className="">
      <h1>Lançamentos</h1>
      </div>

      <div className="flex gap-48">
        <img src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg" width={250}/>
        
      </div>
    </main>
  );
}