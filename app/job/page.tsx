'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Job() {
  const router=useRouter();
  return (
    <div>
        <Navbar></Navbar>
        <div className="bg-[#f9fafb]   py-8">
          <header className=" " >
          <Image className="w-full object-cover h-auto" src="/careers_header.jpg" alt="Header Image " width={1920} height={600} />
        </header>
        <div className="w-7/10 mx-auto py-5  ">
          <h1 className="font-bold my-3 text-2xl">ITG is an equal opportunity employer.</h1>
          <h1 className="font-semibold my-1 text-xl text-[#1469bb]">Join our team!</h1>
          <p className="mb-3 text-[#555555] leading-[25px]">If you are looking for an exciting career in a dynamic IT environment where you can learn, achieve, and create an impact and you would like to be part of a continuously growing operation, you have come to the right place.ITG is a leading IT company with exciting projects and deployments in local, regional, and international markets.Innovation, professionalism, team spirit, and enthusiasm are values we look for in all candidates. If you have the right qualifications and would like to apply for a position at ITG, please fill out the application below.ITG is an equal opportunity employer. The company welcomes qualified individuals from all backgrounds and will consider all applicants fairly and equally. The basic considerations in hiring for all positions are qualifications, professionalism, skills, innovation, and talent. ITG will not discriminate against any employee or applicant on the basis of race, ethnicity, gender, religion, age, disability, or any classification protected by national or local law.</p>
            <div className="jobs flex flex-col gap-4">
            <div onClick={()=>router.push('/job/jobDetails')} className="flex  rounded-xl border-1 border-[#dfe5ed] hover:border-[#1469bb] p-4 items-center justify-between   bg-white ">
              <div className="flex flex-col items-start">
                <h1 className="font-bold ">Front end developer</h1>
                <div className="flex text-[#6a7282] items-center gap-4 ">
                  <p className="flex items-center gap-1 "><IoLocationOutline />jordan, amman</p>
                  <p className="flex  items-center gap-1"><IoTimeOutline />Full-time</p>
                  <p className="flex  items-center gap-1">computer science</p>
                  <b>$70,000 - $90,000</b>
                </div>
                <div className="flex gap-2 my-2 flex-wrap ">
                  <div className="flex p-1 items-center justify-center bg-[#f3f4f6] text-[#4a5565] text-xs rounded">Figma</div>
                  <div className="flex p-1 items-center justify-center bg-[#f3f4f6] text-[#4a5565] text-xs rounded">design</div>
                </div>
              </div>
              <p className="text-[#1469bb] items-center flex gap-1 cursor-pointer font-bold">View & Apply <BsArrowRight/></p>
            </div>
            <div onClick={()=>router.push(`/job/jobDetails`)} className="flex  rounded-xl border-1 border-[#dfe5ed] hover:border-[#1469bb] p-4 items-center justify-between   bg-white ">
              <div className="flex flex-col items-start">
                <h1 className="font-bold ">Front end developer</h1>
                <div className="flex text-[#6a7282] items-center gap-4 ">
                  <p className="flex items-center gap-1 "><IoLocationOutline />jordan, amman</p>
                  <p className="flex  items-center gap-1"><IoTimeOutline />Full-time</p>
                  <p className="flex  items-center gap-1">computer science</p>
                  <b>$70,000 - $90,000</b>
                </div>
                <div className="flex gap-2 my-2 flex-wrap ">
                  <div className="flex p-1 items-center justify-center bg-[#f3f4f6] text-[#4a5565] text-xs rounded">Figma</div>
                  <div className="flex p-1 items-center justify-center bg-[#f3f4f6] text-[#4a5565] text-xs rounded">design</div>
                </div>
              </div>
              <p className="text-[#1469bb] items-center flex gap-1 cursor-pointer font-bold">View & Apply <BsArrowRight/></p>
            </div>
          </div>
        </div>
        </div>
        <Footer></Footer>
    </div>
  );
}
