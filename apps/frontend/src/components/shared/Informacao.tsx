/* eslint-disable @typescript-eslint/no-explicit-any */

export interface InformacaoProps {
    label: string;
    children?: any;
}

export default function Informacao(props: InformacaoProps) {
    return (
        <div className="flex flex-col items-start border border-zinc-400 px-6 py-3 rounded-lg">
            <span className="text-zinc-500 font-bold">{props.label}</span>
            <div className="text-xl">
                {props.children}
            </div>
        </div>
    );
}