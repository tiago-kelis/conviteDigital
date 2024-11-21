import { Convidado } from "core"


export interface ConvidadoItemProps {

    convidado: Convidado
}

export default function ConvidadoItem(props: ConvidadoItemProps) {
    return (
     <li className="flex justify-between bg-black/40 border border-zinc-700 px-6 py-3">
        <div className="flex flex-col">
            <span  className="text-xl font-bold">{props.convidado.nome}</span>
            <span  className="text-sm text-zinc-600">{props.convidado.email}</span>           
        </div>
        <div className="flex flex-col items-end">
                <span className="text-zinc-600 font-light">Acompanhantes</span>
                <span className="font-black text-xl">{props.convidado.qtdeAcompanhantes}</span>
            </div>
     </li>
    )
}