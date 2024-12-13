import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {Videocard} from "../components/videocard";
import { Videogrid } from "../components/videogrid";
import {Appbar} from "@/components/appbar"
import {Sidebar} from "@/components/sidebar"
export default function Home() {
  return (
    <div className="grid grid-cols-6"> 
    <div className="col-span-6"><Appbar></Appbar></div>
    <div className="col-span-1"><Sidebar></Sidebar></div>
    <div className="col-span-5"><Videogrid/></div>
    </div>
  )
}
