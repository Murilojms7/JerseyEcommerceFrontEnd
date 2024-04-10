import NavBar from "@/components/NavBar";
import Banner from "@/app/banner.png"
 import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
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
      <h1 className="text-2xl text-center text-white font-bold">Lançamentos</h1>
      </div>

      <div className="flex gap-20">
        <img src="/camisa-alemanha.png" width={250}/>
        <img src="/camisa-coreia.png" width={250}/>
        <img src="/camisa-holanda.png" width={250}/>
        <img src="/camisa-portugal.png" width={250}/>
      </div>
    </main>
  );
}