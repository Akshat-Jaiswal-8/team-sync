import React from "react";
import { Logo } from "@/app/(auth)/_components/Logo";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        "h-full flex flex-col mt-2 space-y-6 items-center justify-center"
      }
    >
      <Logo />
      {children}
    </div>
  );
};

export default Layout;
