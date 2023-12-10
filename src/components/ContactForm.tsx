import { playSound } from "@/utils/playSound";
import { Dispatch, SetStateAction } from "react";

interface IContactForm {
  setFormState: Dispatch<SetStateAction<string>>;
}

const ContactForm = ({ setFormState }: IContactForm) => {
  return (
    <form action="" className="flex bg-blue-400 p-6 rounded-md flex-col gap-3">
      <span className="flex w-full flex-col">
        <label htmlFor="">Name</label>
        <input
          onFocus={() => {
            setFormState("walking");
          }}
          onBlur={() => {
            setFormState("idling");
          }}
          type="text"
          className="px-2 rounded-md"
        />
      </span>
      <span className="flex w-full flex-col">
        <label htmlFor="">Email</label>
        <input
          onFocus={() => {
            console.log("running");
            setFormState("walking");
          }}
          onBlur={() => {
            console.log("idling");
            setFormState("idling");
          }}
          type="text"
          className="px-2 rounded-md"
        />
      </span>

      <span className="flex w-full flex-col">
        <label htmlFor="">Phone</label>
        <input
          onFocus={() => {
            console.log("running");
            setFormState("walking");
          }}
          onBlur={() => {
            console.log("idling");
            setFormState("idling");
          }}
          type="text"
          className="px-2 rounded-md"
        />
      </span>

      <span className="flex w-full flex-col">
        <label htmlFor="">Message</label>
        <input
          onFocus={() => {
            setFormState("walking");
          }}
          onBlur={() => {
            setFormState("idling");
          }}
          type="text"
          className="px-2 rounded-md"
        />
      </span>
      <button
        onClick={() => playSound("/assets/sounds/btn.wav")}
        onMouseEnter={() => playSound("/assets/sounds/btn.wav")}
        className="hover:bg-yellow-500 rounded-md hover:text-white text-yellow-500 bg-blue-500"
      >
        Submit!
      </button>
    </form>
  );
};

export default ContactForm;
