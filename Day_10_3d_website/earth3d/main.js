import * as THREE from 'three';
import "./style.css"

// import gsap
import gsap from "gsap"

// importing controls
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// Scene
const scene = new THREE.Scene();

// create our object
// const geometry = new THREE.SphereGeometry(3,64,64);
const geometry = new THREE.TorusKnotGeometry( 2, 0.8, 100, 16 ); 
const material = new THREE.MeshStandardMaterial({
    color: "#0000ff",
    roughness:0.5,
    
});
// combining geomery and material
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

// window sizes
const sizes ={
    width: window.innerWidth,
    height: window.innerHeight
}



//  point light
const light = new THREE.PointLight(0xffffff,1,100);
light.position.set(0,5,5);
scene.add(light);
// ambient light
const light2 = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light2 );

// light helper
// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
// scene.add( pointLightHelper );

// plane helper
// const plane = new THREE.Plane( new THREE.Vector3( 1, 1, 0.2 ), 3 );
// const helper1 = new THREE.PlaneHelper( plane, 1, 0xffff00 );
// scene.add( helper1 );

// polar grid helper
// const radius = 10;
// const sectors = 16;
// const rings = 8;
// const divisions = 64;
// const helper = new THREE.PolarGridHelper( radius, sectors, rings, divisions );
// scene.add( helper );


// camera
const camera = new THREE.PerspectiveCamera(45,sizes.width/ sizes.height,0.1,100);
camera.position.z = 20;
// camera.position.x = 20;
scene.add(camera);

// helper
// const helper = new THREE.CameraHelper( camera );
// scene.add( helper );


// renderer
const  canvas = document.querySelector('.webgl');
const renderer  = new  THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);//improves the edge pixel
renderer.render(scene,camera);


// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// dsiableing zoom and pan
controls.enablePan = false;
controls.enableZoom = false;
// enablinf auto rotate
controls.autoRotate = true;
controls.autoRotateSpeed = 10;

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


// timeline magic
const tl = gsap.timeline({defaults:{duration:1}});
tl.fromTo(mesh.scale, {x:0,y:0,z:0},{x:1,y:1,z:1});
tl.fromTo('.nav',{y:"-100%"},{y:"0%"});
tl.fromTo('.heading',{opacity:0},{opacity:1})
