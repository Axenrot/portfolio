import { useEffect, useState } from "react";
import { buttons } from "@/utils/buttons";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface IPopup {
  selectOption: (value: string) => void;
  hoveredItem: string | null;
}
const Popup = ({ selectOption, hoveredItem }: IPopup) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  // useEffect(() => {
  //   selectOption(selectedOption);
  // }, [selectOption, selectedOption]);

  function back() {
    if (selectedOption != 0) {
      setSelectedOption(selectedOption - 1);
    } else {
      setSelectedOption(Object.values(buttons).length);
    }
  }

  function forward() {
    if (selectedOption != Object.values(buttons).length) {
      setSelectedOption(selectedOption + 1);
    } else {
      setSelectedOption(0);
    }
  }

  return (
    <div
      data-display={!hoveredItem}
      className="data-[display=false]:hidden select-none items-center fadein transition-all duration-200 flex justify-between gap-3 left-1/2 -translate-x-1/2 p-2 w-[300px] fixed h-fit bg-black/80 z-10 rounded-full bottom-[3vh]"
    >
      <CaretLeft
        size={32}
        onClick={back}
        className="hover:text-blue-400 cursor-pointer transition-all duration-200 hover:scale-110"
      />
      <span className="flex">
        <p
          data-display={selectedOption == 0}
          className="data-[display=false]:hidden fadein"
        >
          Home
        </p>
        {Object.values(buttons).map((button, index) => {
          return (
            <p
              data-display={selectedOption == index + 1}
              key={`label-${index}`}
              className="data-[display=false]:hidden fadein"
            >
              {button.name}
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
