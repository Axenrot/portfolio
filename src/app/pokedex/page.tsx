"use client";
import ContactForm from "@/components/ContactForm";
import ContactScene from "@/components/ContactScene";
import FireRedText from "@/components/FireRedText";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
export default function Pokedex() {
  const [formState, setFormState] = useState<string>("idling");
  return (
    <main className="flex h-screen flex-col items-center bg-white bg-[url('/assets/contact-bg2.png')] font-firered text-3xl text-neutral-700 justify-between">
      <span className="bg-blue-500 w-full h-16 flex justify-center items-center">
        <span className="container flex w-full justify-end">
          <Link href={"/"}>
            <FireRedText primary="white" secondary="neutral-700">
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
      <div className="container h-full lg:gap-12 my-6 flex flex-col-reverse bg-white/50 shadow-[inset_0px_0px_30px_0px_rgba(250,237,176,0.7)] rounded-[40px] md:flex-row mx-auto p-3 items-center justify-center">
        <ContactForm setFormState={setFormState} />
        <ContactScene width={200} formState={formState} />
      </div>
    </main>
  );
}
