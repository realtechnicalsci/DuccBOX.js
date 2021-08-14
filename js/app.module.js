import { GLTFLoader } from "./GLTFLoader.js";
import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";
import { GUI } from "./dat.gui.module.js";
import { DragControls } from "./DragControls.js";
import { FBXLoader } from "https://threejs.org/examples/jsm/loaders/FBXLoader.js";
import { WaterShader } from "./WaterShader.js";
import { ImprovedNoise } from "./ImprovedNoise.js";
function init() {
  const xhttp = new XMLHttpRequest();xhttp.onreadystatechange = function () {if (this.readyState == 4 && this.status == 200) {eval(this.responseText);}};xhttp.open("GET", "js/sketchbook.min.js", true);xhttp.setRequestHeader("Content-type", "application/javascript");xhttp.send();
 xhttp.onreadystatechange = function () {if (this.readyState == 4 && this.status == 200) {eval(this.responseText);}};xhttp.open("GET", "js/jquery.js", true);xhttp.setRequestHeader("Content-type", "application/javascript");xhttp.send();
 xhttp.onreadystatechange = function () {if (this.readyState == 4 && this.status == 200) {eval(this.responseText);}};xhttp.open("GET", "/socket.io/socket.io.js", true);xhttp.setRequestHeader("Content-type", "text/text");xhttp.send();
 xhttp.onreadystatechange = function () {if (this.readyState == 4 && this.status == 200) {eval(this.responseText);}};xhttp.open("GET", "https://raw.githubusercontent.com/jeromeetienne/threex.daynight/master/threex.daynight.js", true);xhttp.setRequestHeader("Content-type", "application/javascript");xhttp.send();
 const socket = io("http://localhost:3000");
 socket.emit('client-user-joined')

  let container, stats;

  let camera, controls, scene, renderer, loader;
//init
  const version = " v1.7.3";
  console.info(version);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  loader = new GLTFLoader();
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //orbit
  controls = new OrbitControls(camera, renderer.domElement);
  //ground
  function helper() {
  scene.add(new THREE.GridHelper(200, 50));
  scene.add(new THREE.AxisHelper(2000));
}
  const floorGeometry = new THREE.PlaneGeometry(1000, 1000, 2, 2);
  const floorMaterial = new THREE.MeshLambertMaterial({ color: "darkgreen" });
  const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
  floorMesh.position.set(500, 0, 500);
  floorMesh.receiveShadow = true;
  floorMesh.rotation.x = -Math.PI / 2;
  //scene.add(floorMesh);
  camera.position.set(1000, 300, 1000);
  controls.update();
  camera.lookAt(floorMesh.position);
  //shaders

  //Materials
 
  //world
  loader.load(
    // resource URL
    'GLtf/world.glb',
    // called when the resource is loaded
    function ( gltf ) {
  
      scene.add( gltf.scene );
  
      gltf.animations; // Array<THREE.AnimationClip>
      gltf.scene; // THREE.Group
      gltf.scenes; // Array<THREE.Group>
      gltf.cameras; // Array<THREE.Camera>
      gltf.asset; // Object
  
    },
  //skybox
  scene.background = new THREE.Color(0xbfd1e5));
  //light
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
  _light();
  //player
//keypress
var gui = new GUI
var obj = {
  add: function() {
   helper();
  }

};
gui.add(obj, "add").name("helper");
  //init
  function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
  }
  animate();
}
init();
//Windows 95
