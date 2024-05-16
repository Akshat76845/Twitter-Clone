import React from "react";
import Image from "next/image";
import { BsEnvelope, BsTwitter, BsBell, BsBookmark } from "react-icons/bs"; // Changed from BsBookMark to BsBookmark
import { BiHomeCircle, BiHash, BiUser } from "react-icons/bi";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}
const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle/>
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: 'Notifications',
    icon: <BsBell />,
  },
  {
    title: 'Messages',
    icon: <BsEnvelope/>,
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />, // Updated to BsBookmark
  },
  {
    title: 'Profile',
    icon: <BiUser />,
  }
];
export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-8">
          <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer transition-all">
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
            
            <button className="bg-[#1d9bf0] mt-5 p-4 rounded-full w-full  ">Tweet</button>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  )
}
