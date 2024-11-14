/**
 * This code was generated by Builder.io
 */
import React from "react";

export const DocumentTypeSelector: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 items-center mt-6 w-full max-md:max-w-full">
      <label
        htmlFor="documentType"
        className="self-stretch py-2 my-auto text-sm font-semibold text-gray-600"
      >
        Select your Document type
      </label>
      <div className="flex grow shrink gap-7 items-center self-stretch py-2 pr-2.5 pl-4 my-auto text-lg whitespace-nowrap rounded-lg border border-gray-300 border-solid text-slate-800 w-[174px]">
        <select
          id="documentType"
          className="self-stretch my-auto w-[133px] bg-transparent border-none appearance-none"
        >
          <option>Blog</option>
        </select>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df97e04494c8ed108cc5b3fca83f7343a359b3b0a5212d9e590c6c876a21f597?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
    </div>
  );
};