import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera );

const geometry = new THREE.OctahedronGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
const octa = new THREE.Mesh( geometry, material );

scene.add( octa );

const controls = new OrbitControls( camera, renderer.domElement );

function animate() {
  requestAnimationFrame( animate );
/* 
  octa.rotateX( 0.001 );
  octa.rotateY( 0.01 );
  octa.rotateZ( 0.01 );
*/
  controls.update();


  renderer.render( scene, camera );
}

animate();

function spinOcta() {
  octa.rotateY( 0.01 );

}
document.body.onscroll = spinOcta;
