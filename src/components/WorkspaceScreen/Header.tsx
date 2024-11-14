/**
 * This code was generated by Builder.io
 */
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex gap-5 justify-between w-full max-md:mr-1.5 max-md:max-w-full">
      <h1 className="text-3xl font-black text-center text-cyan-800 uppercase">
        PROSE
      </h1>
      <nav className="flex gap-2 my-auto text-base tracking-tight text-gray-400">
        <span>Pages</span>
        <span className="font-semibold">/</span>
        <span className="text-gray-600">Workspace</span>
      </nav>
      <div className="flex gap-3.5 items-center self-start mt-1">
        <button className="flex gap-2 items-start self-stretch px-3 py-2 text-sm font-bold text-white bg-cyan-800 rounded-lg bg-blend-normal">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/27aaea9e956e3ab3cc23a1f8c214e05a95d91bb4b1dd9a5714ae303037ec659c?apiKey=8503a1cbfa074840bee6a35abd296d00&"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <span>UPGRADE NOW</span>
        </button>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/8ce7721bfb9f058e8540df4404df40cf93bd80c1ea79c73d818db8e3e59848c9?apiKey=8503a1cbfa074840bee6a35abd296d00&"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[0.92] w-[22px]"
        />
        <div className="flex gap-1.5 items-center self-stretch my-auto text-base font-semibold tracking-tight text-gray-600">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/f495693d268df6e30b15911237c3ae43d620495bd98da7bfed1f9a55657e8e5b?apiKey=8503a1cbfa074840bee6a35abd296d00&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <span>Pooja P</span>
        </div>
      </div>
    </header>
  );
};

export default Header;