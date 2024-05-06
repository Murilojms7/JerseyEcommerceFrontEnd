"use server"
import { redirect } from "next/navigation"

interface ValidationError {
    campo: string,
    mensagem: string
}


export async function create(prevState: any, formData: FormData){

    const data = {
        nome: formData.get("nome"),
        marca: formData.get("marca"),
        tamanho: formData.get("tamanho"),
        preco: formData.get("preco"),
        foto: formData.get("foto"),
    }

    const options = {
        method:"post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(process.env.API_BASE_URL + "/camisa", options)

    if (resp.ok){
        redirect("/futebol")
    }

    if (resp.status == 400){
        const data : ValidationError[] = await resp.json()
        return {
            message: data.find(erro=> erro.campo == "nome")?.mensagem
        }
    }
}