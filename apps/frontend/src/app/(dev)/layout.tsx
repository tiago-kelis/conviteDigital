/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagina from "@/components/template/Pagina";


export default function Layout(props: any) {
    return <Pagina>{props.children}</Pagina>
}