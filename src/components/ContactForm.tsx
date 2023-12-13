import debounce from "@/hooks/debounce";
import { playSound } from "@/utils/playSound";
import axios from "axios";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import Swal from "sweetalert2";
import { maskPhone, maskText } from "@/utils/masks";

interface IContactForm {
  setFormState: Dispatch<SetStateAction<string>>;
}

const ContactForm = ({ setFormState }: IContactForm) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [text, setText] = useState<string>("");

  function handleSendEmail() {
    setLoading(true);
    setFormState("fighting_defensive");
    debouncedIdle();
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
          title: "Thanks!",
          text: "Your message has been sent",
          icon: "success",
          background: "#3b82f6",
          color: "#fff",
          confirmButtonColor: "#EAB308",
          confirmButtonText: "Nice!",
        });

        playSound("/assets/sounds/success.wav");
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setText("");
      })
      .catch(() => {
        Swal.fire({
          title: "Ops...",
          text: "Some issue has occurred",
          icon: "error",
          background: "#3b82f6",
          color: "#fff",
          confirmButtonColor: "#EAB308",
          confirmButtonText: "Try again :(",
        });
        setFormState("ko");
        debouncedIdle();
      })
      .finally(() => setLoading(false));
  }

  //eslint-disable-next-line
  const debouncedIdle = useCallback(
    debounce(() => {
      setFormState("idling");
    }, 2500),
    []
  );

  const walk = () => {
    setFormState("idling");
    debouncedIdle();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        playSound("/assets/sounds/select.wav");

        handleSendEmail();
      }}
      action=""
      className="flex bg-blue-400 p-6 rounded-md flex-col gap-1"
    >
      <span className="flex w-full flex-col">
        <label htmlFor="name">Name*</label>
        <input
          id="name"
          required
          value={name}
          placeholder="Your Name"
          onChange={(e) => {
            setName(maskText(e.target.value));
            walk();
          }}
          onBlur={() => setFormState("idling")}
          onFocus={() => walk()}
          disabled={loading}
          type="text"
          className="px-2 rounded-md"
        />
      </span>
      <span className="flex w-full flex-col">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          required
          value={company}
          placeholder="Your Company"
          onChange={(e) => {
            setCompany(e.target.value);
            walk();
          }}
          onBlur={() => setFormState("idling")}
          onFocus={() => walk()}
          disabled={loading}
          type="text"
          className="px-2 rounded-md"
        />
      </span>
      <span className="flex w-full flex-col">
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          required
          value={email}
          placeholder="your@email.here"
          onChange={(e) => {
            setEmail(e.target.value.replaceAll(" ", ""));
            walk();
          }}
          onBlur={() => setFormState("idling")}
          onFocus={() => walk()}
          disabled={loading}
          type="email"
          className="px-2 rounded-md"
        />
      </span>

      <span className="flex w-full flex-col">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          value={phone}
          placeholder="+55999999999"
          minLength={10}
          onChange={(e) => {
            setPhone(maskPhone(e.target.value));
            walk();
          }}
          onBlur={() => setFormState("idling")}
          onFocus={() => walk()}
          disabled={loading}
          type="text"
          className="px-2 rounded-md"
        />
      </span>

      <span className="flex w-full flex-col">
        <label htmlFor="message">Message*</label>
        <textarea
          id="message"
          value={text}
          placeholder="Your message here"
          minLength={3}
          onChange={(e) => {
            setText(e.target.value);
            walk();
          }}
          onBlur={() => setFormState("idling")}
          onFocus={() => walk()}
          disabled={loading}
          className="px-2 rounded-md"
        />
      </span>
      <button
        type="submit"
        disabled={loading}
        onMouseEnter={() => playSound("/assets/sounds/btn.wav")}
        className="disabled:bg-yellow-500 disabled:text-white hover:bg-yellow-500 mt-2 rounded-md hover:text-white text-yellow-500 bg-blue-500"
      >
        {loading ? "Loading..." : "Submit!"}
      </button>
    </form>
  );
};

export default ContactForm;
