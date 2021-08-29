"use strict";
/*-----------------------------------------------*
 *                                               *
 *                   GLOBAL                      *
 *                                               *
 ------------------------------------------------*/
 const version = " v4.0 M2";
 const Wrapper = document.getElementById('Wrapper')
import './ga.js';
import { GLTFLoader } from "./GLTFLoader.js";
import { Water } from "./Water.js";
import * as THREE from "./three.module.js";
import { OrbitControls } from "./OrbitControls.js";
import { GUI } from "./dat.gui.module.js";
import { PointerLockControls } from "./PointerLockControls.js";
import "./cannon.min.js";
import "./firebase/firebase-app.js";
import "./firebase/firebase-analytics.js";
import "./firebase/firebase-auth.js";
import "./firebase/firebase-firestore.js";
import "./jquery.js";
import "./socket.io.js";
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
//Fuzzy_Ducc is the ducc king
$(document).ready(function () {
  $(document).on("submit", "form", function () {
    return false;
  });
});
let water;
let PlayerHealth = 20;
const manager = new THREE.LoadingManager();
//Can i speek to the manager
const id1 = document.getElementById("id1");
/*-----------------------------------------------*
 *                                               *
 *                   FIREBASE                    *
 *                                               *
 ------------------------------------------------*/
const uuid = uuidv4();
const firebaseConfig = {
  apiKey: "AIzaSyCk1yrVh0zTC8BBu-mirrHaqhaMGcg-6Xo",
  authDomain: "duccboxjs-281f7.firebaseapp.com",
  databaseURL: "https://duccboxjs-default-rtdb.firebaseio.com",
  projectId: "duccboxjs",
  storageBucket: "duccboxjs.appspot.com",
  messagingSenderId: "1070773113218",
  appId: "1:1070773113218:web:578d79b68a8e7d1727ff9b",
  measurementId: "G-7WDEN5SZJ6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const auth = firebase.auth();
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "G-7WDEN5SZJ6"]);
_gaq.push(["_trackPageview"]);

