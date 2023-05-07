import * as THREE from 'three';
import "./style.css"

// importing controls
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// Scene
const scene = new THREE.Scene();

// create our object
const geometry = new THREE.SphereGeometry(3,64,64);
const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
    
});
// combining geomery and material
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

// window sizes
const sizes ={
    width: window.innerWidth,
    height: window.innerHeight
}



// light
const light = new THREE.PointLight(0xfffff,1,100);
light.position.set(0,10,10);
scene.add(light);

// camera
const camera = new THREE.PerspectiveCamera(45,sizes.width/ sizes.height,0.1,100);
camera.position.z = 20;
// camera.position.x = 20;
scene.add(camera);

// renderer

const  canvas = document.querySelector('.webgl');
const renderer  = new  THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene,camera);



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

    // mesh.position.x +=0.1;
    // mesh.position.y =0.1;
    // render
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop)
};

loop();