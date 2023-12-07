// audioUtils.ts
import { Howl } from "howler";

export const playSound = (src: string) => {
  const sound = new Howl({
    src: [src],
    volume: 0.2,
  });

  console.log("will call playsound now");
  sound.play();
  console.log("played sound");
};
