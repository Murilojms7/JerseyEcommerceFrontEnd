import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import { destroy } from "@/app/actions/destroy"
import { CamisaItem } from "./CamisasItemRemove";

export default async function Remover() {

  async function getCamisas (){
    const resp = await fetch("http://localhost:8080/camisa", {next:{ revalidate: 0 }})
    return await resp.json()
  }
  const camisas : Array<Camisa> = await getCamisas()

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-600">
      <NavBar active={"remover"}/>


      <div className="my-8 bg-gray-700 rounded-2xl p-4 mx-16">
        <h2 className="text-center text-4xl font-bold text-gray-200 pb-6">Remover Camisa</h2>

        <div className="flex flex-wrap justify-center gap-32 font-bold">
          {camisas.map(camisa => <CamisaItem camisa={camisa} /> )}
        </div>
      </div>

    </main>
  );
}