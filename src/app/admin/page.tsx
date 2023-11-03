'use client'
import React,{useState} from "react";

export default function Page() {
  const [password,setPassword] = useState<string>('');
  return (
    <div className="absolute inset-0 bg-white">
      <form className="w-full  flex justify-center items-center h-screen flex-col space-y-5">
        <h2 className="text-red-500 text-5xl font-bold">Admin</h2>
        <input type="password" name="password" placeholder="Enter password" className="bg-transparent border border-black rounded-md px-3 py-1 w-[20rem]  outline-none" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" className="bg-black text-white px-4 py-1 rounded-md">submit</button>
      </form>
    </div>
  );
}
