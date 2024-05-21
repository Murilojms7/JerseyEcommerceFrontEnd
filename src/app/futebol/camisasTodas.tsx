'use client'

import NavBar from "@/components/NavBar";
import { CamisaItem } from "./CamisasItem";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { get } from "../actions/get";


interface CamisaDataProps {
  camisass: {
      content: Array<Camisa>
  },
}

export function CamisasTodas({camisass}: CamisaDataProps) {

    const [totalPages, setTotalPages] = useState(8)
    const [page, setPage] = useState(1)
    const [filteredCamisas, setFilteredCamisas] = useState(camisass.content)
    const [filter, setFilter] = useState({ venda: ''})
  
    useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await get(filter.venda, page)
              setFilteredCamisas(data.content)
              setTotalPages(data.totalPages)
          } catch (error) {
              throw new Error("falha ao filtrar movimentações.")
          }
      };
  
      fetchData();
    }, [filter, page]);
  
  const handlePageChange = (page: number) => {
      setPage(page);
  }
    return (
      <main className="flex min-h-screen flex-col items-center bg-gray-600">
        
        <div className="my-8 bg-gray-700 rounded-2xl p-4 mx-16">
          <h1 className="text-center text-4xl font-bold text-gray-200 pb-6">Futebol</h1>
  
          <div className="flex flex-wrap justify-center gap-32 font-bold">
  
          {filteredCamisas.map(camisa =>
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