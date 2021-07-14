import React from "react";
import { ReactComponent as CowIcon } from "../assets/lehma.svg";
import { ReactComponent as Logo } from "../assets/milkmate_logo.svg";

const Header = () => {
  return (
    <div className="">
      <div className=" bg-blue-900 flex items-center justify-between p-3 pl-6 md:pl-14 pr-10">
        <div className="flex items-center space-x-10 md:space-x-6">
          <CowIcon className="fill-current text-white h-12 md:h-10" />
          <Logo className="fill-current text-white h-7 md:h-5" />
        </div>
        <div className="text-white hidden md:block">Jussi Maajussi</div>
      </div>
    </div>
  );
};

export default Header;
