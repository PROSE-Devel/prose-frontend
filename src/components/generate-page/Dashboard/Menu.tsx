/**
 * This code was generated by Builder.io
 */
import React from "react";

interface MenuItem {
  icon: string;
  label: string;
  isActive?: boolean;
}

const menuItems: MenuItem[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef1b1bf7c5b7ae56326af052be20b9278203eeab713af83feb45ea16f357fb93?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00",
    label: "Generate",
    isActive: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3679ee1d65d57dd67a9d7c297bdf51efb6e11c1185563ea276ddd6dbfe93f6a3?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00",
    label: "Analyze",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/566eb4d0e54f0112f9969e9f99d48d64ecd1fcfdddbbd89167d5bb187038ef92?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00",
    label: "Workspace",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/276aa340140d805ee195826bb494418b7f5d6291419dfec5ca9b97e904619cef?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00",
    label: "Support",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/675f793c8fea8ca34e84d1b9f5608525f5d6235ac8869f1f249d35e7f2539eae?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00",
    label: "Settings",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8756cac42efe148c78323ef156d0e8563ad7c5e55181826c166b55a94c984c6c?placeholderIfAbsent=true&apiKey=8503a1cbfa074840bee6a35abd296d00",
    label: "Logout",
  },
];

const Menu: React.FC = () => {
  return (
    <nav className="flex flex-col justify-center items-center self-start mt-5 text-lg font-medium text-slate-500">
      {menuItems.map((item, index) => (
        <React.Fragment key={item.label}>
          <div
            className={`flex flex-col justify-center items-center px-1.5 py-3 mt-6 whitespace-nowrap ${
              item.isActive
                ? "bg-blue-100 rounded-lg text-zinc-800"
                : "text-slate-500"
            }`}
          >
            <img
              src={item.icon}
              alt=""
              className="object-contain w-7 aspect-square"
            />
            <div className="mt-2">{item.label}</div>
          </div>
          {index < menuItems.length - 1 && (
            <div className="mt-6 max-w-full border border-gray-400 border-solid min-h-[1px] w-[100px]" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Menu;
