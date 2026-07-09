"use client";

import { FiPlus, FiMapPin, FiClock, FiUsers, FiBriefcase } from "react-icons/fi";
import Navbar from "../components/Navbar";
import { BsSliders2 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router=useRouter();
  return (
    <div>
      <Navbar navItems={[
          {href:'/dashboard',label:'Candidates',icon:<FiUsers/>,},
          {href:'/jobPositions',label:'Jobs',icon:<FiBriefcase/>}
        ]}></Navbar>
        <div>
          <div className="py-20 w-[92%] md:w-8/10 text-sm mx-auto ">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h1 className="text-2xl font-bold">Applicants</h1>
                  <p>Search by candidate name or position...</p>
                  
                </div>
                <div className="items-center flex gap-1 p-1 bg-[#ddf0ff] rounded-md text-sm w-fit" ><BsSliders2 />2 Shown</div>
              </div>
              <div className="my-3 flex flex-col md:flex-row items-stretch md:items-center gap-2 bg-white shadow-md border-1 border-gray-300 p-2 rounded-lg text-sm">
                  <div className="rounded-lg p-2 bg-[#f8fafd] border border-gray-300 flex items-center gap-2 w-full md:w-1/2">
                      <FaSearch className="text-gray-400"></FaSearch>
                      <input className="outline-0 focus:outline-0  w-full" type="text" placeholder="Search jobs by title,department or location..." />

                  </div>
                  <div className="w-full md:w-1/4">
                      <select className="outline-0 w-full  focus:outline-[#1469bb]  bg-[#f8fafd] border border-gray-300 rounded-lg p-2 text-sm" title="department" name="department" id="department">
                          <option value="">All statuses</option>
                          <option value="engineering">New</option>
                          <option value="marketing">Under Review</option>
                          <option value="sales">Interview</option>
                          <option value="sales">Accepted</option>
                          <option value="sales">Rejected</option>
                      </select>
                  </div>
                  <div className="w-full md:w-1/4">
                      <select className="outline-0 w-full  focus:outline-[#1469bb]  bg-[#f8fafd] border border-gray-300 rounded-lg p-2 text-sm" title="department" name="department" id="department">
                          <option value="">All Positions</option>
                          <option value="engineering">Frontend engineer</option>
                          <option value="marketing">Backend Engineer</option>
                          <option value="sales">DevOps Engineer</option>
                      </select>
                  </div>
              </div>

              {/* Candidates Table */}
              <div className="bg-white shadow-md border border-gray-300 rounded-xl overflow-x-auto">
                <table className="w-full min-w-[720px] text-left">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500 text-sm">
                      <th className="font-medium px-4 py-2.5">Candidate</th>
                      <th className="font-medium px-4 py-2.5 hidden md:table-cell">Position</th>
                      <th className="font-medium px-4 py-2.5">AI Match Score</th>
                      <th className="font-medium px-4 py-2.5">Status</th>
                      <th className="font-medium px-4 py-2.5 hidden lg:table-cell">Applied</th>
                      <th className="font-medium px-4 py-2.5 text-right">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Amelia Chen */}
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium text-xs">
                            AC
                          </div>
                          <div>
                            <p className="font-medium text-sm">Amelia Chen</p>
                            <p className="text-xs text-gray-500">San Francisco, CA</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden md:table-cell">Senior Frontend Engineer</td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 sm:w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: "94%" }}></div>
                          </div>
                          <span className="font-medium text-xs">94%</span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200 whitespace-nowrap">
                          Interview
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden lg:table-cell">Apr 21, 2026</td>
                      <td className="px-4 py-2.5 text-right">
                        <button onClick={()=>router.push('dashboard/candidate-details')} className="border border-gray-300 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-gray-50 whitespace-nowrap">
                          View Details
                        </button>
                      </td>
                    </tr>
 
                    {/* Priya Patel */}
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 shrink-0 rounded-full bg-sky-500 text-white flex items-center justify-center font-medium text-xs">
                            PP
                          </div>
                          <div>
                            <p className="font-medium text-sm">Priya Patel</p>
                            <p className="text-xs text-gray-500">London, UK</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden md:table-cell">Data Scientist, ML</td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 sm:w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: "91%" }}></div>
                          </div>
                          <span className="font-medium text-xs">91%</span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-200 whitespace-nowrap">
                          Accepted
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden lg:table-cell">Apr 19, 2026</td>
                      <td className="px-4 py-2.5 text-right">
                        <button onClick={()=>router.push('dashboard/candidate-details')} className="border border-gray-300 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-gray-50 whitespace-nowrap">
                          View Details
                        </button>
                      </td>
                    </tr>
 
                    {/* Marcus Johnson */}
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 shrink-0 rounded-full bg-emerald-600 text-white flex items-center justify-center font-medium text-xs">
                            MJ
                          </div>
                          <div>
                            <p className="font-medium text-sm">Marcus Johnson</p>
                            <p className="text-xs text-gray-500">New York, NY</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden md:table-cell">Product Designer</td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 sm:w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: "89%" }}></div>
                          </div>
                          <span className="font-medium text-xs">89%</span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200 whitespace-nowrap">
                          Under Review
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden lg:table-cell">Apr 20, 2026</td>
                      <td className="px-4 py-2.5 text-right">
                        <button className="border border-gray-300 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-gray-50 whitespace-nowrap">
                          View Details
                        </button>
                      </td>
                    </tr>
 
                    {/* Sofia Rossi */}
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 shrink-0 rounded-full bg-rose-600 text-white flex items-center justify-center font-medium text-xs">
                            SR
                          </div>
                          <div>
                            <p className="font-medium text-sm">Sofia Rossi</p>
                            <p className="text-xs text-gray-500">Milan, Italy</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden md:table-cell">Senior Frontend Engineer</td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 sm:w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: "87%" }}></div>
                          </div>
                          <span className="font-medium text-xs">87%</span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200 whitespace-nowrap">
                          Interview
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden lg:table-cell">Apr 17, 2026</td>
                      <td className="px-4 py-2.5 text-right">
                        <button className="border border-gray-300 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-gray-50 whitespace-nowrap">
                          View Details
                        </button>
                      </td>
                    </tr>
 
                    {/* Hannah Müller */}
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 shrink-0 rounded-full bg-teal-600 text-white flex items-center justify-center font-medium text-xs">
                            HM
                          </div>
                          <div>
                            <p className="font-medium text-sm">Hannah Müller</p>
                            <p className="text-xs text-gray-500">Berlin, Germany</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden md:table-cell">Data Scientist, ML</td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 sm:w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: "83%" }}></div>
                          </div>
                          <span className="font-medium text-xs">83%</span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200 whitespace-nowrap">
                          Under Review
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden lg:table-cell">Apr 15, 2026</td>
                      <td className="px-4 py-2.5 text-right">
                        <button onClick={()=>router.push('dashboard/candidate-details')} className="border border-gray-300 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-gray-50 whitespace-nowrap">
                          View Details
                        </button>
                      </td>
                    </tr>
 
                    {/* Liam O'Brien */}
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 shrink-0 rounded-full bg-green-700 text-white flex items-center justify-center font-medium text-xs">
                            LO
                          </div>
                          <div>
                            <p className="font-medium text-sm">Liam O'Brien</p>
                            <p className="text-xs text-gray-500">Miami, FL</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden md:table-cell">Senior Frontend Engineer</td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 sm:w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 rounded-full" style={{ width: "79%" }}></div>
                          </div>
                          <span className="font-medium text-xs">79%</span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-300 whitespace-nowrap">
                          New
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden lg:table-cell">Apr 22, 2026</td>
                      <td className="px-4 py-2.5 text-right">
                        <button onClick={()=>router.push('dashboard/candidate-details')} className="border border-gray-300 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-gray-50 whitespace-nowrap">
                          View Details
                        </button>
                      </td>
                    </tr>
 
                    {/* David Kim */}
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 shrink-0 rounded-full bg-orange-500 text-white flex items-center justify-center font-medium text-xs">
                            DK
                          </div>
                          <div>
                            <p className="font-medium text-sm">David Kim</p>
                            <p className="text-xs text-gray-500">Austin, TX</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden md:table-cell">DevOps Engineer</td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 sm:w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 rounded-full" style={{ width: "76%" }}></div>
                          </div>
                          <span className="font-medium text-xs">76%</span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200 whitespace-nowrap">
                          Under Review
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden lg:table-cell">Apr 18, 2026</td>
                      <td className="px-4 py-2.5 text-right">
                        <button onClick={()=>router.push('dashboard/candidate-details')} className="border border-gray-300 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-gray-50 whitespace-nowrap">
                          View Details
                        </button>
                      </td>
                    </tr>
 
                    {/* James Okafor */}
                    <tr>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 shrink-0 rounded-full bg-violet-700 text-white flex items-center justify-center font-medium text-xs">
                            JO
                          </div>
                          <div>
                            <p className="font-medium text-sm">James Okafor</p>
                            <p className="text-xs text-gray-500">Brooklyn, NY</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden md:table-cell">Product Designer</td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 sm:w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-rose-600 rounded-full" style={{ width: "68%" }}></div>
                          </div>
                          <span className="font-medium text-xs">68%</span>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-600 border border-rose-200 whitespace-nowrap">
                          Rejected
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 hidden lg:table-cell">Apr 16, 2026</td>
                      <td className="px-4 py-2.5 text-right">
                        <button onClick={()=>router.push('dashboard/candidate-details')} className="border border-gray-300 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-gray-50 whitespace-nowrap">
                          View Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    </div>
  );
}