"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/public/logo.svg";

const Navbar: FC = () => {
  const handleBrowseCode = () => {
    window.open("https://github.com/0xkafkaa/codeCSES", "_blank");
  };
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-customBlack background-blur-sm">
      <div className="flex items-center space-x-3">
        <Logo className="w-8 h-8" />
        <span className="text-lg font-semibold">CodeCSES</span>
      </div>
      <Button
        onClick={() => handleBrowseCode()}
        className="bg-slate-200 text-customBlack font-semibold hover:bg-customBlack hover:text-customWhite shadow-none rounded-lg"
      >
        Browse Code
      </Button>
    </nav>
  );
};

export default Navbar;
