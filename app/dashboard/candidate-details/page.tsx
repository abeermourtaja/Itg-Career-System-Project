'use client'
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import { BiBriefcaseAlt, BiPhone, BiX } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiBriefcase, FiPhone, FiUsers } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";

export default function CandidateDetails(){
    const router=useRouter();
    return <div>
        <Navbar navItems={[
            {href:'/dashboard',label:'Candidates',icon:<FiUsers/>,},
            {href:'/jobPositions',label:'Jobs',icon:<FiBriefcase/>}
        ]}></Navbar>
        <div className="py-20 md:py-20 w-[92%] md:w-8/10 mx-auto ">
            <div onClick={()=>router.push('/dashboard')} className="flex items-center gap-2 my-4 text-sm text-gray-600"> 
                <FaArrowLeftLong />Back to applicants
            </div>
            <div className="flex flex-col lg:flex-row gap-3 items-start">
                <div className="w-full lg:w-2/3 ">
                    <div className="flex flex-col gap-3 rounded-xl bg-white shadow-md  p-4 border border-gray-300 ">
                        <div className="flex gap-3 items-start rounded-xl">
                            <div className="size-15 shrink-0 bg-[#1469bb] flex items-center justify-center text-xl font-bold text-white rounded-full">AC</div>
                            <div className="flex flex-col justify-start items-start ">
                                <h1 className=" font-bold">Amelia Chen</h1>
                                <p className="text-xs">Lead Frontend Engineer at Lumen</p>
                                <div className="text-[#1447e6] bg-[#eff6ff] border border-[#c3d8fe] w-fit px-1 rounded-xl my-2 text-xs">Interview</div>
                            </div>
                        </div>
                        <hr className="h-[.5px] bg-gray-300 border-0 "/>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            <div className="text-sm text-gray-500 flex gap-1 items-center my-1"><HiOutlineMail />amelia.chen@email.com</div>
                            <div className="text-sm text-gray-500 flex gap-1 items-center my-1"><FiPhone  />+1 (415) 555-0182</div>
                            <div className="text-sm text-gray-500 flex gap-1 items-center my-1"><IoLocationOutline   />San Francisco, CA</div>
                            <div className="text-sm text-gray-500 flex gap-1 items-center my-1"><MdDateRange   />Applied Apr 21, 2026</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 my-4 rounded-xl bg-white shadow-md  p-4 border border-gray-300 ">
                        <h1 className="font-semibold">Skills</h1>
                        <div className="flex gap-2 items-center flex-wrap">
                            <div className="text-[#184687] font-medium bg-[#eff6ff] w-fit p-1 rounded-xl text-sm">React</div>
                            <div className="text-[#184687] font-medium bg-[#eff6ff] w-fit p-1 rounded-xl text-sm">TypeScript</div>
                            <div className="text-[#184687] font-medium bg-[#eff6ff] w-fit p-1 rounded-xl text-sm">Next.js</div>
                            <div className="text-[#184687] font-medium bg-[#eff6ff] w-fit p-1 rounded-xl text-sm">GraphQl</div>
                            <div className="text-[#184687] font-medium bg-[#eff6ff] w-fit p-1 rounded-xl text-sm">Accessibility</div>
                            <div className="text-[#184687] font-medium bg-[#eff6ff] w-fit p-1 rounded-xl text-sm">Design Systems</div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-3 my-4 rounded-xl bg-white shadow-md  p-5 border border-gray-300 ">
                        <div className="flex items-center gap-2 font-semibold">
                            <BiBriefcaseAlt /> Experience

                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-1 ">
                            <div >
                                <div className="flex gap-3 items-center">
                                    <div className="size-3 rounded-full bg-[#1469bb]"></div>
                                    <h1 className="text-sm">Lead Frontend Engineer</h1>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="w-0.5 bg-gray-200 h-9 ml-1"></div>
                                    <div>
                                        <p className="text-sm text-[#1469bb]">Lumen</p>
                                        <p className="text-sm">Led a team of 6 building a design system used across 12 products.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs shrink-0">2021 — Present</p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between gap-1 ">
                            <div >
                                <div className="flex gap-3 items-center">
                                    <div className="size-3 rounded-full bg-[#1469bb]"></div>
                                    <h1 className="text-sm">Senior Frontend Engineer</h1>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="w-0.5 bg-gray-200 h-9 ml-1"></div>
                                    <div>
                                        <p className="text-sm text-[#1469bb]">Brightwave</p>
                                        <p className="text-sm">Shipped the customer dashboard, improving load times by 40%.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs shrink-0">2018 — 2021</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 my-4 rounded-xl bg-white shadow-md  p-4 border border-gray-300 ">
                        <div className="flex items-center gap-2 font-semibold">
                            <RiGraduationCapLine /> Education
                        </div>
                        <div className="flex justify-between ">
                            <div>
                                <h1 className="text-sm">B.S. Computer Science</h1>
                                <p className="text-xs">UC Berkeley</p>
                            </div>
                            <p className="text-sm">2016</p>
                        </div>
                    </div>

                </div>
                <div className="w-full lg:w-[32%] ">
                    <div className="flex flex-col gap-3 rounded-xl bg-white shadow-md  p-4 border border-gray-300 ">
                        <h1 className="text-sm font-semibold">AI Match Score</h1>
                        <div className="flex flex-col items-center justify-center gap-5">
                            <div className="border-10  border-green-600 rounded-full size-26 flex flex-col items-center justify-center">
                                <h1 className="font-bold text-xl">94%</h1>
                                <p>match</p>
                            </div>
                            <p className="text-sm">for Senior Frontend Engineer</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 rounded-xl bg-white shadow-md my-3  p-4 border border-gray-300 ">
                        <h1 className="text-sm font-semibold">Skill Analysis</h1>
                        <div className="">
                            <div className="flex items-center text-green-700 gap-2 font-semibold text-sm">
                                <IoMdCheckmark  />
                                Matched skills
                            </div>
                            <div className="flex flex-wrap gap-1 my-2">
                                <div className="text-green-700 bg-[#ecfdf5] border border-[#bde9d8] w-fit px-2 py-0.5 rounded-xl  text-xs ">React</div>
                                <div className="text-green-700 bg-[#ecfdf5] border border-[#bde9d8] w-fit px-2 py-0.5 rounded-xl text-xs ">javaScript</div>
                                <div className="text-green-700 bg-[#ecfdf5] border border-[#bde9d8] w-fit px-2 py-0.5 rounded-xl text-xs ">javaScript</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center text-[#c70036] gap-2 font-semibold text-sm">
                                <BiX />
                                Missing skills


                            </div>
                            <div className="flex flex-wrap gap-1 my-2">
                                <div className="text-[#c70036] bg-[#fff1f2] border border-[#fbc1ce] w-fit px-2 py-0.5 rounded-xl  text-xs ">Rust</div>
                                <div className="text-[#c70036] bg-[#fff1f2] border border-[#fbc1ce] w-fit px-2 py-0.5 rounded-xl text-xs ">WebGl</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 rounded-xl bg-white shadow-md  p-4 border border-gray-300 ">
                        <div className="flex items-center gap-2 font-semibold">
                            <RiGraduationCapLine /> AI Recommendation
                        </div>
                        <div className="rounded-xl p-2 bg-[#f2f7fd]">
                            <p className="text-xs text-[#0b192a]">
                                Exceptional match. Amelia exceeds the technical bar with strong leadership signals and deep design-system expertise. Strongly recommend advancing to a final interview.
                            </p>
                        </div>
                    
                    </div>
                    <div className="flex flex-col  my-3 rounded-xl bg-white shadow-md  p-4 border border-gray-300 ">
                            <h1 className="font-semibold">Decision</h1>
                            <p className="text-sm">Move this candidate forward or decline.</p>
                            <div className="my-2">
                                <div className="flex items-center gap-2 text-sm p-2 rounded-xl font-semibold bg-[#ecfdf5] text-green-700">
                                    <IoMdCheckmark  />Candidate accepted
                                </div>
                            </div>
                            <div className="flex gap-2 item-center my-2">
                                <button className="flex items-center justify-center text-sm p-2 rounded-xl font-semibold w-1/2 gap-2 bg-[#ecfdf5] text-green-700 active:bg-green-700 active:text-white">
                                    <IoMdCheckmark  />Accept
                                </button>
                                <button className="flex items-center justify-center text-sm p-2 rounded-xl font-semibold w-1/2 gap-2 bg-[#fff1f2] text-[#c70036] active:bg-[#c70036] active:text-white">
                                    <BiX />Reject
                                </button>
                            </div>
                        </div>
                </div>
            </div>
                
        </div>
    </div>
}