/* eslint-disable @typescript-eslint/no-unused-vars */
import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";



export default function PaginaEvento() {
    return (
        <div className="grid grid-cols-3 gap-4">
           {eventos.map((evento) => (
               <div  key={evento.id} className="flex flex-col bg-lime-900 rounded-lg w-full overflow-hidden">
                <div className="relative w-full h-52">
                    <Image src={evento.imagem} fill alt={evento.nome} className="object-cover"/>

                </div>
                  <div className="flex-1 flex flex-col p-7 gap-3 items-center text-center">
                    <span>{evento.nome}</span>
                    <p className="text-zinc-400 text-sm">{evento.descricao}</p>

                      <QRCode value={JSON.stringify({id: evento.id, senha: evento.senha})} className="w-44 h-24"/>
                        <div className="flex gap-4">
                            <Link href={`/evento/admin/${evento.id}/${evento.senha} `} className="flex-1 btn verde">
                            Admin
                            </Link>
                            <Link href={`/convite/${evento.alias}`} className="flex-1 btn vermelho">
                            Convite
                            </Link>
                        </div>
                  </div>
                  
               </div>
            ))}
        </div>
    )
}