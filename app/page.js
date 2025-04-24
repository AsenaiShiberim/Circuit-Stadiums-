//import Map from './comps/map'
'use client';
//import DialogAi from './comps/dialog'


import dynamic from "next/dynamic";

const Map= dynamic(() => import("./comps/map"), { ssr: false });

export default function Page(){


  return(
    <main className="w-full h-full">
    <Map/>
  </main>

  )

  

}