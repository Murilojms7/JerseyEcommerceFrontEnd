interface CamisaItemProps {
    camisa : Camisa
}

export function CamisaItem({ camisa }: CamisaItemProps) {
   
    return (
            <div className="bg-gray-800 rounded-xl pb-2">
            <img className="border-8 rounded-xl border-gray-800 " src={camisa.foto} width={240}/>
            <h3 className="flex justify-center px-2">{camisa.nome}</h3>
            <div className="flex justify-center rounded-xl">
                <h3 className="text-zinc-400 pr-4 line-through">R$ 230</h3>
                <h3>R$ {camisa.preco}</h3>
              </div>
          </div> 
          
    )
}