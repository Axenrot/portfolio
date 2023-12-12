import debounce from "@/hooks/debounce";
import { playSound } from "@/utils/playSound";
import axios from "axios";
import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import Swal from "sweetalert2";

interface IContactForm {
  setFormState: Dispatch<SetStateAction<string>>;
}

const ContactForm = ({ setFormState }: IContactForm) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [name, setName] = useState<string>("teste");
  const [email, setEmail] = useState<string>("alou@hotmail.com");
  const [company, setCompany] = useState<string>("falabela");
  const [phone, setPhone] = useState<string>("84999979789");
  const [text, setText] = useState<string>("mensagem");

  function handleSendEmail() {
    setLoading(true);
    axios
      .post("/api/contact", {
        email,
        name,
        phone,
        text,
        company,
      })
      .then(() => {
        setEmailSent(true);
        Swal.fire({
          title: "Obrigado!",
          text: "Sua mensagem foi recebida e entraremos em contato",
          icon: "success",
          confirmButtonText: "Muito bom",
        });
      })
      .catch(() =>
        Swal.fire({
          title: "Ops...",
          text: "Ocorreu algum problema com o envio, por favor tente novamente",
          icon: "error",
          confirmButtonText: "Poxa :(",
        })
      )
      .finally(() => setLoading(false));
  }

  const debouncedIdle = useCallback(() => {
    console.log("????");
    debounce(() => {
      console.log("called debouncedIdle");
      setFormState("idling");
    }, 2000);
  }, [setFormState]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSendEmail();
      }}
      action=""
      className="flex bg-blue-400 p-6 rounded-md flex-col gap-3"
    >
      <span className="flex w-full flex-col">
        <label htmlFor="">Name</label>
        <input
          onFocus={() => setIsFocused(true)}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setFormState("walking");
          }}
          onBlur={() => setFormState("idling")}
          type="text"
          className="px-2 rounded-md"
        />
      </span>
      <span className="flex w-full flex-col">
        <label htmlFor="">Email</label>
        <input
          onFocus={() => setIsFocused(true)}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setFormState("walking");
            console.log("vai chamar o debounced idle");
            debouncedIdle();
          }}
          onBlur={() => setFormState("idling")}
          type="text"
          className="px-2 rounded-md"
        />
      </span>

      <span className="flex w-full flex-col">
        <label htmlFor="">Phone</label>
        <input
          onFocus={() => setIsFocused(true)}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setFormState("walking");
          }}
          onBlur={() => setFormState("idling")}
          type="text"
          className="px-2 rounded-md"
        />
      </span>

      <span className="flex w-full flex-col">
        <label htmlFor="">Message</label>
        <input
          onFocus={() => setIsFocused(true)}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setFormState("walking");
          }}
          onBlur={() => setFormState("idling")}
          type="text"
          className="px-2 rounded-md"
        />
      </span>
      <button
        type="submit"
        onClick={() => playSound("/assets/sounds/btn.wav")}
        onMouseEnter={() => playSound("/assets/sounds/btn.wav")}
        className="hover:bg-yellow-500 mt-2 rounded-md hover:text-white text-yellow-500 bg-blue-500"
      >
        Submit!
      </button>
    </form>
  );
};

export default ContactForm;
