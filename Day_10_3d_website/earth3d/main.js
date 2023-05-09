import * as THREE from 'three';

import './style.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// let material, geometry, mesh, canvas, camera, lightPoint, lightAmbi, scene, renderer;

// function main() {



//? scene
const scene = new THREE.Scene();

// window sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

//? camera(angle, width/height, nearest point, farthest point)
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 10;
// other way
// camera.position.set(0,0,2);
scene.add(camera);


//? canvas
const canvas = document.querySelector('.webgl');

//? render (antialias: true means distortion free)
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, });
renderer.setSize(sizes.width, sizes.height);
// clears the render
// renderer.autoClear = false;
// improves pixel edge
renderer.setPixelRatio(window.devicePixelRatio);

// colorand opacity 0.0
// renderer.setClearColor(0x00000,0.5)

//? earth object

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  // color: "#0000ff",
  roughness: 1,
  metalness: 0,

  map: new THREE.TextureLoader().load('./texture/earthmap1k.jpg'),
  bumpMap: new THREE.TextureLoader().load('./texture/earthbump.jpg'),
  bumpScale: 2.5,
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh);

//? galaxy object

const stargeometry = new THREE.SphereGeometry(80, 64, 64);
const starmaterial = new THREE.MeshStandardMaterial({
  
  map: new THREE.TextureLoader().load('./texture/galaxy.png'),
  transparent:true,
  side: THREE.BackSide,
 
})
const startmesh = new THREE.Mesh(stargeometry,starmaterial)
scene.add(startmesh);
//? cloud object

const cloudgeometry = new THREE.SphereGeometry(3.1, 64, 64);
const cloudmaterial = new THREE.MeshStandardMaterial({
  // color: "#0000ff",
  // roughness: 1,
  // metalness: 0,

  map: new THREE.TextureLoader().load('./texture/earthCloud.png'),
  transparent:true,
 
})
const cloudmesh = new THREE.Mesh(cloudgeometry,cloudmaterial)
scene.add(cloudmesh);


// polar grid helper
// const radius = 10;
// const sectors = 16;
// const rings = 8;
// const divisions = 64;
// const helper = new THREE.PolarGridHelper( radius, sectors, rings, divisions );
// scene.add( helper );

// light
const lightAmbi = new THREE.AmbientLight(0xffffff);
// lightAmbi.position.set(10,10,10)
scene.add(lightAmbi)

// point light 
const lightPoint = new THREE.PointLight(0xffffff, 1, 1000);
lightPoint.position.set(5, 3, 5);
scene.add(lightPoint);

// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper(lightPoint, sphereSize);
// scene.add(pointLightHelper);


// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// dsiableing zoom and pan
controls.enablePan = false
controls.enableZoom = false;


// resize
window.addEventListener("resize", () => {
  // updateig sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // console.log(sizes.width)

  // updating camera
  camera.aspect = sizes.width / sizes.height;
  // removes sqeezing and maintains size
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height)
})


const loop = () => {

  // controls.update();
  // mesh.rotation.x= 0;
  mesh.rotation.y += 0.008;
  cloudmesh.rotation.y += 0.003;
  startmesh.rotation.y -= 0.001;

  // render
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop)
};

loop();

