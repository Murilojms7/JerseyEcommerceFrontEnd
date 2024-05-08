import NavBar from "@/components/NavBar";
import { CamisaItem } from "./CamisasItem";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { get } from "../actions/get";

interface CamisaDataProps {
  camisass: {
      content: Array<Camisa>
  },
  vendas: Array<Venda>
}

export default async function Futebol({camisass, vendas}: CamisaDataProps) {


  async function getCamisas (){
    const resp = await fetch("http://localhost:8080/camisa", {next:{ revalidate: 0 }})
    return await resp.json()
  }
  const camisas : Array<Camisa> = await getCamisas()

  const [totalPages, setTotalPages] = useState(8)
  const [page, setPage] = useState(1)
  const [filteredMovimentacoes, setFilteredMovimentacoes] = useState(camisass.content)
  const [filter, setFilter] = useState({ venda: '', mes: new Date().getMonth() + 1 })

  const handlePageChange = (page: number) => {
    setPage(page);
}
  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await get(filter.venda, Number(filter.mes), page)
            setFilteredMovimentacoes(data.content)
            setTotalPages(data.totalPages)
        } catch (error) {
            throw new Error("falha ao filtrar movimentações.")
        }
    };

    fetchData();
  }, [filter, page]);



  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-600">
      <NavBar active={"futebol"}/>
      <div className="my-8 bg-gray-700 rounded-2xl p-4 mx-16">
        <h1 className="text-center text-4xl font-bold text-gray-200 pb-6">Futebol</h1>

        <div className="flex flex-wrap justify-center gap-32 font-bold">
        {camisas.map(camisa => <CamisaItem camisa={camisa} /> )} 
        {filteredMovimentacoes.map(camisa =>
                    <CamisaItem key={camisa.id} camisa={camisa} />
                )}
        </div>

        <Pagination 
                onChange={handlePageChange}
                isCompact 
                showControls 
                total={totalPages} 
                page={1}
                className="mt-6"
             />


      </div>
      
    </main>
  );
}