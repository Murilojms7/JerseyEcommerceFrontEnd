"use client"
import NavBar from "@/components/NavBar";
import { Button, Input } from "@nextui-org/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import AutoCompleteTamanho from "./AutoCompleteTamanho";
import { useFormState } from "react-dom";
import { create } from "../actions/create";


const initialState = {
    message: ""
}

export default function FormCadastro() {
    const [state, formAction] = useFormState(create, initialState)

    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-600">
        <NavBar active={"cadastrar"}/>
            <form action={formAction} className="flex flex-col gap-5 bg-gray-700 p-9 m-20 rounded w-96">
                <h2 className="text-2xl font-bold">Cadastrar Camisa</h2>
                    <Input name="nome" placeholder="Nome" labelPlacement="outside" className=" text-slate-950 font-bold" isInvalid={state?.message != ""} errorMessage={state?.message}/>                    
                    <Input name="marca" placeholder="Marca" labelPlacement="outside" className=" text-slate-950 font-bold" isInvalid={state?.message != ""} errorMessage={state?.message}/>
                    <Input name="preco" placeholder="Preço" labelPlacement="outside"  className=" text-slate-950 font-bold" isInvalid={state?.message != ""} errorMessage={state?.message}/>
                    <Input name="foto" placeholder="Foto" labelPlacement="outside" className=" text-slate-950 font-bold" isInvalid={state?.message != ""} errorMessage={state?.message}/> 
                    <AutoCompleteTamanho />
                <div className="flex justify-around font-bold ">
                    <Link href="/" >
                        <Button variant="bordered" className="bg-gray-800 w-24 h-9 rounded-2xl hover:bg-gray-500">cancelar</Button>
                    </Link>
                    <Button type="submit" color="primary" className="bg-gray-800 w-24 h-9 rounded-2xl hover:bg-gray-500">salvar</Button>
                </div>

            </form>
            
        </main>

    );
}