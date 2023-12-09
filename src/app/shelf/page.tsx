"use client";
import ContactForm from "@/components/ContactForm";
import ContactScene from "@/components/ContactScene";
import { useState } from "react";
export default function Shelf() {
  const [formState, setFormState] = useState<string>("idle");
  return (
    <main className="flex h-screen flex-col items-center bg-white bg-[url('/assets/contact-bg2.png')] text-neutral-700 justify-between">
      <div className="bg-blue-500 w-full h-16">Go back?</div>
      <div className="container h-full gap-12 my-6 flex flex-col-reverse bg-white/50 shadow-[inset_0px_0px_30px_0px_rgba(250,237,176,0.7)] rounded-[40px] md:flex-row mx-auto p-3 items-center justify-center">
        <ContactForm setFormState={setFormState} />
        <ContactScene width={200} formState={formState} />
      </div>
    </main>
  );
}
