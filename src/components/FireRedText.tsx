import { ReactNode } from "react";

interface FireRedTextProps {
  children: ReactNode;
  primary?: string;
  secondary?: string;
}

const FireRedText = ({ children, primary, secondary }: FireRedTextProps) => {
  return (
    <span
      className={`relative items-center z-10 flex w-fit flex-nowrap h-fit text-${primary}`}
    >
      <p className="flex items-center gap-2 flex-shrink-0 flex-nowrap whitespace-nowrap">
        {children}
      </p>
      <p
        className={`flex items-center gap-2 flex-shrink-0 flex-nowrap absolute -z-10 opacity-60 top-[2px] left-[2px] whitespace-nowrap text-${secondary} fill-${secondary}`}
      >
        {children}
      </p>
    </span>
  );
};

export default FireRedText;
