/* eslint-disable @typescript-eslint/no-unused-vars */
import { Evento} from "@/core";
import InformacoesEventos from "./InformacoesEvento";

export interface DashboardEventoProps {
    evento: Evento
}

export default function DashboardEvento(props: DashboardEventoProps) {
    return (
        <div className="felx flex-col gap-2">
            <div className="flex gap-2">
                <InformacoesEventos evento={props.evento}/>
            </div>
        </div>
    );
}