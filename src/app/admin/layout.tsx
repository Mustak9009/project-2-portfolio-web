import React from "react";
import Link from "next/link";

export default function DashboardLayout({children}: {children: React.ReactNode;}) {
  return (
    <section>
      <div className="flex justify-center items-center flex-col h-[20vh]">
        <h1 className="text-5xl font-bold mb-5">
            <Link href={'/admin'}>
                Admin
            </Link>
            </h1>
        <div className="space-x-10 text-lg">
          <Link href={"/admin/social"} className="hover:text-red-500">Social</Link>
          <Link href={"/admin/message"} className="hover:text-red-500">Message</Link>
          <Link href={"/admin/project"} className="hover:text-red-500">Project</Link>
        </div>
      </div>
      {children}
    </section>
  );
}
