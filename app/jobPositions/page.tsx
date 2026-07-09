'use client'
import { FiBriefcase, FiUsers, FiX } from "react-icons/fi";
import Navbar from "../components/Navbar";
import {  FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import {  BiBriefcaseAlt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";

export default function JobPositions(){
      const [open, setOpen] = useState(false);
    return (
        <div>
            <Navbar navItems={[
                {href:'/dashboard',label:'Candidates',icon:<FiUsers/>,},
                {href:'/jobPositions',label:'Jobs',icon:<FiBriefcase/>}
            ]}>
            </Navbar>
            <div className="py-20 md:py-20 w-[92%] md:w-8/10 mx-auto ">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold">Job Mangement</h1>
                        <p className="text-sm md:text-base">Create, track and manage your open positions.</p>
                    </div>
                    <button onClick={()=>setOpen(true)} className="items-center flex gap-1 p-2 text-white bg-[#1469bb] rounded-xl w-fit" ><FaPlus />Create new job</button>
                    {open && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                        <div className="w-full max-w-lg rounded-xl bg-white shadow-xl max-h-[90vh] flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-gray-200 px-4 md:px-8 py-4 md:py-6">
                            <h2 className="text-lg font-bold text-gray-900">Add New Position</h2>
                            <button onClick={()=>setOpen(false)} title="f"  className="text-gray-400 hover:text-gray-600">
                                <FiX size={24} />
                            </button>
                            </div>
                    
                            {/* Body */}
                            <div className="max-h-[60vh] overflow-y-auto px-4 md:px-8 py-4 md:py-6">
                            {/* Job Title */}
                            <div className="mb-6">
                                <label className="mb-2 block text-sm font-semibold text-gray-800">
                                Job Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                type="text"
                                placeholder="e.g. Senior React Developer"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                    
                            {/* Department + Type */}
                            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-800">
                                    Department <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Engineering"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                                />
                                </div>
                                <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-800">
                                    Type <span className="text-red-500">*</span>
                                </label>
                                <select title="f"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none"
                                >
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Internship">Internship</option>
                                </select>
                                </div>
                            </div>
                    
                            {/* Location + Country */}
                            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-800">
                                    Location <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Cairo"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                                />
                                </div>
                                <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-800">
                                    Country <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Egypt"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                                />
                                </div>
                            </div>
                    
                            {/* Salary Range */}
                            <div className="mb-6">
                                <label className="mb-2 block text-sm font-semibold text-gray-800">
                                Salary Range
                                </label>
                                <input
                                type="text"
                                placeholder="$40K - $60K"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                    
                            {/* Summary */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-800">
                                Summary <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                placeholder="Brief job description..."
                                rows={4}
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                            </div>
                    
                            {/* Footer */}
                            <div className="flex justify-end gap-3 border-t border-gray-200 px-4 md:px-8 py-3">
                            <button onClick={()=>setOpen(false)}
                                className="rounded-lg border w-1/2 border-gray-300 px-6 py-2 font-semibold text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                className="rounded-lg w-1/2 bg-[#1469bb] px-6 py-2 font-semibold text-white hover:bg-blue-700"
                            >
                                Add Position
                            </button>
                            </div>
                        </div>
                        </div>

                    )}
                </div>
                <div className="my-3 flex flex-col md:flex-row items-stretch md:items-center gap-3 bg-white shadow-md border-1 border-gray-300 p-3 md:p-4 rounded-xl">
                    <div className="rounded-xl  p-3 bg-[#f8fafd] border border-gray-300 flex items-center gap-2 w-full md:w-1/2">
                        <FaSearch className="text-gray-400"></FaSearch>
                        <input className="outline-0 focus:outline-0  w-full" type="text" placeholder="Search jobs by title,department or location..." />

                    </div>
                    <div className="w-full md:w-1/4">
                        <select className="outline-0 w-full  focus:outline-[#1469bb]  bg-[#f8fafd] border border-gray-300 rounded-xl p-3" title="department" name="department" id="department">
                            <option value="">All Departments</option>
                            <option value="engineering">Engineering</option>
                            <option value="marketing">Marketing</option>
                            <option value="sales">Sales</option>
                        </select>
                    </div>
                    <div className="bg-[#f8fafd] border border-gray-300 rounded-xl flex-1 flex items-center gap-2">
                        <div className="rounded-lg bg-[#1469bb] text-white p-2 m-1 whitespace-nowrap">All</div>
                        <div className="rounded-lg bg-[#f8fafd] text-[#536784] p-2 m-1 whitespace-nowrap">Open</div>
                        <div className="rounded-lg bg-[#f8fafd] text-[#536784] p-2 m-1 whitespace-nowrap">Closed</div>
                        <div className="rounded-lg bg-[#f8fafd] text-[#536784] p-2 m-1 whitespace-nowrap">Draft</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
                    <div className="p-3 flex gap-3 flex-wrap border border-gray-300 rounded-xl shadow-md bg-white">
                        <div className="flex w-full flex-col gap-2">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-2 items-start">
                                        <div className="flex items-center size-10 text-xl justify-center p-2 text-[#1469bb] bg-[#e6effb] rounded-lg"><BiBriefcaseAlt/></div>
                                    <div>
                                        <h2 className="font-bold">Frontend Developer</h2>
                                        <p className="text-sm">Engineering</p>
                                    </div>
                                </div>
                                <div className=" bg-[#ecfdf5] text-[#007a55] font-medium border border-[#bde9d8] px-1 flex item-center jusitfy-center text-sm rounded-xl">Open</div>
                            </div>
                            <p className="text-sm overflow-hidden line-clamp-2 ">We are looking for a Senior Frontend Engineer to build delightful, accessible interfaces with React and typescript</p>
                            <div className="my-2 flex gap-2 items-center text-sm text-[#5e6a7a]">
                                <div className="flex gap-1 items-center text-[#5e6a7a] ">
                                    <IoLocationOutline />Remote
                                </div>
                                <div className="flex gap-1 items-center text-[#5e6a7a]">
                                    <BiBriefcaseAlt />Full-time
                                </div>
                            </div>
                            <hr className="bg-[#5e6a7a] h-[.5px] border-none"/>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex gap-1 items-center">
                                    <FiUsers/> 64
                                </div>
                                <button className="text-[#1469bb]   hover:underline focus:underline">View applicants</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 flex gap-3 flex-wrap border border-gray-300 rounded-xl shadow-md bg-white">
                        <div className="flex w-full flex-col gap-2">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-2 items-start">
                                        <div className="flex items-center size-10 text-xl justify-center p-2 text-[#1469bb] bg-[#e6effb] rounded-lg"><BiBriefcaseAlt/></div>
                                    <div>
                                        <h2 className="font-bold">Frontend Developer</h2>
                                        <p className="text-sm">Engineering</p>
                                    </div>
                                </div>
                                <div className=" bg-[#ecfdf5] text-[#007a55] font-medium border border-[#bde9d8] px-1 flex item-center jusitfy-center text-sm rounded-xl">Open</div>
                            </div>
                            <p className="text-sm overflow-hidden line-clamp-2 ">We are looking for a Senior Frontend Engineer to build delightful, accessible interfaces with React and typescript</p>
                            <div className="my-2 flex gap-2 items-center text-sm text-[#5e6a7a]">
                                <div className="flex gap-1 items-center text-[#5e6a7a] ">
                                    <IoLocationOutline />Remote
                                </div>
                                <div className="flex gap-1 items-center text-[#5e6a7a]">
                                    <BiBriefcaseAlt />Full-time
                                </div>
                            </div>
                            <hr className="bg-[#5e6a7a] h-[.5px] border-none"/>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex gap-1 items-center">
                                    <FiUsers/> 64
                                </div>
                                <button className="text-[#1469bb]   hover:underline focus:underline">View applicants</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 flex gap-3 flex-wrap border border-gray-300 rounded-xl shadow-md bg-white">
                        <div className="flex w-full flex-col gap-2">
                            <div className="flex justify-between items-start">
                                <div className="flex gap-2 items-start">
                                        <div className="flex items-center size-10 text-xl justify-center p-2 text-[#1469bb] bg-[#e6effb] rounded-lg"><BiBriefcaseAlt/></div>
                                    <div>
                                        <h2 className="font-bold">Frontend Developer</h2>
                                        <p className="text-sm">Engineering</p>
                                    </div>
                                </div>
                                <div className=" bg-[#ecfdf5] text-[#007a55] font-medium border border-[#bde9d8] px-1 flex item-center jusitfy-center text-sm rounded-xl">Open</div>
                            </div>
                            <p className="text-sm overflow-hidden line-clamp-2 ">We are looking for a Senior Frontend Engineer to build delightful, accessible interfaces with React and typescript</p>
                            <div className="my-2 flex gap-2 items-center text-sm text-[#5e6a7a]">
                                <div className="flex gap-1 items-center text-[#5e6a7a] ">
                                    <IoLocationOutline />Remote
                                </div>
                                <div className="flex gap-1 items-center text-[#5e6a7a]">
                                    <BiBriefcaseAlt />Full-time
                                </div>
                            </div>
                            <hr className="bg-[#5e6a7a] h-[.5px] border-none"/>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex gap-1 items-center">
                                    <FiUsers/> 64
                                </div>
                                <button className="text-[#1469bb] hover:underline focus:underline">View applicants</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}