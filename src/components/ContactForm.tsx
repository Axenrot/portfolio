import { Dispatch, SetStateAction } from "react";

interface IContactForm {
  setFormState: Dispatch<SetStateAction<string>>;
}

const ContactForm = ({ setFormState }: IContactForm) => {
  return (
    <form action="" className="flex bg-blue-400 p-6 rounded-md flex-col gap-3">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  );
};

export default ContactForm;
