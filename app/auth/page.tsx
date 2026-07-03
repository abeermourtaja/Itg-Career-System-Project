'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiLockAlt } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";

export default function Auth() {
    const router = useRouter();
    return(
        <div className="min-h-screen bg-slate-50 flex flex-col items-center pt-16 px-4">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="logo flex items-center gap-2">
        <Image className="size-15" src="/ITG_logo.png" alt="Logo" width={100} height={100} />
        <div className="text-3xl font-bold text-[#1469bb]">ITG Solution</div>
      </div>
      </div>
 
 
      {/* Card */}
      <div className="bg-white rounded-2xl shadow p-6 mt-8 w-full max-w-md">
        {/* Tabs */}
        <div className="bg-slate-100 rounded-xl p-1 flex">
          <div className="flex-1 bg-white rounded-lg text-center py-2 font-medium shadow-sm">
            <Link href="/auth">Sign In</Link>
          </div>
          <div className="flex-1 text-center py-2 font-medium text-slate-500">
            <Link href="/auth/signup">Sign Up</Link>
          </div>
        </div>
 
        {/* Email */}
        <div className="mt-6">
          <label className="font-medium">Email</label>
          <div className="border border-[#e5e7eb] focus-within:border-[#1469bb]  rounded-xl px-3 py-3 mt-2 flex items-center gap-2">
            <MdOutlineEmail className="text-[#99a1af]" />
            <input
              type="email"
              placeholder="you@example.com"
              className="outline-none w-full text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>
 
        {/* Password */}
        <div className="mt-5">
          <label className="font-medium">Password</label>
          <div className="border border-[#e5e7eb] focus-within:border-[#1469bb] rounded-xl px-3 py-3 mt-2 flex items-center gap-2">
            <BiLockAlt className="text-[#99a1af]"  />

            <input
              type="password"
              placeholder="Your password"
              className="outline-none w-full text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>
 
        {/* Submit */}
        <button onClick={()=>router.push('/job')} className="bg-[#1469bb] text-white font-semibold rounded-xl w-full py-3 mt-6">
          Sign In
        </button>
 
        {/* Footer */}
        <div className="text-center text-slate-500 mt-5">
          Don&apos;t have an account?{" "}
          <span className="text-[#1469bb] font-semibold underline">Sign up</span>
        </div>
      </div>
    </div>
    );
}