import Image from "next/image";

import { BsEnvelope, BsTwitter,BsBell,BsBookmark } from 'react-icons/bs';
import {BiHomeCircle,BiHash,BiUser} from 'react-icons/bi'
import FeedCard from "@/components/FeedCard";

interface TwitterSiderButton{
  title:string;
  icon:React.ReactNode;
} 
const sidebarMenuItems: TwitterSiderButton[] = [
  {
    title:'Home',
    icon:<BiHomeCircle />, 
  },
  {
    title:'Explore',
    icon:<BiHash/>,
  },
  {
    title:'Notifications',
    icon:<BsBell/>
  },
  {
    title:'Messages',
    icon:<BsEnvelope/>
  },
  {
    title:'Bookmarks',
    icon:<BsBookmark/>
  },
  {
    title:'Profile',
    icon:<BiUser/>,
  }

]
export default function Home() {
  return (
    <div >
    <div className="grid grid-cols-12 h-screen w-screen px-56 ">
      <div className="col-span-3 justify-start pt-8  px-4">
        <div  className="text-4xl h-fit  hover:bg-slate-600 rounded-full p-4 w-fit gap-2 cursor-pointer transition-all">
        <BsTwitter />
      </div>
      <div className="mt-4  text-2xl  pr-4">
        <ul>
        {sidebarMenuItems.map(item=> <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer" key={item.title}><span>{item.icon}</span><span>{item.title}</span></li>)}
      </ul>
      <div className="mt-5 pr-10">
      <button className="bg-[#1d9bf0] p-4 rounded-full w-full text-lg">Tweet</button>
      </div>
      </div>
      </div>
      <div className="col-span-5 border-r-[0.2px] border-l-[1px] border border-gray-600">
      <FeedCard/>
      </div>
      
      <div className="col-span-3"></div> 
    </div>
    </div>
  );
}