function init() {
  
  $(document).ready(function(){$(document).on("submit", "form", function () {return false;});});
  document.getElementById('login-form-box').addEventListener("submit", function (e) {e.preventDefault();
    auth.signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('pass').value).then(() => {
      auth.onAuthStateChanged(user => { if (user) {document.getElementById('login-status').innerHTML=`<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p></br><p>User uuid: ${user.uuID}</p></br> <kbd onclick="document.getElementById('login-box').style.display = 'none'">Exit login form</kbd>`;
      myName = user.displayName;document.getElementById('username').innerHTML = `username: ${myName}`}})
    }).catch((error) => {document.getElementById('login-status').innerHTML = 'Error:'+error.message;
    setTimeout(() => {document.getElementById('login-status').innerHTML = '';document.getElementById('new-login-status').innerHTML = '';},4000);
  });});
    /*login/new-account*/
    document.getElementById('Acc').onclick = ()=>{
      auth.createUserWithEmailAndPassword(document.getElementById('new-email').value, document.getElementById('new-pass').value).then(() => {
      auth.onAuthStateChanged(user => {if(user){user.updateProfile({displayName: `${myName}`,uuID: `${uuid}`});
        document.getElementById('new-login-status').innerHTML=`<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p></br><p>User uuid: ${user.uuID}</p></br> <kbd onclick="document.getElementById('login-box').style.display = 'none'">Exit login form</kbd>`;
      myName = user.displayName;document.getElementById('username').innerHTML = `username: ${myName}`}})
    }).catch((error) => {document.getElementById('new-login-status').innerHTML = 'Error:'+error.message
setTimeout(() => {document.getElementById('login-status').innerHTML = '';document.getElementById('new-login-status').innerHTML = '';},4000);})}
  /*-----------------------------------------------*
 *                                               *
 *                   VERSION                     *
 *                                               *
 ------------------------------------------------*/
  const gui = new GUI();
  let myName = `Guest${Math.floor(Math.random() * 5000)}`;
  console.log("My Name is " + myName);
  const fonts = ["font-family: px-sans;", "font-family: ms-comic;"];
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  if (randomFont == "font-family: ms-comic;") {
    const htmlInner = (document.getElementById(
      "rev"
    ).innerHTML = `________||DuccBOX.js REV ${version} `);
  }
  if (randomFont == "font-family: px-sans;") {
    document.getElementById(
      "rev"
    ).innerHTML = `______||DuccBOX.js REV ${version} `;
  }
  document.getElementById("rev").style.cssText = randomFont;
  const FontLoad = new THREE.FontLoader();
  let font;
  FontLoad.load(
    "https://DuccBOXsocket.rileythedoggo.repl.co/helvetiker_bold.typeface.json",
    function (font_) {
      font = font_;
    }
  );
  if (!THREE) {
    throw new Error(
      "DuccBOX.error THIS IS A FATAL THREE.JS ERROR PLEASE REPORT THIS TO @I like food#8767"
    );
  }
  if (!GUI) {
    throw new Error(
      "DuccBOX.error THIS IS A FATAL ERROR PLEASE REPORT THIS TO @I like food#8767"
    );
  }
  console.info(firebase)
    const geometry = new THREE.BufferGeometry();
  let cube2;
  const server = "https://duccboxsocket.rileythedoggo.repl.co";
  const socket = io(server);
  socket.emit("client-user-joined", myName);
  const Object3D = new THREE.Object3D();
  const mixer = THREE.AnimationMixer;
  /*firebase
    <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="/__/firebase/8.8.0/firebase-app.js"></script>
  
  <!-- TODO: Add SDKs for Firebase products that you want to use
       https://firebase.google.com/docs/web/setup#available-libraries -->
  
  <!-- Initialize Firebase -->
  <script src="/__/firebase/init.js"></script>*/
  //^^ never again(tm)
  /*-----------------------------------------------*
 *                                               *
 *                   STATS.js                    *
 *                                               *
 ------------------------------------------------*/
  (function () {
    var script = document.createElement("script");
    script.onload = function () {
      var stats = new Stats();
      document.body.appendChild(stats.dom);
      requestAnimationFrame(function loop() {
        stats.update();
        requestAnimationFrame(loop);
      });
    };
    script.src = "js/stats.js";
    document.head.appendChild(script);
  })();
  //Non module script loaders

  const xhttp = new XMLHttpRequest();
  console.log(
    "%cDuccBOX is an Open world sandbox made with WebGL/Three.js ",
    "color:blue;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
  );
  console.log(
    "%cNote: This is a Milestone 1 alpha build ",
    "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
  );
  console.log(
    "You can find the Source code at [https://github.com/Riley-the-doggo/DuccBOX.js] "
  );

  let camera, controls, scene, renderer, loader, skyTexture;
  //init
  console.info(version);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  loader = new GLTFLoader(manager);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //orbit
  //controls = new OrbitControls(camera, renderer.domElement);
  //ground
  function helper() {
    scene.add(new THREE.GridHelper(900, 500));
    scene.add(new THREE.AxisHelper(2000));
  }
  //Window
  /* Floor  */
  //world
  const BGloader = new THREE.CubeTextureLoader();
  const bg = loader.load(
    "https://tomo0613.github.io/offroadJS/client/model/skybox.jpg"
  );
  const geometry2 = new THREE.BoxGeometry(1, 1, 1);
  const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube1 = new THREE.Mesh(geometry2, material2);
  const astPos = Math.random() * 400;
  
 /*-----------------------------------------------*
 *                                               *
 *                   WORLD                       *
 *                                               *
 ------------------------------------------------*/
  let _WORLD_ = {};
  let _AIRPLANE_ = {};
  loader.load("GLtf/_AIRPLANE_.glb", function (gltf) {
    scene.add(gltf.scene);
    gltf.animations;
    gltf.scene;
    gltf.scenes;
    gltf.cameras;
    gltf.asset;
    gltf.scene.position.y = 30;
    _AIRPLANE_ = gltf.scene;
    function a1() {
      requestAnimationFrame(a1)
      gltf.scene.position.z += 2;
       gltf.scene.position.y += 0.5;
    }
    a1();
  });
  loader.load(
    "GLtf/world.glb",
    function (gltf) {
      scene.add(gltf.scene);
      gltf.animations;
      gltf.scene;
      gltf.scenes;
      gltf.cameras;
      gltf.asset;
      gltf.scene.position.y = -1;
      _WORLD_ = gltf.scene;
    },
    function (xhr) {
      const loaded = (document.getElementById(
        "prog"
      ).innerHTML = `File: World.glb / Loading World:% ${
        (xhr.loaded / xhr.total) * 100
      } % loaded`);
      setTimeout(() => {
        $("#prog").hide();
      }, 9000);
    },
    (function (error) {
      document.getElementById(
        "prog"
      ).innerHTML = `File: world.glb ERROR ${error}`;
    })(
      (skyTexture = new THREE.TextureLoader().load(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CgRkVD-wPJQUneeToWgeDWQrXrKVuG8pruN25ryy7APB99k_mWsu-H6_IGf1tQ4_XGk&usqp=CAU"
      ))
    )
  );
  socket.on("event.fun.flood", () => {
    id1.innerHTML = "<strong>Warning:</strong> Flash flood!";
    scene.add(water);
    _WORLD_.position.y = -3;
    setTimeout(() => {
      _WORLD_.position.y = 0;
      delete [water];
      id1.innerHTML = "";
    }, 9000);
  });
  /*-----------------------------------------------*
 *                                               *
 *                   CANNON                      *
 *                                               *
 ------------------------------------------------*/
  const world = new CANNON.World({
    gravity: new CANNON.Vec3(0, 0, -9.82), // m/s²
  });
  socket.on("r-u-online", () => {
    socket.emit("client-online-yes");
  });
  if (!skyTexture) {
    console.error("DuccBOX.THREE.error Failed to load sky-box");
  }
  scene.background = skyTexture;
  const astTexture = new THREE.TextureLoader().load(
    "https://as1.ftcdn.net/v2/jpg/02/21/47/92/500_F_221479270_5WgcQKg1sYkwsp7ba2nLh0v2A7CGVqHR.jpg"
  );

  const ast1 = new THREE.Mesh(
    new THREE.SphereGeometry(20, 32, 20),
    new THREE.MeshStandardMaterial({
      map: astTexture,
    })
  );
  scene.add(ast1);
  ast1.position.y = 2000;
  //light
  socket.on("io-user-joined", () => {
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.x = Math.random() * 400;
  });
  const waterGeometry = new THREE.PlaneGeometry(3000, 3000);
  water = new Water(waterGeometry, {
    textureWidth: 512,
    textureHeight: 512,
    //https://threejs.org/examples/textures/waternormals.jpg
    waterNormals: new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/waternormals.jpg",
      function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }
    ),
    alpha: 1.0,
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 3.7,
    fog: scene.fog !== undefined,
  });
  water.rotation.x = -Math.PI / 2;
  const Pcontrols = new PointerLockControls(camera, document.body);
  /*-----------------------------------------------*
 *                                               *
 *                   LIGHT                       *
 *                                               *
 ------------------------------------------------*/
  2 + 4;
  9 - 3;
  4 / 5;
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
  function chat() {
    window.open(
      "../chat.htm",
      "New Tab",
      "height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes",
      () => {
        console.log("chat loaded");
      }
    );
  }
  function authLogin() {
    window.open(
      "../auth.html",
      "New Tab",
      "height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
    );
  }
  _light();
  //player
  /*-----------------------------------------------*
 *                                               *
 *                   PLAYER                      *
 *                                               *
 ------------------------------------------------*/
  camera.rotation.y = -1;
  const geometry10 = new THREE.BoxGeometry(3, 3, 3);
  const material10 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube10 = new THREE.Mesh(geometry10, material10);
  scene.add(cube10);
  camera.position.y = 0.5;
  window.addEventListener("keydown", function () {
    switch (event.keyCode) {
      case 87: // w
        cube10.position.x -= 1;
        break;
      case 65: // a
        cube10.position.z += 1;
        break;
      case 83: // s
        cube10.position.x += 1;
        break;
      case 69: // e
        cube10.rotation.y += 0.5;
        break;
      case 68: // d
        cube10.position.z -= 1;
        break;
      case 82: //Rotate
        cube10.rotation.y -= 0.5;
        break;
      case 81: //Rotate
        cube10.rotation.y += 0.5;
        break;
      case 32: // SPACE
        cube10.position.y += 2;
        setTimeout(() => {
          cube10.position.y -= 2;
        }, 200);
        break;
    }
  });
  function F3() {
    const mem = performance.memory;
    document.getElementById("F3DATE").innerHTML = "BUILD ID:[" + version + "]";
    document.getElementById("DuccBOX").style.display = "none";
    document.getElementById("DuccBOXF3").style.display = "block";
    document.getElementById("F3HEAP").innerHTML =
      "js heap limit is:" + mem.jsHeapSizeLimit + " Bytes";
    function E33341() {
      requestAnimationFrame(E33341);
      (document.getElementById("F3RENDER").innerHTML =
        "used js Heap:" + mem.usedJSHeapSize / 1048576),
        mem.jsHeapSizeLimit / 1048576 + " Bytes";
    }
    E33341();
  }
  window.addEventListener("keydown", function () {
    switch (event.keyCode) {
      case 51:
        F3();
        break;
      case 88:
        document.getElementById("Help").style.display = "block";
        break;
        case 76:
          document.getElementById('login-box').style.display='block'
          document.getElementById("Help").style.display = "none";
          break;
        
    }
  });
  /*-----------------------------------------------*
 *                                               *
 *                   PvP                         *
 *                                               *
 ------------------------------------------------
 ._.
 */
  let pLayerH = 20;
  window.addEventListener("keydown", function () {
    switch (event.keyCode) {
      case 52:
        loader.load("GLtf/sword.gltf", function (gltf) {
          scene.add(gltf.scene);
          gltf.animations;
          gltf.scene;
          gltf.scenes;
          gltf.cameras;
          gltf.asset;
          gltf.scene.position.y = 3;
        });
        break;
    }
  });
  if (PlayerHealth == 1) {
    console.log("You died with [PlayerHealth] object:" + PlayerHealth);
    socket.emit("duccbox.update.PvP.die", PlayerHealth);
  }
  socket.on("duccbox.update.PvP.Hit", () => {
    PlayerHealth -= 1;
    socket.emit("duccbox.update.PvP.hitP");
  });
  /*-----------------------------------------------*
 *                                               *
 *                   MULTIPLAYER                 *
 *                                               *
 ------------------------------------------------*/
  window.addEventListener("keydown", function () {
    let pos1 = cube10.position.x;
    let pos2 = cube10.position.z;
    let pos3 = cube10.position.y;
    let posRot = cube10.rotation.y;
    socket.emit("duccbox.update", pos1, pos2, pos3, posRot);
  });
  socket.on("io-user-joined", (pName) => {
    const NEWplayerName = pName;
    const NEWplayerBox = new THREE.BoxGeometry(3, 3, 3);
    const NEWplayerMesh = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    PlayerBOX = new THREE.Mesh(NEWplayerBox, NEWplayerMesh);
    scene.add(PlayerBOX);
  });
  socket.on("duccbox.update.remove", () => {
    delete [PlayerBOX];
  });
  socket.on("duccbox.update.pos", (pos1, pos2, pos3, posRot) => {
    PlayerBOX.position.x = pos1;
    PlayerBOX.position.z = pos2;
    PlayerBOX.position.y = pos3;
    PlayerBOX.rotation.y = posRot;
  });
  socket.emit("joined");
  const listener = new THREE.AudioListener();
  camera.add(listener);
  const sound = new THREE.Audio(listener);
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load("sound/orbit_jc.ogg", function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    sound.play();
  });
  //sun
  const sunTexture = new THREE.TextureLoader().load("img/2k_sun.jpg");
  /*"Comically large cheese wheel"-sajosup*/
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(20, 32, 20),
    new THREE.MeshStandardMaterial({
      map: sunTexture,
    })
  );
  let free = false;
  sun.position.y = 800;
  scene.add(sun);
  const geometry1 = new THREE.TorusGeometry(200, 1, 16, 200);
  const material1 = new THREE.MeshStandardMaterial({ color: 0xff6347 });
  const torus1 = new THREE.Mesh(geometry1, material1);
  torus1.position.y = 800;
  scene.add(torus1);
  ast1.position.z = Math.random() * 200;
  ast1.position.x = Math.random() * 200;
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onWindowResize);
  function freecam1() {
    free = true;
    controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
  }
  /*-----------------------------------------------*
 *                                               *
 *                   GUI                         *
 *                                               *
 ------------------------------------------------*/
  const obj = {
    add: function () {
      helper();
    },
  };
  const freecam = {
    add: function () {
      freecam1();
    },
  };
  function mute1() {
    var095 = "UN-mute";
  }
  const Mute = {
    add: function () {
      mute1();
    },
  };
  gui.add(obj, "add").name("helper");
  const obj1 = {
    add: function () {
      chat();
    },
  };
  gui.add(freecam, "add").name("Free-cam");
  const obj12 = {
    add: function () {
      authLogin();
    },
  };
  gui.add(obj12, "add").name("Login");
  //init
  /*-----------------------------------------------*
 *                                               *
 *                   CHAT                        *
 *                                               *
 ------------------------------------------------*/
  socket.on("oh-no", () => {
    id1.innerHTML = "<strong>W rn ng:</strong>NukE/";
    let x1 = 1;
    let x2 = 1;
    const geometryt1 = new THREE.TorusGeometry(300, 10, 16, 300);
    const materialt1 = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const t1 = new THREE.Mesh(geometryt1, materialt1);
    function _nii9() {
      requestAnimationFrame(_nii9);
      x1 += 0.1;
      x2 += 0.1;
      scene.add(t1);
    }
    _nii9();
  });
  const messages = document.getElementById("messages");
  const form = document.getElementById("form");
  const input = document.getElementById("input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value) {
      const sendMsg = `web ${myName} ${input.value}`;
      socket.emit("chat message", sendMsg);
      input.value = "";
    }
  });
  let PlayerBOX;
  socket.on("kick", () => {
    socket.emit("client-user-kicked");
    socket.disconnect();
    delete [PlayerBOX];
    delete [cube10];
    document.getElementsByClassName("three_canvas").remove();
    document.getElementById("kicked").innerHTML = "You have been kicked!";
    throw new Error("Kicked by admin.");
  });
  socket.on("chat message", function (msg) {
    const item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);
    console.log("Chat:" + msg);
    window.scrollTo(0, document.body.scrollHeight);
  });
  if (cube10.position.y == -1) {
    document.getElementById("eRR").style.display = "block";
    cube10.position.y = 0;
  }
  cube10.position.y = 0.5;
  if (cube10.position.y == 30) {
    document.getElementById("eRR").style.display = "block";
    const Err = new Audio("sound/erro.mp3");
    Err.play();
  }
  document.getElementById("username").innerHTML = `username: ${myName}`;
  let MOD;
  function handleFileSelect() {
    document.getElementById("MOD").addEventListener("change", function () {
      const GetFile = new FileReader();

      GetFile.onload = function () {
        // DO Somthing
        MOD = GetFile.result;

        MOD_SPACE();
      };

      GetFile.readAsText(this.files[0]);
    });
  }
  document
    .getElementById("MOD")
    .addEventListener("change", handleFileSelect, false);
  function MOD_SPACE(socket, cube10) {
    //Mod Runtime
    eval(MOD);
  }
  function animate() {
    requestAnimationFrame(animate);
    (document.getElementById(
      "cords"
    ).innerHTML = `x:${cube10.position.x} y:${cube10.position.y} z:${cube10.position.z} look:${cube10.rotation.y}`),
      () => {
        console.log("DuccBOX.DomUpdate.cords");
      };
    document.getElementById(
      "F3CORDS"
    ).innerHTML = 
    `
    POS_x:${cube10.position.x} 
    POS_y:${cube10.position.y} 
    POS_z:${cube10.position.z} 
    ROT_look:${cube10.rotation.y}
    `;
    if (free == false) {
      camera.position.z = cube10.position.z;
      camera.position.x = cube10.position.x;
      camera.position.y = cube10.position.y;
    }
    document.getElementById("F3WINDOW").innerHTML =
      "Window Width:" +
      window.innerWidth +
      "Window Height:" +
      window.innerHeight;
    water.material.uniforms["time"].value += 0.1 / 3.0;
    torus1.rotation.x += 0.007;
    torus1.rotation.y += 0.007;
    torus1.rotation.z += 0.007;
    camera.rotation.y = cube10.rotation.y;
    torus1.position.z += 0.03;
    sun.position.z += 0.03;
    ast1.position.y -= 1;
    renderer.render(scene, camera);
  }
  animate();
}
function DuccBOX() {
  setTimeout(() => {
    return new init(
      "DuccBOX.js",
      "startAsINIT",
      console.log("LOADED DUCCBOX.JS [startAsINIT] REV:"+version)
    );
  }, 200);
}
/*This is a cry for help*/
export default DuccBOX()