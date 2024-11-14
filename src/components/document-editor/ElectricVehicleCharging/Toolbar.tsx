/**
 * This code was generated by Builder.io
 */
import React from "react";

interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <nav className="flex flex-wrap gap-4 items-center px-4 py-3 mt-5 bg-white rounded-lg shadow-[0px_1px_4px_rgba(0,0,0,0.12)] max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-center items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex gap-3 justify-center items-center min-w-[240px] max-md:max-w-full">
          <div className="flex overflow-hidden gap-1.5 items-center self-stretch px-1.5 my-auto text-base font-medium leading-6 text-center rounded bg-zinc-100 text-zinc-800">
            <span className="self-stretch my-auto">Paragraph text</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/084a515f82911f09fd63de424dda7266247a9e00d77cc794737251ff728b766d?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            />
          </div>
          <div className="flex overflow-hidden gap-1.5 items-center self-stretch px-1.5 my-auto text-base font-medium leading-6 whitespace-nowrap rounded bg-zinc-100 text-zinc-800">
            <span className="self-stretch my-auto w-[120px]">Montserrat</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/084a515f82911f09fd63de424dda7266247a9e00d77cc794737251ff728b766d?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            />
          </div>
          <div className="flex gap-2.5 justify-center items-center self-stretch my-auto h-7 rounded border border-solid shadow-sm bg-zinc-50 border-neutral-200 min-h-[28px]">
            <button
              aria-label="Decrease font size"
              className="flex flex-col justify-center items-center self-stretch my-auto w-9 rounded-xl min-h-[28px] shadow-[0px_1px_2px_rgba(26,26,26,0.08)]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/196fbcf4b43cd38339e95b986f1567e4f0bf97aeabd9a4b32ccbd9539378b6fc?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00"
                alt=""
                className="object-contain w-5 aspect-square"
              />
            </button>
            <span className="self-stretch text-base font-medium leading-6 text-center text-zinc-800 w-[21px]">
              16
            </span>
            <button
              aria-label="Increase font size"
              className="flex flex-col justify-center items-center self-stretch my-auto w-9 rounded-xl min-h-[28px] shadow-[0px_1px_2px_rgba(26,26,26,0.08)]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/03577003f3e9179cb355bce3dcdf64952a80db22c2bfca1ea1f6e7f7b2377e41?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00"
                alt=""
                className="object-contain w-5 aspect-square"
              />
            </button>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center min-w-[240px]">
          {[9, 10, 11, 12, 13, 14].map((num) => (
            <img
              key={num}
              loading="lazy"
              src={`http://b.io/ext_${num}-`}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            />
          ))}
        </div>
      </div>
      {[15, 16, 17].map((num) => (
        <img
          key={num}
          loading="lazy"
          src={`http://b.io/ext_${num}-`}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
        />
      ))}
      <div className="flex gap-3 items-center self-stretch my-auto">
        <div className="flex gap-1 items-center self-stretch my-auto w-14">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a57c2b5c41c902369de93df628e10bef3565fabb772c7872f0e693277d5b28?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00"
            alt=""
            className="object-contain self-stretch my-auto w-14 aspect-[2]"
          />
        </div>
        <div className="flex gap-4 items-center self-stretch my-auto">
          {[19, 20, 21].map((num) => (
            <img
              key={num}
              loading="lazy"
              src={`http://b.io/ext_${num}-`}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;