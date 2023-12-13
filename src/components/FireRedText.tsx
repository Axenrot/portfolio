import { playSound } from "@/utils/playSound";
import { ReactNode } from "react";

interface FireRedTextProps {
  children: ReactNode;
}

const FireRedText = ({ children, ...props }: FireRedTextProps) => {
  return (
    <span
      {...props}
      className={`hover:filter hover:hue-rotate-60 hover:opacity-100 opacity-90 relative items-center z-10 flex w-fit flex-nowrap h-fit text-white`}
    >
      <p className="flex items-center gap-2 flex-shrink-0 flex-nowrap whitespace-nowrap drop-shadow-pixel">
        {children}
      </p>
      <p
        className={`flex items-center gap-2 flex-shrink-0 flex-nowrap absolute -z-10 opacity-60 top-[2px] left-[2px] whitespace-nowrap filter invert`}
      >
        {children}
      </p>
    </span>
  );
};

export default FireRedText;
