import { dialogs } from "@/utils/buttons";
import { useState } from "react";

interface IDialog {
  currentOption: string;
}
const Dialog = ({ currentOption }: IDialog) => {
  const [currentDialog, setCurrentDialog] = useState(0);
  let { title, dialog } = dialogs[currentOption as keyof typeof dialogs];
  return (
    <span
      data-display={!!currentOption}
      className="data-[display=false]:hidden fadein transition-all duration-200 rounded-[26px] left-1/2 -translate-x-1/2 bottom-[3vh] w-[80vw] fixed h-[20vh] z-10 border-[3px] border-blue-400/70"
    >
      <div className="text-neutral-900 h-full w-full bg-white/90 border-blue-200 border-[3px] flex flex-col gap-3 p-6 rounded-3xl">
        <h1 className="text-md lg:text-xl capitalize font-bold">{title}</h1>
        <p className="lg:text-lg font-base text-sm h-full overflow-y-auto">
          <span className="flex">
            {dialog.map((diag, index) => {
              return (
                <p
                  data-display={index == currentDialog}
                  key={`label-${index}`}
                  className="data-[display=false]:hidden fadein"
                >
                  {diag}
                </p>
              );
            })}
          </span>
        </p>
      </div>
    </span>
  );
};

export default Dialog;
