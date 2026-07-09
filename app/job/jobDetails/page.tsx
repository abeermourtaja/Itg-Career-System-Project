'use client';
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import { FiBriefcase, FiPhone, FiUser } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { LuClipboardList } from "react-icons/lu";

export default function JobDetails() {
    const router = useRouter();
    return(  
    <div>
        <Navbar navItems={[
                    {href:'/job',label:'Browse Jobs',icon:<FiBriefcase/>,},
                    {href:'/applications',label:'My Applications',icon:<LuClipboardList/>}
                ]}></Navbar>
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-15 sm:py-20">
            <div className="flex gap-2 items-center cursor-pointer text-[#1469bb] font-semibold" onClick={()=>router.back()}>
                <BsArrowLeft/> Back to Jobs</div>
            <div className="rounded-xl border-1 border-[#dfe5ed] p-4 bg-white my-3">
                <div className="flex gap-3 items-start">
                    <div className="rounded-xl size-12 shrink-0 bg-[#e6effb] flex items-center justify-center">
                        <FiBriefcase className="text-[#6a7282] text-xl" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="font-bold text-lg sm:text-xl">Front end developer</h1>
                        <div className="flex flex-wrap text-[#6a7282] items-center gap-x-4 gap-y-1 text-sm">
                            <p className="flex items-center gap-1"><IoLocationOutline />jordan, amman</p>
                            <p className="flex items-center gap-1"><IoTimeOutline />Full-time</p>
                            <p className="flex items-center gap-1">computer science</p>
                            <b>$70,000 - $90,000</b>
                        </div>
                    </div> 
                </div>
                <p className="mt-3 text-[#4a5565]">5 years of experiance in frontend</p>
                <p className="font-semibold text-black">Requirements</p>
                <ul className="list-disc list-inside text-[#4a5565]">
                    <li>Proficiency in HTML, CSS, and JavaScript</li>
                    <li>Experience with front-end frameworks (e.g., React, Angular, Vue.js)</li>
                </ul>
            </div>
            <form action="submit" className="rounded-xl bg-white border-1 border-[#e5e7eb]">
                <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 text-white rounded-t-xl p-4">
                    <h1 className="font-bold text-lg">Apply for this Position</h1>
                    <p className="text-sm">Fill out the form below to submit your application</p>
                </div>
                <div className="bg-white p-4">
                    <div className="flex flex-col sm:flex-row gap-5 sm:items-center py-3">
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label className="font-medium text-[#364153]" htmlFor="first-name">First Name *</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <FiUser className="text-[#99a1af]" />
                                <input placeholder="First Name" type="text" id="first-name" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>                       
                        </div>
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label className="font-medium text-[#364153]" htmlFor="last-name">Last Name *</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <FiUser className="text-[#99a1af]" />
                                <input placeholder="Last Name" type="text" id="last-name" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5 sm:items-center py-3">
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label className="font-medium text-[#364153]" htmlFor="email">Email *</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <MdOutlineMail className="text-[#99a1af]" />
                                <input placeholder="you@example.com" type="email" id="email" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>                       
                        </div>
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label className="font-medium text-[#364153]" htmlFor="address">Address *</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <HiOutlineLocationMarker className="text-[#99a1af]" />
                                <input placeholder="Enter your Address" type="text" id="address" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5 sm:items-center py-3">
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label className="font-medium text-[#364153]" htmlFor="country">Country *</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <MdOutlineMail className="text-[#99a1af]" />
                                <input placeholder="Your Country" type="text" id="country" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>                       
                        </div>
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label className="font-medium text-[#364153]" htmlFor="phone">Phone Number *</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <FiPhone className="text-[#99a1af]" />
                                <input placeholder="+9621981234" type="number" id="phone" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5 sm:items-center py-3">
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label className="font-medium text-[#364153]" htmlFor="professional-skills">Professional Skills *</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <RiFileList2Line className="text-[#99a1af]" />
                                <input placeholder="Your Professional Skills" type="text" id="professional-skills" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>                       
                        </div>
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label className="font-medium text-[#364153]" htmlFor="portfolio-link">Portfolio Link</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <input placeholder="https://your-portfolio.com" type="url" id="portfolio-link" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5 sm:items-center py-3">
                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label className="font-medium text-[#364153]" htmlFor="resume"> Attach Resume *</label>
                            <div className="flex items-center border border-[#e5e7eb] rounded-md px-3 py-2 focus-within:border-blue-500 hover:border-blue-400 transition bg-white">
                                <input type="file" id="resume" className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-gray-100 file:text-gray-700 file:cursor-pointer cursor-pointer"/>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full sm:w-1/2">
                            <label className="font-medium text-[#364153]" htmlFor="portfolio"> Attach Portfolio</label>
                            <div className="flex items-center border border-[#e5e7eb] rounded-md px-3 py-2 focus-within:border-blue-500 hover:border-blue-400 transition bg-white">
                                <input type="file" id="portfolio" className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-gray-100 file:text-gray-700 file:cursor-pointer cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5 py-3">
                        <div className="flex flex-col gap-2 w-full sm:w-1/3">
                            <label className="font-medium text-[#364153]" htmlFor="years-of-experience">Years of Experience *</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <input placeholder="" type="number" min={0} id="years-of-experience" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>                       
                        </div>
                        <div className="flex flex-col gap-2 w-full sm:w-1/3">
                            <label className="font-medium text-[#364153]" htmlFor="current-monthly-salary">Current monthly salary *</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <input placeholder="" type="number" min={0} id="current-monthly-salary" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full sm:w-1/3">
                            <label className="font-medium text-[#364153]" htmlFor="expected-monthly-salary">Expected monthly salary *</label>
                            <div className="flex gap-2 items-center border focus-within:border-blue-500 border-[#e5e7eb] rounded-md p-2">
                                <input placeholder="" type="number" min={0} id="expected-monthly-salary" className="border-0 outline-none focus:outline-none focus:ring-0 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-3 mb-3">
                    <button type="submit" className="bg-blue-500 text-white rounded-md hover:bg-blue-600 p-2 font-semibold w-full">Submit Application</button>
                </div>
            </form>
        </div>
        <Footer></Footer>
    </div>
    );
};