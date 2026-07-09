'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {  FiMenu, FiX } from "react-icons/fi";
import { LuClipboardList } from "react-icons/lu";
import { VscSignOut } from "react-icons/vsc";

export default function Navbar({ navItems }: { navItems: any[] }) {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    
    return (
        <div className="py-2 fixed w-full bg-white border-b border-[#dfe5ed] shadow-lg z-50">
            <nav className="flex justify-between items-center w-[90%] sm:w-4/5 mx-auto">
                <div className="logo flex items-center gap-2">
                    <Image className="size-10" src="/ITG_logo.png" alt="Logo" width={100} height={100} />
                    <h1 className="font-bold text-lg text-[#1469bb]">ITG Solution</h1>
                </div>

                {/* Desktop links */}
                <ul className="hidden lg:flex items-center gap-4 font-semibold">
                    {navItems.map((item:any,index:number)=>{
                        return(
                            <li key={index}>
                                <Link href={item.href} className={`flex gap-2 items-center text-[#4a5565] rounded-xl hover:bg-[#e6effb] hover:text-[#1469bb] p-3 ${pathname === item.href ? 'bg-[#e6effb] text-[#1469bb]' : '' }`}>
                                    {item.icon}
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop user info */}
                <div className="hidden lg:flex items-center gap-2">
                    <div className="rounded-full bg-[#e6effb] flex items-center justify-center size-10 text-[#1469bb] font-bold">
                        A
                    </div>
                    <ul>
                        <h1 className="font-bold text-black">abeer Mourtaja</h1>
                        <p className="text-xs text-[#4a5565]">abeermourtaja@gmail.com</p>
                    </ul>
                    <button onClick={()=>router.push('/auth')} title="sign" className="size-9"><VscSignOut className="text-gray-500" /></button>
                </div>

                {/* Mobile menu toggle */}
                <button className="lg:hidden text-2xl text-[#4a5565]" onClick={()=>setOpen(!open)}>
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="lg:hidden w-[90%] mx-auto mt-3 border-t border-[#dfe5ed] pt-3">
                    <ul className="flex flex-col gap-2 font-semibold">
                        {navItems.map((item:any,index:number)=>{
                            return (
                                <li key={index}>
                                    <Link href={item.href} onClick={()=>setOpen(false)} className={`flex gap-2 items-center text-[#4a5565] rounded-xl hover:bg-[#e6effb] hover:text-[#1469bb] p-3 ${pathname === item.href ? 'bg-[#e6effb] text-[#1469bb]' : '' }`}>
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#dfe5ed]">
                        <div className="rounded-full bg-[#e6effb] flex items-center justify-center size-10 shrink-0 text-[#1469bb] font-bold">
                            A
                        </div>
                        <div className="flex-1">
                            <h1 className="font-bold text-black">abeer Mourtaja</h1>
                            <p className="text-xs text-[#4a5565]">abeermourtaja@gmail.com</p>
                        </div>
                        <button onClick={()=>router.push('/auth')} title="sign" className="size-9 shrink-0"><VscSignOut className="text-gray-500" /></button>
                    </div>
                </div>
            )}
        </div>
    );
}