"use client";
import FireRedText from "@/components/FireRedText";
import Transition from "@/components/Transition";
import { playSound } from "@/utils/playSound";
import Image from "next/image";
import Link from "next/link";
export default function Curriculum() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center bg-white bg-[url('/assets/background.png')] font-firered text-3xl text-neutral-700 justify-between">
      <Transition direction="in" />
      <span className="bg-blue-500 w-full h-16 flex justify-center items-center">
        <span className="container select-none px-3 flex w-full justify-between">
          <h1 className="text-white">
            <FireRedText>Yuri&apos;s Journey</FireRedText>
          </h1>
          <Link
            onMouseEnter={() => playSound("/assets/sounds/btn.wav")}
            onClick={() => playSound("/assets/sounds/select.wav")}
            href={"/"}
          >
            <FireRedText>
              <Image
                src="/assets/icons/home.svg"
                width={10}
                height={5}
                className="aspect-square w-[20px] h-[20px]"
                alt=""
              />
              Go Home?
            </FireRedText>
          </Link>
        </span>
      </span>
      <div className="container flex-1 mb-6 md:gap-12 my-6 px-3 flex flex-col bg-white/50 shadow-[inset_0px_0px_30px_0px_rgba(250,237,176,0.7)] rounded-[40px] md:flex-row mx-auto md:p-3 items-center justify-center">
        <object
          data="/yurileon.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          className="items-center justify-center flex-col gap-6 flex-1 h-[10vh] md:h-[80vh] rounded-md flex bg-opacity-100"
        >
          <p className="text-center">
            Your device Couldn&apos;t load the PDF content but you can download
            it instead
          </p>
          <Link
            className="bg-blue-400 flex items-center justify-center p-4 h-fit self-center mx-auto rounded-md border-2 border-blue-500"
            href="https://drive.google.com/file/d/1CZlxh8tNR0ASAsarKrItiQMoxjGBDbET/view?usp=sharing"
          >
            <FireRedText>Link to the PDF!</FireRedText>
          </Link>
        </object>
      </div>
    </main>
  );
}
