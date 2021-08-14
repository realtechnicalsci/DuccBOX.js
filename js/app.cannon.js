"use strict";
/*-----------------------------------------------*
 *                                               *
 *                   GLOBAL                      *
 *                                               *
 ------------------------------------------------*/
import { Water } from "./Water.js";
import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";
import { GUI } from "./dat.gui.module.js";
import { PointerLockControls } from "./PointerLockControls.js";
import "./cannon.min.js";
import "./jquery.js";
import "./socket.io.js";
//Fuzzy_Ducc is the ducc king

  let container, stats;

  let camera, controls, scene, renderer, loader, skyTexture;
  //init

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  skyTexture = new THREE.TextureLoader().load(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CgRkVD-wPJQUneeToWgeDWQrXrKVuG8pruN25ryy7APB99k_mWsu-H6_IGf1tQ4_XGk&usqp=CAU"
  )
  scene.background = skyTexture;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);


    scene.add(new THREE.GridHelper(900, 500));
    scene.add(new THREE.AxisHelper(2000));
/*-----------------------------------------------*
 *                                               *
 *                   CANNON                      *
 *                                               *
 ------------------------------------------------*/
 // Setup our world
 function _light() {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-100, 300, -100);
    light.castShadow = true;
    light.shadow.camera.left = -2000;
    light.shadow.camera.right = 2000;
    light.shadow.camera.top = 2000;
    light.shadow.camera.bottom = -2000;
    light.shadow.camera.far = 2000;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    scene.add(light);
    const ambient = new THREE.AmbientLight(0x808080);
    scene.add(ambient);
  }
  _light()
var world = new CANNON.World();
world.gravity.set(0, 0, -9.82); // m/s²

// Create a sphere
var radius = 1; // m
var sphereBody = new CANNON.Body({
   mass: 5, // kg
   position: new CANNON.Vec3(0, 0, 10), // m
   shape: new CANNON.Sphere(radius)
});
world.addBody(sphereBody);

// Create a plane
var groundBody = new CANNON.Body({
    mass: 0 // mass == 0 makes the body static
});
var groundShape = new CANNON.Plane();
groundBody.addShape(groundShape);
world.addBody(groundBody);

var fixedTimeStep = 1.0 / 60.0; // seconds
var maxSubSteps = 3;

// Start the simulation loop
var lastTime;
(function simloop(time){
  requestAnimationFrame(simloop);
  if(lastTime !== undefined){
     var dt = (time - lastTime) / 1000;
     world.step(fixedTimeStep, dt, maxSubSteps);
  }
  console.log("Sphere z position: " + sphereBody.position.z);
  lastTime = time;
})();
