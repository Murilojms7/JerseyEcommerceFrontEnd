
import NavBar from "@/components/NavBar";
 import Image from "next/image";
 import { CamisaItem } from "../app/futebol/CamisasItem";
export default async function Home() {
  async function getCamisas (){
    const resp = await fetch("http://localhost:8080/camisa", {next:{ revalidate: 0 }})
    return await resp.json()
  }
  const camisas : Array<Camisa> = await getCamisas()

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-600">
      <NavBar active={"paginaInicial"}/>
      
      <div className="">
        <Image
              src="/banner.png"
              alt="logo"
              className="pt-16"
              width={1000}
              height={24}
              priority
        />
      </div>
      
      <div className="p-14">
      <h1 className="rounded-xl text-3xl text-center text-white font-bold bg-zinc-700 p-2 px-7  shadow-xl">Lançamentos</h1>
      </div>

      <div className="flex gap-20">
        
       </div>
       
    </main>
  );
}