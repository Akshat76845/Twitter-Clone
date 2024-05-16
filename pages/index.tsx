import React from "react";
import Image from "next/image";
import {BsTwitter} from "react-icons/bs";
import {BiHomeCircle} from "react-icons/bi";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title:string
  icon:React.ReactNode;
}
const sidebarMenuItems: TwitterSidebarButton[] =[
  {
    title: 'Home',
    icon: <BiHomeCircle/>
  }
]
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-8">
          <div className="text-4xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter/>
          </div>
          <div>
            <ul>
              {sidebarMenuItems.map((item)=> (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full p-5 py-2 w-fit cursor-pointer " key={item.title}>
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  )
}
