"use server"

import { redirect } from "next/navigation"


export async function destroy(id: number) {

    await new Promise(r => setTimeout(r, 4000))

    const resp = await fetch(process.env.API_BASE_URL + "/camisa/" + id, { method: "DELETE" })

    if (resp.ok){
        redirect("/camisa")
    }

    if(!resp.ok){
        throw Error("erro ao apagar")
    }

}