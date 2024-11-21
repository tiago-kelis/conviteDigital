/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Righteous} from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Righteous({    
    subsets: ['latin'],
    weight: "400"
});

export default function LogoGrande() {
    return (
       <Link href="/evento" className={`flex flex-col items-center gap-2 ${fonte.className}`}>
          <Image src="/logo.svg" alt="Logo" width={100} height={100}/>
           <h1 className="flex items-center text-3xl leading-5">
              Convit<span className="text-sky-400 text-2xl">3</span> Digital
           </h1>
       </Link>
    )
}