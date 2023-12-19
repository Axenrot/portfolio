"use client";
import { projects } from "@/utils/projects";
import { playSound } from "@/utils/playSound";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
          playSound("/assets/sounds/btn.wav");
          window.open(route, "_blank");
        }}
        className="group flex cursor-pointer fadein border-[3px] rounded-[14px] border-blue-400/70 h-fit w-fit ml-auto"
      >
        <span className="relative flex items-center bg-white/90 border-blue-200 border-[3px] px-4 py-2 h-full w-full rounded-xl text-neutral-900 ">
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
      <span className="select-none flex flex-1 text-2xl sm:text-3xl lg:text-2xl font-firered fadein transition-all duration-200 rounded-[14px] border-[3px] border-blue-400/70">
        <span className="gap-3 flex flex-wrap flex-1 text-neutral-900 w-full bg-white/90 border-blue-200 border-[3px] px-6 py-2 rounded-xl">
          {description.split(" ").map((word, index) => (
            <p key={`word-${index}`}>{word}</p>
          ))}
        </span>
      </span>
    </div>
  );
};

export default ProjectsDialog;
