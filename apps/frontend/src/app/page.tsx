
import LogoGrande from "@/components/template/LogoGrande";
import Link from "next/link";



export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3 bg-[url('/background-home.svg')] bg-cover">
      <LogoGrande/>
      <div className="flex flex-col">
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Crie e gerancie seu convite
          de forma rápida e prática.
        </p>
      </div>
      <Link href="/eventos" className="btn verde">
          Crie seu Evento!
      </Link>
    </div>   
  );
}
