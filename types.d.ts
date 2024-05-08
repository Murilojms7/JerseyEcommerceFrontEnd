interface Camisa {
    "id": number,
    "nome": string,
    "marca": string,
    "tamanho": string,
    "preco": float, //Erro pode estar aqui se não pegar a camisa 
    "foto": string
}

interface Venda {
    id: number,
    codeRastreio: string,
    nomeCliente: string,
    produto: string,
    endereco: string,
    valor: float,
    enviado: boolean
}