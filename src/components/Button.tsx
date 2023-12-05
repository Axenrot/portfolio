import { Html } from "@react-three/drei";

interface IButton {
  placeholder: string;
  fn: () => void;
  position: THREE.Vector3;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Button = ({
  placeholder,
  fn,
  position,
  onMouseEnter,
  onMouseLeave,
}: IButton): JSX.Element => {
  return (
    <Html position={position}>
      <button
        onClick={fn}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="bg-black/50 text-xs ring-1 aspect-square w-5 transition-all duration-200 text-gray-200/80 cursor-pointer hover:text-blue-400 hover:ring-blue-400 items-center justify-center flex ring-gray-200/80 rounded-full"
      >
        {placeholder}
      </button>
    </Html>
  );
};

export default Button;
