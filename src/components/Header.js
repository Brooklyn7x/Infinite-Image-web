import React from "react";
import logo from "../img/logo.jpg";

const Header = () => {
  return (
    <div className="relative flex">
      <div className="absolute top-0 left-0 bg-gradient-to-b from-slate-300 z-10 w-full text-black">
        <div className="flex-grow text-center py-8">
          <h1 className="font-bold">IMAGE</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
