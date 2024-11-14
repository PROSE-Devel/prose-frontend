import React from 'react';

interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center self-end px-4 py-3 bg-white rounded-lg shadow-[0px_1px_4px_rgba(0,0,0,0.12)] max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-center items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex gap-3 justify-center items-center min-w-[240px] max-md:max-w-full">
          <div className="flex overflow-hidden gap-1.5 items-center self-stretch px-1.5 my-auto text-base font-medium leading-6 text-center rounded bg-zinc-100 text-zinc-800">
            <span className="self-stretch my-auto">Paragraph text</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/f1204363aece374c9e9769f5cdf1b21bd730aad9b73f8cbd3f34b040266bf9c1?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
          </div>
          <div className="flex overflow-hidden gap-1.5 items-center self-stretch px-1.5 my-auto text-base font-medium leading-6 whitespace-nowrap rounded bg-zinc-100 text-zinc-800">
            <span className="self-stretch my-auto w-[120px]">Montserrat</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/f1204363aece374c9e9769f5cdf1b21bd730aad9b73f8cbd3f34b040266bf9c1?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
          </div>
          <div className="flex gap-2.5 justify-center items-center self-stretch my-auto h-7 rounded border border-solid shadow-sm bg-zinc-50 border-neutral-200 min-h-[28px]">
            <button className="flex flex-col justify-center items-center self-stretch my-auto w-9 rounded-xl min-h-[28px] shadow-[0px_1px_2px_rgba(26,26,26,0.08)]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/704988948832021d2acdc291ea225d46c127b39c27a2ef3e9693f4ecf42ef406?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Decrease font size" className="object-contain w-5 aspect-square" />
            </button>
            <span className="self-stretch text-base font-medium leading-6 text-center text-zinc-800 w-[21px]">16</span>
            <button className="flex flex-col justify-center items-center self-stretch my-auto w-9 rounded-xl min-h-[28px] shadow-[0px_1px_2px_rgba(26,26,26,0.08)]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/03577003f3e9179cb355bce3dcdf64952a80db22c2bfca1ea1f6e7f7b2377e41?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Increase font size" className="object-contain w-5 aspect-square" />
            </button>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center min-w-[240px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/ebcb0a37e10e6d709a0be64b1e2cad8f7afd0d878e1297be780e8d612c6a3667?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Text alignment options" className="object-contain shrink-0 self-stretch my-auto w-14 aspect-[2]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/4f0956eaf65859fbe8aa9a66c4fac30af0b8999d2c82f1b790a8a1a1ce5b892f?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Bold" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/9bf8fb05979d96b9297fff95f00b3df3dae35b6badb62f6498501ad01b438e5f?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Italic" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/08c77a0aecef48ae6f9a0c64987574e95564a727a6d2fc153dcc9bc2667c7a96?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Underline" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/00834c8b6d58fc800ce86a14d08df7805c8d7e450a2cb7c37319121c802bfbb1?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Strikethrough" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/ab8e93089dd60acaeb14230dc150ca3f2517133f0aac46211082a941333c4460?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Text color" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/45b131c571478461c80d9e4e27586e3f6047be5f2833c7955980a05e91e2cf23?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Link" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/0f558e899a4c32fdff446e5aa55fef5b2ede0647a8fcd89d51d90f46f1a82c87?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Image" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/efa703b644f9386c422ee4ae23a300dbefa938d3e77f8772047355a020843cdf?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Table" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
      <div className="flex gap-3 items-center self-stretch my-auto">
        <div className="flex gap-1 items-center self-stretch my-auto w-14">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/d8da4ae5c955d616ba58caab06ead3da52ab9b12fc44ca178dc6ed2f37d3ec3d?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="List options" className="object-contain self-stretch my-auto w-14 aspect-[2]" />
        </div>
        <div className="flex gap-4 items-center self-stretch my-auto">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/1b17ceab2a4ea75454bede48fb9e8ba4109419351ee66a8312df62143de5b780?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Undo" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/8503a1cbfa074840bee6a35abd296d00/3322f9074fd55a5b301b19726d8f678615c5777cb28e139f13c00018310ffa02?apiKey=8503a1cbfa074840bee6a35abd296d00&" alt="Redo" className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
