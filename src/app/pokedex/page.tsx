"use client";
import ContactForm from "@/components/ContactForm";
import ContactScene from "@/components/Scenes/ContactScene";
import FireRedText from "@/components/FireRedText";
import { playSound } from "@/utils/playSound";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Transition from "@/components/Transition";
export default function Pokedex() {
  const [formState, setFormState] = useState<string>("idling");

  return (
    <main className="flex h-full min-h-screen flex-col items-center bg-white bg-[url('/assets/background.png')] font-firered text-3xl text-neutral-700 justify-between">
      <Transition direction="in" />
      <span className="bg-blue-500 w-full h-16 flex justify-center items-center">
        <span className="container text-2xl lg:text-3xl select-none px-3 flex w-full justify-between">
          <h1 className="text-white">
            <FireRedText>Get in touch with Leon</FireRedText>
          </h1>
          <Link
            onMouseEnter={() => {
              playSound("/assets/sounds/btn.wav");
            }}
            onClick={() => {
              playSound("/assets/sounds/select.wav");
            }}
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
      <div className="container flex-1 mb-6 h-full md:gap-12 md:my-6 px-3 flex flex-col bg-white/50 shadow-[inset_0px_0px_30px_0px_rgba(250,237,176,0.7)] rounded-[40px] md:flex-row mx-auto md:p-3 items-center justify-center">
        <ContactScene formState={formState} />
        <ContactForm setFormState={setFormState} />
      </div>
      <span className="bg-gradient-to-b from-transparent to-[#fdf7d8] w-full h-16 flex justify-center items-center">
        <span className="container text-2xl lg:text-3xl select-none px-3 flex w-full justify-end gap-6 items-center py-2">
          <Link
            onMouseEnter={() => {
              playSound("/assets/sounds/btn.wav");
            }}
            onClick={() => {
              playSound("/assets/sounds/select.wav");
            }}
            href={"https://www.linkedin.com/in/yurileon/"}
            target="_blank"
          >
            <Image
              src="/assets/icons/linkedin.png"
              width={20}
              height={20}
              className="aspect-auto w-[30px] h-[30px] opacity-90 hover:opacity-100 transition-all duration-200 hover:scale-110"
              alt=""
            />
          </Link>
          <Link
            onMouseEnter={() => {
              playSound("/assets/sounds/btn.wav");
            }}
            onClick={() => {
              playSound("/assets/sounds/select.wav");
            }}
            href={"https://discord.gg/7WKNGdYFJY"}
            target="_blank"
          >
            <Image
              src="/assets/icons/discord.png"
              width={30}
              height={30}
              className="aspect-auto w-[35px] h-[35px] opacity-90 hover:opacity-100 transition-all duration-200 hover:scale-110"
              alt=""
            />
          </Link>
        </span>
      </span>
    </main>
  );
}
