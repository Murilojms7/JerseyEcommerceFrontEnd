import NavBar from "@/components/NavBar";
import { get } from "../actions/get";
import { CamisasTodasRemover } from "./camisasTodasRemover";
export default async function Remover() {
  const camisas = await get()
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-600">
      <NavBar active={"remover"}/>

      <div className="my-8 bg-gray-700 rounded-2xl p-4 mx-16">
        <h2 className="text-center text-4xl font-bold text-gray-200 pb-6">Remover Camisa</h2>

        <div className="flex flex-wrap justify-center gap-32 font-bold">
          <CamisasTodasRemover camisas={camisas} />
        </div>
      </div>

    </main>
  );
}