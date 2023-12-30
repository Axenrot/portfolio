interface ITransition {
  direction?: "in" | "out";
}

const Transition = ({ direction = "in" }: ITransition) => {
  return (
    <span
      className={`fixed z-[9999] pointer-events-none w-full h-full top-0 left-0 ${
        direction == "in"
          ? "transition-in opacity-0"
          : "transition-out opacity-100"
      } bg-white`}
    />
  );
};

export default Transition;
