import * as THREE from './three.module.js'
let container, stats;
window.addEventListener("keydown", function (fps) {
    if (fps.keyCode == 80) (function () {
        var script = document.createElement("script");
        script.onload = function () {
          var stats = new Stats();
          document.body.appendChild(stats.dom);
          requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop);
          });
        };
        script.src = "//mrdoob.github.io/stats.js/build/stats.min.js";
        document.head.appendChild(script);
      })();
  });
 const skyTexture = new THREE.TextureLoader().load(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CgRkVD-wPJQUneeToWgeDWQrXrKVuG8pruN25ryy7APB99k_mWsu-H6_IGf1tQ4_XGk&usqp=CAU"
  )
let camera, controls, scene, renderer, loader;
loader = new THREE.TextureLoader();
const BG = document.querySelector('canvas')
renderer = new THREE.WebGLRenderer({canvas: BG});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.x = -2
camera.position.z = -2
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }
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
    scene.background = new THREE.Color( 0x00ffff );
  function animate() {
  document.getElementById('cords').innerHTML = `x:${camera.position.x} y:${camera.position.y} z:${camera.position.z} look:${camera.rotation.y}`,()=>{
    console.log('DomUpdate.cords')
  }
    requestAnimationFrame(animate);
    camera.position.z =  cube10.position.z;
    renderer.render(scene, camera);
  }
  animate();