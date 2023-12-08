import ContactForm from "@/components/ContactForm";
import PikachuScene from "@/components/PikachuScene";
import React from "react";
export default function Contact() {
  return (
    <main className="flex h-screen flex-col items-center bg-white text-neutral-700 justify-between">
      <div className="container h-full gap-12 flex flex-col-reverse md:flex-row mx-auto border p-3 items-center justify-center">
        <ContactForm />
        <PikachuScene width={200} />
      </div>
    </main>
  );
}
