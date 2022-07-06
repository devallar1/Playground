/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import * as THREE from "three";

const root = document.getElementById("root") as HTMLElement;

render(() => <App />, root);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#webgl") as HTMLCanvasElement,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//Initializing
camera.position.setZ(30);
renderer.render(scene, camera);

//Boiler Plate Code

scene.add();
renderer.render(scene, camera);

function animate() {
  // Recursion Callback
  requestAnimationFrame(animate);
  //********* */
  //ANIMATION CODE HERE

  //END OF ANIMATION CODE
  //******** */
  //Render Call
  renderer.render(scene, camera);
}
animate();
