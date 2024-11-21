/* eslint-disable @typescript-eslint/no-unused-vars */
import { Evento } from "core"
import Informacao from "../shared/Informacao"

export interface InformacoesEventosProps {
    evento: Evento
    classname?: string
}

export default function InformacoesEventos(props: InformacoesEventosProps) {

    const { evento } = props

    return (
        <div className={`flex flex-col gap-2 ${props.classname ?? ""}`}>
            <div className="flax-1 flex items-center border border-zinc-600 px-6 py-3 rounded-lg gap-3">
                <span className="text-2xl font-black">{evento.alias}: </span>
                <span className="text-xl text-zinc-300">{evento.nome}</span>
            </div>
           <div className="flex gap-2">
             <Informacao label="Data:">
                <span>
                    {new Date(evento.data!).toLocaleDateString()}
                    {" às "}
                    {new Date(evento.data!).toLocaleTimeString()}
                </span>
             </Informacao>
              <Informacao label="Local:">{evento.local}</Informacao>
           </div>
           <div>
             <Informacao label="Descrição">{evento.descricao}</Informacao>
           </div>
        </div>
    )
}