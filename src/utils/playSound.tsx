// audioUtils.ts
import { Howl } from "howler";

export const playSound = (src: string) => {
  const sound = new Howl({
    src: [src],
    volume: 0.05,
  });

  sound.play();
};
