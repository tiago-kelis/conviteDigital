import Logo from "./Logo"

export interface Paginaprops {
    children: React.ReactNode
    classname?: string
}

export default function Pagina(props: Paginaprops) {
    return (
        <div className="
           flex flex-col items-center py-10 min-h-screen
           bg-[url('/background.png')] bg-cover
        ">
            <Logo />
           <main className={`flex-1 flex flex-col justify-center py-10 container ${props.classname}`}>
               {props.children}
           </main>
        </div>
    )
};