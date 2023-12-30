import * as THREE from "three";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  House,
  Phone,
} from "@phosphor-icons/react/dist/ssr";

let language = "en";

export const buttons = {
  desktop: {
    cameraPosition: new THREE.Vector3(0, 0, 0),
    pos: new THREE.Vector3(-2.7, 0.85, -1.3),
    icon: <Briefcase size={20} weight="fill" />,
    name: language == "en" ? "Jobs" : "Trabalhos",
    fn: () => {},
  },
  pokedex: {
    cameraPosition: new THREE.Vector3(0, 0, 0),
    pos: new THREE.Vector3(-1.55, 0.95, -1.5),
    icon: <Phone size={20} weight="fill" />,
    name: language == "en" ? "Contact" : "Trabalhos",
    fn: () => {},
  },
  shelf: {
    cameraPosition: new THREE.Vector3(0, 0, 0),
    pos: new THREE.Vector3(-0.55, 0.8, -1.3),
    icon: <BookOpen size={20} weight="fill" />,
    name: language == "en" ? "Stack" : "Trabalhos",
    fn: () => {},
  },
  home: {
    cameraPosition: new THREE.Vector3(0, 0, 0),
    pos: new THREE.Vector3(0.2, 0.6, 0),
    icon: <House size={20} weight="fill" />,
    name: language == "en" ? "Home" : "Trabalhos",
    fn: () => {},
  },
  frame: {
    cameraPosition: new THREE.Vector3(0, 0, 0),
    pos: new THREE.Vector3(3.2, 0.78, -1.75),
    icon: <GraduationCap size={20} weight="fill" />,
    name: language == "en" ? "Education" : "Trabalhos",
    fn: () => {},
  },
};

export const dialogs = {
  desktop: {
    title: language == "en" ? "Desktop" : "Trabalhos",
    button: language == "en" ? "Visit Page" : "Trabalhos",
    route: "/pc",
    dialog:
      language == "en"
        ? [
            "You turned the PC on, what do you want to do?",
            "Click on 'visit page' to check out his featured jobs!",
          ]
        : [
            "Texto em portugues aleatorio lorem ipsum hasu asasjhdia ms akd jah hsau hasud sajk qhas lasd hu",
          ],
  },
  pokedex: {
    title: language == "en" ? "Contact" : "Contato",
    button: language == "en" ? "Send Message" : "Trabalhos",
    route: "/pokedex",
    dialog:
      language == "en"
        ? ["Let's call Leon as your teammate?"]
        : [
            "Texto em portugues aleatorio lorem ipsum hasu asasjhdia ms akd jah hsau hasud sajk qhas lasd hu",
          ],
  },
  shelf: {
    title: language == "en" ? "Shelf" : "Trabalhos",
    button: language == "en" ? "Visit Page" : "Trabalhos",
    route: "",
    dialog:
      language == "en"
        ? ["Wonder what Leon brings to their shelf..."]
        : [
            "Texto em portugues aleatorio lorem ipsum hasu asasjhdia ms akd jah hsau hasud sajk qhas lasd hu",
          ],
  },
  home: {
    title: language == "en" ? "Desktop" : "Trabalhos",
    button: "",
    route: "",
    dialog:
      language == "en"
        ? [
            "Welcome to Leon's Room!",
            "Ok, time to go! Feel free to look around",
          ]
        : [
            "Texto em portugues aleatorio lorem ipsum hasu asasjhdia ms akd jah hsau hasud sajk qhas lasd hu",
          ],
  },
  frame: {
    title: language == "en" ? "Education" : "Graduação",
    button: language == "en" ? "Check out!" : "Curriculum",
    route: "/curriculum",
    dialog:
      language == "en"
        ? ["Seems to be describing something about his journey..."]
        : [
            "Texto em portugues aleatorio lorem ipsum hasu asasjhdia ms akd jah hsau hasud sajk qhas lasd hu",
          ],
  },
};

export const cameraPosition = new THREE.Vector3(0.3, 1.3, 3);
export const pokedexPosition = new THREE.Vector3(-1.45, 0.72, -1.5);
