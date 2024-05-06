import NavBar from "@/components/NavBar";
import { CamisaItem } from "./CamisasItem";
import Footer from "@/components/Footer";
export default async function Futebol() {
  async function getCamisas (){
    const resp = await fetch("http://localhost:8080/camisa", {next:{ revalidate: 0 }})
    return await resp.json()
  }
  const camisas : Array<Camisa> = await getCamisas()

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-600">
      <NavBar active={"futebol"}/>
      <div className="my-8 bg-gray-700 rounded-2xl p-4 mx-16">
        <h1 className="text-center text-4xl font-bold text-gray-200 pb-6">Futebol</h1>

        <div className="flex flex-wrap justify-center gap-32 font-bold">
        {camisas.map(camisa => <CamisaItem camisa={camisa} /> )}
        </div>
      </div>
      <Footer/>
    </main>
  );
}