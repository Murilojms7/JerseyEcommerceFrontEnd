'use server'

export async function get(camisa?: any, page?: number) {
    if (!page) page = 1
    page = page - 1

    const queryParam = new URLSearchParams()
    if (camisa) queryParam.append('camisa', camisa)
    
    queryParam.append('page', page.toString())

    const url = `${process.env.API_BASE_URL}/camisa?${queryParam.toString()}`
    const resp = await fetch(url, { next: { revalidate: 0 } })
    const json = await resp.json()
    return json

}