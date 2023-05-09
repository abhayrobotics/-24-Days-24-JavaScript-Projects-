import * as THREE from 'three';

import './style.css'

let material, geometry, mesh, canvas, camera, lightPoint, lightAmbi, scene, renderer;

function main() {

  //? canvas
  canvas = document.querySelector('.webgl');

  //? scene
  scene = new THREE.Scene();

  //? camera(angle, width/height, nearest point, farthest point)
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 2;
  // other way
  // camera.position.set(0,0,2);
  scene.add(camera);

  //? render (antialias: true means distortion free)
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // clears the render
  // renderer.autoClear = false;
  // improves pixel edge
  renderer.setPixelRatio(window.devicePixelRatio);
  // colorand opacity 0.0
  // renderer.setClearColor(0x00000, 1)

  //? object

  geometry = new THREE.SphereGeometry(2, 32, 32);
  material = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    // map: THREE.ImageUtils.loadTexture('./texture/earthmap1k.jpg'),
    // bumpMap: THREE.ImageUtils.loadTexture("./texture/earthbump.jpg'"),
    // map: new THREE.ImageUtils('./texture/earthmap1k.jpg'),
    // bumpMap: new THREE.ImageUtils("./texture/earthbump.jpg'"),
    bumpScale: 0.1
  })
  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh);

  // light
  lightAmbi = new THREE.AmbientLight(0xffffff, 0.2);
  // lightAmbi.position.set(10,10,10)
  scene.add(lightAmbi)

  // point light 
  lightPoint = new THREE.PointLight(0xfffff, 0.9);
  lightPoint.position.set(5, 3, 5);
  scene.add(lightPoint);


  const animate = ()=>{
    requestAnimationFrame(animate);
    mesh.rotation.y -=0.0015;

    render1();
  }

  const render1 =()=>{
    renderer.render(scene , camera)
    
    animate()
  }
}

window.onload = main;