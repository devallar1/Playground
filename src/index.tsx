/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./modules/App";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as dat from "dat.gui";

import psVertexShader from "./shaders/patternShader/vertex.glsl";
import psFragmentShader from "./shaders/patternShader/fragment.glsl";

const gui = new dat.GUI();

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
camera.position.setZ(1);
renderer.render(scene, camera);
const controls = new OrbitControls(camera, renderer.domElement);

//CODE HERE
//Geometry
const geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);

///Material
const material = new THREE.ShaderMaterial({
  vertexShader: psVertexShader,
  fragmentShader: psFragmentShader,
  side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(geometry, material);

//END OF CODE

scene.add(mesh);
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
  controls.update();
}
animate();
