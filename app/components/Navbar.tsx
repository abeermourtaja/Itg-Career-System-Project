'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiBriefcase } from "react-icons/fi";
import { LuClipboardList } from "react-icons/lu";
import { VscSignOut } from "react-icons/vsc";

export default function Navbar(){
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div className=" py-2 fixed w-full bg-white border-b border-[#dfe5ed] shadow-lg">
            <nav className="flex justify-between items-center w-4/5 mx-auto">
                <div className="logo flex items-center gap-2">
                    <Image className="size-10" src="/ITG_logo.png" alt="Logo" width={100} height={100} />
                    <h1 className="font-bold text-lg text-[#1469bb]  ">ITG Solution</h1>
                </div>
                <ul className="flex items-center gap-4 font-semibold">
                    <li><Link href="/job" className={`flex gap-2 items-center  text-[#4a5565]  rounded-xl hover:bg-[#e6effb] hover:text-[#1469bb] p-3 ${pathname==='/job'? 'bg-[#e6effb] text-[#1469bb]' :'' }`}><FiBriefcase />Browse Jobs</Link></li>
                    <li><Link href="/applications" className={`flex gap-2 items-center  text-[#4a5565]  rounded-xl hover:bg-[#e6effb] hover:text-[#1469bb] p-3 ${pathname==='/applications'? 'bg-[#e6effb] text-[#1469bb] ':'' } `}><LuClipboardList />My Applications</Link></li>
                </ul>
                <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#e6effb] flex items-center justify-center  size-10 text-[#1469bb] font-bold  ">
                    A
                </div>
                <ul>
                    <h1 className="font-bold text-black">abeer Mourtaja</h1>
                    <p className="text-xs text-[#4a5565] ">abeermourtaja@gmail.com</p>
                    
                </ul>
                    <button onClick={()=>router.push('/auth')} title="sign" className=" size-9"><VscSignOut className="text-gray-500"  /></button>
    
                </div>
            </nav> 
        </div>
    );
}