import * as THREE from './three.module.js'
let container, stats;
window.addEventListener("keydown", function (fps) {
    if (rotateReset.keyCode == 80) (function () {
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
  });
let camera, controls, scene, renderer, loader;
loader; /*= loader*/
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  const geometry = new THREE.CircleGeometry( 5, 32 );
  const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  const cube10 = new THREE.Mesh( geometry, material );
  scene.add( cube10 );
  function moveRotateReset() {
    cube10.rotation.y = 0;
    camera.lookAt(cube10.rotation.y, 1, cube10.rotation.y);
  }function  moveRotateE() {
    cube10.rotation.y -=2;
    camera.position.y = 2;
    camera.lookAt(-cube10.rotation.y, 1, 10);
  }function  moveRotateR() {
    cube10.rotation.y +=1;
    camera.position.y = 2;
    camera.lookAt(-cube10.rotation.y, 1, 10);
  }function moveW() {
    cube10.position.x -= 1;
    camera.position.y =  cube10.position.y;
  }function moveA() {
    cube10.position.z += 1;
    camera.position.y = 2;
    camera.position.z =  cube10.position.z;
  }function moveS() {
    cube10.position.x += 1;
    camera.position.y = 2;
    camera.position.x = cube10.position.x;
  }function moveD() {
    cube10.position.z -= 1;
    camera.position.y = 2;
    camera.position.z =  cube10.position.z;
  }function moveJump() {
    cube10.position.y += 2;
    setTimeout(() => {  cube10.position.y -= 2 }, 200);
  }window.addEventListener("keydown", function (w) {
    if (w.keyCode == 87) moveW();
  });window.addEventListener("keydown", function (a) {
    if (a.keyCode == 65) moveA();
  });window.addEventListener("keydown", function (s) {
    if (s.keyCode == 83) moveS();
});window.addEventListener("keydown", function (d) {
    if (d.keyCode == 68) moveD();
  });window.addEventListener("keydown", function (jump) {
    if (jump.keyCode == 32) moveJump();
  });window.addEventListener("keydown", function (rotate) {
    if (rotate.keyCode == 82) moveRotateR();
  });window.addEventListener("keydown", function (rotateE) {
    if (rotateE.keyCode == 69) moveRotateE();
  });window.addEventListener("keydown", function (rotateReset) {
    if (rotateReset.keyCode == 80) moveRotateReset();
  });




scene.background = new THREE.Color( 0x00000f );

  window.addEventListener("resize", onWindowResize);
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
  
  const axesHelper = new THREE.AxesHelper( 500 );
  scene.add( axesHelper );

function animate() {
    requestAnimationFrame(animate);
    
    document.getElementById('cords').innerHTML = `x:${cube10.position.x} y:${cube10.position.y} z:${cube10.position.z} look:${cube10.rotation.y}`

    renderer.render(scene, camera);
  }


  animate();