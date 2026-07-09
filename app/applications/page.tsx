import { FiBriefcase, FiMessageSquare } from "react-icons/fi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaCheckCircle } from "react-icons/lia";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LuClipboardList } from "react-icons/lu";

export default function Applications() {
    return (
        <div>
            <Navbar navItems={[
                {href:'/job',label:'Browse Jobs',icon:<FiBriefcase/>,},
                {href:'/applications',label:'My Applications',icon:<LuClipboardList/>}
            ]}></Navbar>
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-20">
                <h1 className="font-bold mt-3 text-xl sm:text-2xl">My Applications</h1>
                <p className="text-[#6a7282]">Track the status of all your job applications</p>
                <div className="jobs flex flex-col gap-4 mt-5">
                    <div className="flex flex-col gap-3 rounded-xl border-2 border-[#e5e7eb] p-4">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                            <div className="flex flex-col ">
                                <p className="font-bold text-lg text-black">Front end engineer</p>
                                <p className="text-[#6a7282]">Engineering · Cairo</p>
                                <p className="text-[#99a1af] text-xs">Applied Jul 2, 2026</p>
                            </div>
                            <div className="bg-[#dbfce7] rounded-lg p-1 text-xs text-[#166534] font-bold flex gap-1 items-center w-fit"> <LiaCheckCircle /> Offer Extended</div>
                        </div>

                        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                            <div className="flex gap-1 items-center my-2 min-w-[600px] sm:min-w-0">
                                <div className="flex flex-col gap-1 items-center">
                                    <div className="rounded-full size-8 shrink-0 bg-[#1469bb] text-white flex items-center justify-center">
                                        <IoCheckmarkSharp className="font-bold text-lg" />
                                    </div>
                                    <p className="text-xs ml-1 whitespace-nowrap">new</p>
                                </div>
                                <hr className="bg-[#1469bb] h-1 border-none flex-1 sm:w-[200px] align-middle"/>
                                <div className="flex flex-col gap-1 items-center">
                                    <div className="rounded-full size-8 shrink-0 bg-[#1469bb] text-white flex items-center justify-center">
                                        <IoCheckmarkSharp className="font-bold text-lg" />
                                    </div>
                                    <p className="text-xs whitespace-nowrap">reviewed</p>
                                </div>
                                <hr className="bg-[#1469bb] h-1 border-none flex-1 sm:w-[200px] align-middle"/>
                                <div className="flex flex-col gap-1 items-center">
                                    <div className="rounded-full size-8 shrink-0 bg-[#1469bb] text-white flex items-center justify-center">
                                        <IoCheckmarkSharp className="font-bold text-lg" />
                                    </div>
                                    <p className="text-xs whitespace-nowrap">shortlisted</p>
                                </div>
                                <hr className="bg-[#1469bb] h-1 border-none flex-1 sm:w-[200px] align-middle"/>
                                <div className="flex flex-col gap-1 items-center">
                                    <div className="rounded-full size-8 shrink-0 bg-[#1469bb] text-white flex items-center justify-center">
                                        <IoCheckmarkSharp className="font-bold text-lg" />
                                    </div>
                                    <p className="text-xs whitespace-nowrap">interview</p>
                                </div>
                                <hr className="bg-[#1469bb] h-1 border-none flex-1 sm:w-[200px] align-middle"/>
                                <div className="flex flex-col gap-1 items-center">
                                    <div className="rounded-full size-8 shrink-0 bg-[#1469bb] text-white flex items-center justify-center">
                                        <IoCheckmarkSharp className="font-bold text-lg" />
                                    </div>
                                    <p className="text-xs whitespace-nowrap">offered</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 rounded-lg border-1 border-[#dbeafe] bg-[#eff6ff]">
                            <h1 className="text-[#1447e6] flex items-center gap-2 font-bold "><FiMessageSquare /> Message from HR</h1>
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