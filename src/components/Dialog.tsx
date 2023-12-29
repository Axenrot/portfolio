"use client";
import { dialogs } from "@/utils/buttons";
import { playSound } from "@/utils/playSound";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IDialog {
  currentOption: string;
  onPush?: () => void;
}
const Dialog = ({ currentOption, onPush }: IDialog) => {
  const router = useRouter();
  const [currentDialog, setCurrentDialog] = useState(0);
  let { route, dialog } = dialogs[currentOption as keyof typeof dialogs];

  useEffect(() => {
    setCurrentDialog(0);
  }, [currentOption]);

  return (
    <>
      {currentDialog + 1 < dialog.length && (
        <span
          onClick={() => {
            if (currentDialog + 1 < dialog.length) {
              playSound("/assets/sounds/btn.wav");
              setCurrentDialog(currentDialog + 1);
            }
          }}
          className="fixed cursor-pointer h-screen w-screen z-20 top-0 left-0"
        />
      )}
      <span
        data-display={!!currentOption}
        className="flex justify-end flex-col gap-2 data-[display=false]:hidden select-none text-2xl sm:text-3xl font-firered fadein transition-all duration-200 rounded-[14px] left-1/2 -translate-x-1/2 bottom-[3vh] w-[80vw] fixed h-[30vh] z-10"
      >
        <span
          onMouseEnter={() => {
            playSound("/assets/sounds/btn.wav");
          }}
          onClick={() => {
            playSound("/assets/sounds/btn.wav");
            if (onPush) {
              setTimeout(onPush, 2000);
            }
            router.push(route);
          }}
          data-display={currentDialog + 1 == dialog.length && route.length > 0}
          className="group flex data-[display=false]:hidden cursor-pointer fadein h-fit w-fit ml-auto border-[3px] rounded-[14px] border-blue-400/70"
        >
          <span className="relative flex items-center bg-white/90 border-blue-200 border-[3px] px-8 py-2 h-full w-full rounded-xl text-neutral-900 ">
            <span className="hidden group-hover:block -rotate-90 absolute left-3 mt-1">
              <Image
                src="/assets/icons/arrow-down.png"
                className="animate-bounce"
                width={20}
                height={20}
                alt=""
              />
            </span>
            VISIT PAGE
          </span>
        </span>

        <div className="rounded-xl border-[3px] border-blue-400/70 h-[15vh]">
          <div className="text-neutral-900 h-full w-full bg-white/90 border-blue-200 border-[3px] flex flex-col gap-3 px-3 md:px-5 py-2 rounded-xl">
            <span className="relative flex h-full">
              {dialog.map((diag, index) => {
                return (
                  <p
                    key={`label-${index}`}
                    data-display={index == currentDialog}
                    className="data-[display=false]:hidden fadein tracking-wider"
                  >
                    {diag}
                  </p>
                );
              })}
              <span
                data-display={currentDialog + 1 < dialog.length}
                className="data-[display=false]:hidden absolute right-8 bottom-2"
              >
                <Image
                  src="/assets/icons/arrow-down.png"
                  className="animate-bounce"
                  width={20}
                  height={20}
                  alt=""
                />
              </span>
            </span>
          </div>
        </div>
      </span>
    </>
  );
};

export default Dialog;
