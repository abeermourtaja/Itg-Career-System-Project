import { FiMessageSquare } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaCheckCircle } from "react-icons/lia";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Applications() {
    return (
        <div>
            <Navbar />
            <div className="w-7/10 mx-auto py-20  ">
                <h1 className="font-bold mt-3 text-2xl ">My Applications</h1>
                <p className="text-[#6a7282]">Track the status of all your job applications</p>
                <div className="jobs flex flex-col gap-4 mt-5">
                    <div className="flex flex-col gap-3 rounded-xl border-2 border-[#e5e7eb] p-4">
                        <div className="flex items-start justify-between ">
                            <div className="flex flex-col ">
                                <p className="font-bold text-lg text-black">Front end engineer</p>
                                <p className="text-[#6a7282]">Engineering · Cairo</p>
                                <p className="text-[#99a1af] text-xs">Applied Jul 2, 2026</p>
                            </div>
                            <div className="bg-[#dbfce7] rounded-lg p-1 text-xs text-[#166534] font-bold flex gap-1 items-center"> <LiaCheckCircle /> Offer Extended</div>

                        </div>
                        <div className="flex gap-1 items-center my-2 ">
                            <div className="flex flex-col gap-1 items-center">
                                <div className="rounded-full size-8  bg-[#1469bb] text-white flex items-center justify-center">
                                    <IoCheckmarkSharp className="font-bold text-lg"   />
                                </div>
                                <p className="text-xs ml-1">new</p>
                            </div>
                            <hr className="bg-[#1469bb] h-1 border-none w-[200px] align-middle"/>
                            <div className="flex flex-col gap-1 items-center">
                                <div className="rounded-full size-8  bg-[#1469bb] text-white flex items-center justify-center">
                                    <IoCheckmarkSharp className="font-bold text-lg"   />
                                </div>
                                <p className="text-xs ">reviewed</p>
                            </div>
                            <hr className="bg-[#1469bb] h-1 border-none w-[200px] align-middle"/>
                            <div className="flex flex-col gap-1 items-center">
                                <div className="rounded-full size-8  bg-[#1469bb] text-white flex items-center justify-center">
                                    <IoCheckmarkSharp className="font-bold text-lg"   />
                                </div>
                                <p className="text-xs ">shortlisted</p>
                            </div>
                            <hr className="bg-[#1469bb] h-1 border-none w-[200px] align-middle"/>
                            <div className="flex flex-col gap-1 items-center">
                                <div className="rounded-full size-8  bg-[#1469bb] text-white flex items-center justify-center">
                                    <IoCheckmarkSharp className="font-bold text-lg"   />
                                </div>
                                <p className="text-xs ">interview</p>
                            </div>
                            <hr className="bg-[#1469bb] h-1 border-none w-[200px] align-middle"/>
                            <div className="flex flex-col gap-1 items-center">
                                <div className="rounded-full size-8  bg-[#1469bb] text-white flex items-center justify-center">
                                    <IoCheckmarkSharp className="font-bold text-lg"   />
                                </div>
                                <p className="text-xs ">offered</p>
                            </div>
                        </div>
                        <div className="p-3 rounded-lg border-1 border-[#dbeafe] bg-[#eff6ff]">
                            <h1 className="text-[#1447e6] flex items-center gap-2 font-bold " ><FiMessageSquare /> Message from HR</h1>
                            <p className="text-[#193cb8] text-sm">We are excited to inform you that you have been selected for the next round of interviews.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <p className="text-[#99a1af] text-xs">AI Match score:</p>
                            <div className="bg-[#dbfce7] rounded-lg p-1 text-xs text-[#166534] font-bold">85/100</div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
        
    );
}