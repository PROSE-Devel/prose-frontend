/**
 * This code was generated by Builder.io
 */
import React from "react";
import { FormatSelector } from "./FormatSelector";
import { TopicInput } from "./TopicInput";
import { WordCountSelector } from "./WordCountSelector";
import { PassageSizeSelector } from "./PassageSizeSelector";
import { DocumentTypeSelector } from "./DocumentTypeSelector";
import { DetailsInput } from "./DetailsInput";
import { ReferenceToggle } from "./ReferenceToggle";
import { SourceDocumentUploader } from "./SourceDocumentUploader";
import { GenerateButtons } from "./GenerateButtons";

export const DocumentGeneratorForm: React.FC = () => {
  return (
    <main className="flex flex-col pt-6 pb-12 bg-white border-r-2 border-gray-300 max-w-[537px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col pl-6 w-full max-md:pl-5 max-md:max-w-full">
        <FormatSelector />
        <TopicInput />
        <WordCountSelector />
        <PassageSizeSelector />
        <DocumentTypeSelector />
        <DetailsInput />
        <ReferenceToggle />
        <SourceDocumentUploader />
        <button className="self-end px-3 py-3 mr-6 text-base font-semibold text-gray-600 rounded-lg max-md:mr-2.5">
          Start New
        </button>
      </div>
      <GenerateButtons />
    </main>
  );
};
