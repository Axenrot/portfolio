import * as THREE from "three";
import gsap from "gsap";

export function lookAt(
  cameraRef: THREE.PerspectiveCamera | null,
  pos: THREE.Vector3
) {
  // Calculate the rotation quaternion to make the camera look at the object
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 0, -1),
    pos.clone().sub(cameraRef!.position).normalize()
  );

  gsap.to(cameraRef!.rotation, {
    duration: 1,
    x: quaternion.x - 0.2,
    y: quaternion.y,
    z: quaternion.z,
    w: quaternion.w,
    ease: "power2.inOut",
  });
}

export function lookAtControl(controlsRef: any, pos: THREE.Vector3) {
  if (!controlsRef) return;

  // Calculate the rotation quaternion to make the controls look at the object
  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 0, -1),
    pos.clone().sub(controlsRef.target).normalize()
  );

  gsap.to(controlsRef.target, {
    duration: 1,
    x: pos.x,
    y: pos.y,
    z: pos.z,
    ease: "power2.inOut",
  });

  gsap.to(controlsRef.object.position, {
    duration: 1,
    x: pos.x / 2,
    y: pos.y + 0.5,
    z: 1.5,
    w: 1,
    ease: "power2.inOut",
  });

  gsap.to(controlsRef.object.rotation, {
    duration: 1,
    x: quaternion.x - 0.2,
    y: quaternion.y,
    z: quaternion.z,
    w: quaternion.w,
    ease: "power2.inOut",
  });
}
