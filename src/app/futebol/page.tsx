import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Futebol() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <NavBar active={"futebol"}/>
      
      <h1 className="font-bold size-20">Futebol</h1>
    </main>
  );
}