/**
 * This code was generated by Builder.io
 */
import React from "react";

export const TopicInput: React.FC = () => {
  return (
    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full mt-8">
      <div className="flex flex-col w-full text-sm leading-6 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
          <label
            htmlFor="topicInput"
            className="self-stretch my-auto font-semibold text-gray-600"
          >
            Write the topic for your document
          </label>
          <div className="self-stretch my-auto font-medium text-gray-400">
            <span className="text-gray-600">0</span>
            <span>0/200</span>
          </div>
        </div>
        <textarea
          id="topicInput"
          className="overflow-hidden gap-2.5 self-stretch pt-2 pr-2.5 pb-10 pl-2 mt-2 w-full rounded-md border border-gray-300 border-solid min-h-[96px] text-zinc-800 max-md:max-w-full"
          placeholder="Write an essay on 'The Future of Electric Vehicle Charging: Innovative Solutions for Tomorrow.'"
          aria-label="Document topic"
        />
      </div>
    </div>
  );
};
