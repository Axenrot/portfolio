import { useEffect, useState } from "react";
import { buttons } from "@/utils/buttons";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface IPopup {
  setCurrentOption: (value: string) => void;
  currentOption: string | null;
}
const Popup = ({ setCurrentOption, currentOption }: IPopup) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  function back() {
    if (selectedOption >= 1) {
      setCurrentOption(Object.keys(buttons)[selectedOption - 1]);
      setSelectedOption(selectedOption - 1);
    } else {
      setCurrentOption(Object.keys(buttons)[Object.values(buttons).length - 1]);
      setSelectedOption(Object.values(buttons).length - 1);
    }
  }

  function forward() {
    if (selectedOption < Object.values(buttons).length - 1) {
      setCurrentOption(Object.keys(buttons)[selectedOption + 1]);
      setSelectedOption(selectedOption + 1);
    } else {
      setCurrentOption(Object.keys(buttons)[0]);
      setSelectedOption(0);
    }
  }

  return (
    <div className="select-none items-center fadein transition-all duration-200 flex justify-between gap-3 left-1/2 -translate-x-1/2 p-2 w-[300px] fixed h-fit bg-white/10 z-10 rounded-full top-[3vh]">
      <CaretLeft
        size={32}
        onClick={back}
        className="hover:text-blue-400 cursor-pointer transition-all duration-200 hover:scale-110"
      />
      <span className="flex">
        {Object.entries(buttons).map((btn, index) => {
          let option = btn[0];
          let { name } = btn[1];
          return (
            <p
              data-display={currentOption == option}
              key={`label-${index}`}
              className="data-[display=false]:hidden fadein"
            >
              {name}
            </p>
          );
        })}
      </span>
      <CaretRight
        size={32}
        onClick={forward}
        className="hover:text-blue-400 cursor-pointer transition-all duration-200 hover:scale-110"
      />
    </div>
  );
};

export default Popup;
