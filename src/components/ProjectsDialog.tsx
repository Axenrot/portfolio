"use client";
import { projects } from "@/utils/projects";
import { playSound } from "@/utils/playSound";
import Image from "next/image";

interface IProjectsDialog {
  currentOption: string;
}
const ProjectsDialog = ({ currentOption }: IProjectsDialog) => {
  let { route, description } = projects[currentOption as keyof typeof projects];

  return (
    <div className="flex flex-col left-1/2 gap-2 -translate-x-1/2 bottom-[10vh] w-[80vw] fixed h-[25vh] z-10">
      <span
        onMouseEnter={() => {
          playSound("/assets/sounds/btn.wav");
        }}
        onClick={() => {
          playSound("/assets/sounds/select.wav");
          window.open(route, "_blank");
        }}
        className="group flex pointer-events-none cursor-pointer fadein border-[3px] rounded-[14px] border-blue-400/70 h-fit w-fit ml-auto"
      >
        <span className="relative pointer-events-auto flex items-center bg-white/90 border-blue-200 border-[3px] px-8 py-2 h-full w-full text-xl md:text-2xl rounded-xl text-neutral-900 ">
          <span className="hidden group-hover:block -rotate-90 absolute left-3 mt-1">
            <Image
              src="/assets/icons/arrow-down.png"
              className="animate-bounce"
              width={20}
              height={20}
              alt=""
            />
          </span>
          CHECK IT OUT!
        </span>
      </span>
      <span className="select-none h-[25vh] pointer-events-auto overflow-hidden flex flex-1 text-xl sm:text-3xl font-firered fadein transition-all duration-200 rounded-[14px] border-[3px] border-blue-400/70">
        <span className="gap-3 h-full p-1 flex flex-wrap flex-1 text-neutral-900 w-full bg-white/90 border-blue-200 border-[3px] rounded-xl">
          <span className="h-full w-full pointer-events-auto flex-1 flex flex-wrap gap-2 overflow-y-auto px-3 py-2">
            {description.split(" ").map((word, index) => (
              <p key={`word-${index}`}>{word}</p>
            ))}
          </span>
        </span>
      </span>
    </div>
  );
};

export default ProjectsDialog;
