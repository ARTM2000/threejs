//require sources
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// camera.position.z = 50;
camera.position.set(15, 10, 80);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeGeo = new THREE.BoxBufferGeometry(7, 7, 7);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "blue" });
const cube = new THREE.Mesh(cubeGeo, cubeMaterial);

const conGeo = new THREE.ConeBufferGeometry(5, 20, 15);
const conMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const cone = new THREE.Mesh(conGeo, conMaterial);

function animate() {
  scene.add(cube);
  cube.position.x = 5;
  cube.position.z = 0;
  cube.position.y = 5;

  scene.add(cone);
  requestAnimationFrame(animate);
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;
  //   cone.rotation.z += 0.02;
  //   cone.rotation.x += 0.02;
  renderer.render(scene, camera);
}
animate();
