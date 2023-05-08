// import './style.css'

// import * as THREE from 'three';

// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

//  scene
const scene = new THREE.Scene();
// const scene2 = new THREE.Scene();

//  object
const geometry  = new THREE.TorusKnotGeometry( 2.5,0.8, 200, 20 );
const material = new THREE.MeshStandardMaterial({
  color: 0xfffff,

});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

// object 2 
const curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	10, 10,           // xRadius, yRadius
	0,  2 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	0                 // aRotation
);

const points = curve.getPoints( 50 );
const geometry1 = new THREE.BufferGeometry().setFromPoints( points );

const material1 = new THREE.LineBasicMaterial( { color: 0xff0000 } );

// Create the final object to add to the scene
const ellipse = new THREE.Line( geometry1, material1 );

scene.add(ellipse)


// sizes
const sizes = {
  width :window.innerWidth,
  height : window.innerHeight
}

// light
const light = new THREE.AmbientLight(0x404040);
scene.add(light);
const light2 = new THREE.PointLight(0x0000ff, 1, 1000);
light2.intensity =1;
light2.position.set(0 , 5, 5);
scene.add(light2);

// light helper
const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper( light2, sphereSize );
// scene.add( pointLightHelper );

// camera
const camera = new THREE.PerspectiveCamera(45,sizes.width/ sizes.height);
camera.position.z =20;
scene.add(camera);

// renderer

const canvas = document.querySelector('.hero');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width ,sizes.height);
renderer.render(scene, camera);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// dsiableing zoom and pan
controls.enablePan = false;
controls.enableZoom = false;
// enablinf auto rotate
controls.autoRotate = true;
controls.autoRotateSpeed = 5;


// resize
window.addEventListener("resize",()=>{
  // updateig sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // console.log(sizes.width)

  // updating camera
  camera.aspect =sizes.width/sizes.height;
  // removes sqeezing and maintains size
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width,sizes.height)
})
// render the scene for every frame
const loop = ()=>{

  controls.update();
  // mesh.position.x +=0.1;
  // mesh.position.y =0.1;
  // render
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop)
};

loop();