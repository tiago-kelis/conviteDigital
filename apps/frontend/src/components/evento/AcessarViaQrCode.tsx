
import { Evento } from "@/core"
import QRCode from "react-qr-code"

export interface AcessarViaQrCodeProps {
    envento: Evento
}

export default function AcessarViaQrCode(props: AcessarViaQrCodeProps) {
    return (
        <div className="flex flex-col justify-center gap-4 border border-zinc-600 px-6 py-3">
            <span className="text-sm font-light text-zinc-600">Acesse Mobile via Qr-Code</span>
            <QRCode value={JSON.stringify({id: props.envento.id, senha: props.envento.senha})} className="w-40 h-40"/>
        </div>
    )
}