import NavBar from "@/components/NavBar";
import { CamisasTodas } from "./camisasTodas";
import { get } from "../actions/get";

export default async function Futebol() {
  
  const camisas = await get()
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-600">
      <NavBar active={"futebol"}/>
      
      <CamisasTodas camisass={camisas} />
    </main>
  );
}
