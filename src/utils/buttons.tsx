import * as THREE from "three";
import { FileCode, FileJs, FilePdf, At } from "@phosphor-icons/react/dist/ssr";

let language = "en";
export const buttons = {
  desktop: {
    cameraPosition: new THREE.Vector3(0, 0, 0),
    pos: new THREE.Vector3(-2.7, 0.85, -1.3),
    icon: <FileJs size={20} weight="bold" />,
    name: language == "en" ? "Jobs" : "Trabalhos",
    fn: () => {},
  },
  pokedex: {
    cameraPosition: new THREE.Vector3(0, 0, 0),
    pos: new THREE.Vector3(-1.55, 0.95, -1.5),
    icon: <At size={20} weight="bold" />,
    name: language == "en" ? "Contact" : "Trabalhos",
    fn: () => {},
  },
  shelf: {
    cameraPosition: new THREE.Vector3(0, 0, 0),
    pos: new THREE.Vector3(-0.55, 0.8, -1.3),
    icon: <FileCode size={20} weight="bold" />,
    name: language == "en" ? "Stack" : "Trabalhos",
    fn: () => {},
  },
  frame: {
    cameraPosition: new THREE.Vector3(0, 0, 0),
    pos: new THREE.Vector3(3.2, 0.78, -1.75),
    icon: <FilePdf size={20} weight="bold" />,
    name: language == "en" ? "Education" : "Trabalhos",
    fn: () => {},
  },
};

export const cameraPosition = new THREE.Vector3(0, 1.3, 3);
export const pokedexPosition = new THREE.Vector3(-1.45, 0.72, -1.5);
