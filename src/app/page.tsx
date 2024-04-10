import NavBar from "@/components/NavBar";
import Banner from "@/app/banner.png"
 import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-400">
      <NavBar active={"paginaInicial"}/>
      
      <div className="">
        <Image
              src="/banner.png"
              alt="logo"
              className="dark:invert pt-16  "
              width={1000}
              height={24}
              priority
        />
      </div>
      
      <div className="p-14">
      <h1 className="rounded-xl text-3xl text-center text-white font-bold bg-zinc-700 p-2  shadow-xl">Lançamentos</h1>
      </div>

      <div className="flex gap-20">
        <div>
          <img className="border-2 rounded-md border-zinc-700 " src="/camisa-alemanha.png" width={240}/>
        </div>
        
        <img className="border-2 rounded-md border-zinc-700" src="/camisa-coreia.png" width={240}/>
        <img className="border-2 rounded-md border-zinc-700" src="/camisa-holanda.png" width={240}/>
        <img className="border-2 rounded-md border-zinc-700" src="/camisa-portugal.png" width={240}/>
      </div>
    </main>
  );
}