import { UserCheck2 } from "lucide-react";

export function BoxStatistics(){
  return(
    <div className="w-full bg-white rounded-lg shadow-lg flex flex-col gap-4 p-6">
      <div className="w-full flex justify-between items-center border-b-2 border-b-gray-200 pb-2">
        <div className="px-5 py-4 bg-red rounded-lg relative top-[-3rem] flex justify-center items-center">
          <UserCheck2 color="#ffff" />
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-400 font-normal">Cadastros concluídos</span>
          <strong className="text-3xl text-red font-bold">2000</strong>
        </div>
      </div>
      <strong className="text-sm text-gray-400 font-normal"><span className="text-sm text-green-600 font-bold">+57%</span> em comparação com a última semana</strong>
    </div>
  )
}