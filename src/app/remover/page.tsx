import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import { destroy } from "@/app/actions/destroy"
export default async function Remover() {
//AQUIII
  function handleDelete(){
    toast.promise(
        destroy(camisa.id),
         {
           loading: "apagando...",
           success: "apagado com sucesso",
           error: "erro ao apagar",
         }
       );

    const initialState = {
      message: ""
  }

  const [state, formAction] = useFormState(destroy, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-600">
      <NavBar active={"remover"}/>
      
      <h1 className="font-bold size-20">Remover</h1>

      <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 rounded">
                <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>

                <Input 
                    name="nome"
                    label="Nome"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />

                <AutocompleteIcon />

                <div className="flex justify-around">
                    <Link href="/categorias">
                        <Button variant="bordered">cancelar</Button>
                    </Link>

                    <SubmitButton />
                </div>

            </form>



      <Footer/>
    </main>
  );
}