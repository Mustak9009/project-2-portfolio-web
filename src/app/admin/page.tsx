"use client";
import React, { useState } from "react";
import { adminPosthandler } from "@/helper/apiHelper";
import { useMutation } from "@tanstack/react-query";
const Form = ({ handleSubmit, password, setPassword }: any) => {
  return (
    <div className="absolute inset-0 bg-white">
      <form className="w-full  flex justify-center items-center h-screen flex-col space-y-5" onSubmit={handleSubmit}>
        <h2 className="text-red-500 text-5xl font-bold">Admin</h2>
        <input type="password" name="password" placeholder="Enter password" className="bg-transparent border border-black rounded-md px-3 py-1 w-[20rem]  outline-none" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" className="bg-black text-white px-4 py-1 rounded-md">
          submit
        </button>
      </form>
      ;
    </div>
  );
};
export default function Page() {
  const [password, setPassword] = useState<string>("");
  const { mutate, data } = useMutation({
    mutationKey: ["admin"],
    mutationFn: adminPosthandler,
  });
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    mutate({ password });
  };
  if (!data) {
    return (
      <Form
        handleSubmit={handleSubmit}
        password={password}
        setPassword={setPassword}
      />
    );
  } else if (data.isAdmin !== true) {
    return (
      <Form
        handleSubmit={handleSubmit}
        password={password}
        setPassword={setPassword}
      />
    );
  } else {
    return <div></div>;
  }
}
