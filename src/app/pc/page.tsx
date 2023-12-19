"use client";
import FireRedText from "@/components/FireRedText";
import PcScene from "@/components/Scenes/PcScene";
import { playSound } from "@/utils/playSound";
import Image from "next/image";
import Link from "next/link";
export default function PC() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center bg-white bg-[url('/assets/contact-bg2.png')] font-firered text-3xl text-neutral-700 justify-between">
      <span className="bg-blue-500 w-full h-16 flex justify-center items-center">
        <span className="container select-none px-3 flex w-full justify-between">
          <h1 className="text-white">
            <FireRedText>Leon&apos;s Features</FireRedText>
          </h1>
          <Link
            onMouseEnter={() => playSound("/assets/sounds/btn.wav")}
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
      <div className="container flex flex-1 mb-6 h-full md:gap-12 md:my-6 px-3 flex-col bg-white/50 shadow-[inset_0px_0px_30px_0px_rgba(250,237,176,0.7)] rounded-[40px] mx-auto md:p-3 items-center justify-center">
        <PcScene />
      </div>
    </main>
  );
}
