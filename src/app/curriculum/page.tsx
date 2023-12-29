"use client";
import ContactForm from "@/components/ContactForm";
import ContactScene from "@/components/Scenes/ContactScene";
import FireRedText from "@/components/FireRedText";
import { playSound } from "@/utils/playSound";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function Curriculum() {
  const [formState, setFormState] = useState<string>("idling");
  return (
    <main className="flex h-full min-h-screen flex-col items-center bg-white bg-[url('/assets/contact-bg2.png')] font-firered text-3xl text-neutral-700 justify-between">
      <span className="bg-blue-500 w-full h-16 flex justify-center items-center">
        <span className="container select-none px-3 flex w-full justify-between">
          <h1 className="text-white">
            <FireRedText>Yuri&apos;s Journey</FireRedText>
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
      <div className="container flex-1 mb-6 md:gap-12 my-6 px-3 flex flex-col bg-white/50 shadow-[inset_0px_0px_30px_0px_rgba(250,237,176,0.7)] rounded-[40px] md:flex-row mx-auto md:p-3 items-center justify-center">
        <object
          data="/yurileon.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          className="flex-1 h-[10vh] md:h-[80vh] rounded-md flex bg-opacity-100"
        >
          <p>
            Link to Curriculum
            <a href="/yurileon.pdf">to the PDF!</a>
          </p>
        </object>
      </div>
    </main>
  );
}