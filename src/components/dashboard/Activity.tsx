import { TableTeams } from "./TableTeams";
import { TeamBoxMobile } from "./TeamBoxMobile";

export function Activity(){
 return(
    <div className="w-full flex flex-col bg-white shadow-lg rounded-lg gap-4 p-6">
      <strong className="text-xl text-black font-bold">Atividades</strong>
      <strong className="text-sm text-gray-400 font-normal">
      <span className="text-sm text-green-600 font-bold">+57%</span>  em comparação com ao último mês</strong>
      <TableTeams />
      <TeamBoxMobile />
    </div>
  )
}