/* eslint-disable @typescript-eslint/no-unused-vars */
import { Convidado, Evento} from "@/core";
import InformacoesEventos from "./InformacoesEvento";
import AcessarViaQrCode from "./AcessarViaQrCode";
import Estatistica from "../shared/Estatistica";
import ListaConvidados from "./ListaConvidados";

export interface DashboardEventoProps {
    evento: Evento;
    presentes: Convidado[];
    ausentes: Convidado[];
    totalGeral: number;
}

export default function DashboardEvento(props: DashboardEventoProps) {
    return (
        <div className="felx flex-col gap-4">
            <div className="flex gap-2 self-stretch">
                <InformacoesEventos evento={props.evento} classname="flex-1"/>
                <AcessarViaQrCode envento={props.evento}/>
            </div>
            <div className="grid grid-cols-3 mt-4 gap-4">
                <Estatistica
                  texto="Espectativa de convidados"
                  valor={props.evento.publicoEsperado} 
                  imagem="/icones/convidados.svg"
                />

                <Estatistica
                  texto="Confirmações"
                  valor={props.presentes.length} 
                  imagem="/icones/confirmados.svg"
                />

                <Estatistica
                  texto="total geral"
                  valor={props.totalGeral} 
                  imagem="/icones/amigos.svg"
                />
            </div>

              <button className="btn verde mt-5 mb-5">
                <span>Atualizar lista de Convidados</span>
              </button>
              
             <span className="flex py-2  txet-xl font-bold text-white/80 border border-zinc-700 px-4 mb-1">Convidados que confirmaram PRESENÇA</span>
             <ListaConvidados convidados={props.presentes}/>
             <span  className="flex py-2  txet-xl font-bold text-white/80  border border-zinc-700 px-4 mt-14 mb-1">Convidados que não confirmaram PRESENÇA</span>
             <ListaConvidados convidados={props.ausentes}/>
        </div>
    );
}