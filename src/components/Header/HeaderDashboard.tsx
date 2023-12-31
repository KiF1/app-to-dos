import { ClipboardEdit, Home } from "lucide-react";

interface Props{
  title: string;
  icon: string;
}

export function HeaderDashBoard({ title, icon }: Props){
  return(
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {icon === 'home' ?  <Home className="w-4 h-4" color="rgb(106, 118, 138)" /> :  <ClipboardEdit className="w-4 h-4" color="rgb(106, 118, 138)" />}
        <strong className="text-sm font-normal text-black">| {title}</strong>
      </div>
      <strong className="text-xl font-bold text-black">{title}</strong>
    </div>
  )
}