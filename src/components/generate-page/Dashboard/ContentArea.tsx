/**
 * This code was generated by Builder.io
 */
import React from "react";
import SelectionPanel from "./SelectionPanel";
import GenerationArea from "./GenerationArea";

const ContentArea: React.FC = () => {
  return (
    <div className="flex-auto max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <SelectionPanel />
        <GenerationArea />
      </div>
    </div>
  );
};

export default ContentArea;
