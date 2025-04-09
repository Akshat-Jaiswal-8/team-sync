import React from "react";
import Link from "next/link";

const HomeLink = ({ href, name }: { href: string; name: string }) => {
  return (
    <Link href={href}>
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 from-30% via-sky-500 via-50% to-emerald-500 to-90% rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          {name}
        </div>
      </button>
    </Link>
  );
};

export default HomeLink;
