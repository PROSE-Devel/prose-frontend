/**
 * This code was generated by Builder.io
 */
import React from "react";

interface DownloadButtonProps {}

const DownloadButton: React.FC<DownloadButtonProps> = () => {
  return (
    <button className="flex flex-col justify-center items-center px-16 py-2 mt-6 w-full text-sm font-bold tracking-tight text-white whitespace-nowrap bg-cyan-800 rounded-lg shadow-md">
      <div className="flex gap-1 w-[94px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/172159aa3dc512a6ab4a7465739afcd1d51aa0517f8b19d449fe98012bb6701d?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <span className="my-auto">Download</span>
      </div>
    </button>
  );
};

export default DownloadButton;
