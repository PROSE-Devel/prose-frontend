/**
 * This code was generated by Builder.io
 */
import React from "react";

interface FileCardProps {
  name: string;
  icon?: string;
  type: "doc" | "ppt" | "video" | "processing";
  image?: string;
}

const FileCard: React.FC<FileCardProps> = ({ name, icon, type, image }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 py-2.5 rounded-xl bg-slate-100">
      {image ? (
        <div className="flex overflow-hidden relative flex-col pt-2 pr-1.5 pl-5 w-full aspect-[1.722]">
          <img
            src={image}
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/9a01ef74dedc61bad32189075d74ad06c6cffbaff65deb8d5255ada1dfddbcef?apiKey=8503a1cbfa074840bee6a35abd296d00&"
            alt=""
            className="object-contain self-end w-6 rounded aspect-square"
          />
          <div className="flex overflow-hidden relative z-10 justify-center items-center px-1.5 mt-24 -mb-3 bg-white rounded-lg shadow-sm h-[39px] min-h-[39px] w-[39px] max-md:mt-10 max-md:mb-2.5">
            <img
              src={icon}
              alt=""
              className="object-contain w-full aspect-[1.04]"
            />
          </div>
        </div>
      ) : type === "video" || type === "processing" ? (
        <div
          className="flex shrink-0 h-[163px]"
          aria-label={
            type === "video" ? "Video thumbnail" : "Processing thumbnail"
          }
        />
      ) : (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/9f7bc22e193f7b328b5b11b22ad4d194beeb65b77b5b626c4cabcb7d110af458?apiKey=8503a1cbfa074840bee6a35abd296d00&"
          alt=""
          className="object-contain self-end w-6 rounded aspect-square max-md:mr-2.5"
        />
      )}
      <div className="flex flex-col px-3 mt-2.5 w-full">
        {icon && !image && (
          <div className="flex overflow-hidden justify-center items-center px-1.5 bg-white rounded-lg shadow-sm h-[39px] min-h-[39px] w-[39px]">
            <img
              src={icon}
              alt=""
              className="object-contain self-stretch my-auto aspect-[1.04] w-[26px]"
            />
          </div>
        )}
        <div
          className={`${
            image ? "mt-5" : "mt-2.5"
          } text-base font-semibold leading-none text-gray-950`}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default FileCard;