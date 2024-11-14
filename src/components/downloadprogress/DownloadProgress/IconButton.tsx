/**
 * This code was generated by Builder.io
 */
import React from "react";

interface IconButtonProps {
  icon: string;
  altText: string;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  altText,
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`flex overflow-hidden flex-col justify-center items-center p-2 w-[23px] ${className}`}
      onClick={onClick}
      aria-label={altText}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain w-full h-full"
      />
    </button>
  );
};

export default IconButton;
