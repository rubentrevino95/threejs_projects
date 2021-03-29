import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';

function App() {

      const scene = new THREE.Scene();

			const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 45, 30000 );
      camera.position.set(-900,-200,-900);
			const renderer = new THREE.WebGLRenderer({antialias:true});
			renderer.setSize( window.innerWidth, window.innerHeight );  
			document.body.appendChild( renderer.domElement );

      let controls = new THREE.OrbitControls(camera);
      controls.addEventListener('change', renderer);
      controls.minDistance = 500;
      controls.maxDistance = 1500;

      let materialArray = [];
      let texture_ft = new THREE.TextureLoader().load('envmap_interstellar\interstellar_ft.tga');
      let texture_bk = new THREE.TextureLoader().load('envmap_interstellar\interstellar_bk.tga');
      let texture_dn = new THREE.TextureLoader().load('envmap_interstellar\interstellar_dn.tga');
      let texture_lf = new THREE.TextureLoader().load('envmap_interstellar\interstellar_lf.tga');
      let texture_rt = new THREE.TextureLoader().load('envmap_interstellar\interstellar_rt.tga');
      let texture_up = new THREE.TextureLoader().load('envmap_interstellar\interstellar_up.tga');

      materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
      materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));

      for(let i = 0; i<6; i++) {
        materialArray[i].side = THREE.BackSide;
      }

      let skyboxGeo = new THREE.BoxGeometry(10000,10000,10000);
      let skybox = new THREE.Mesh(skyboxGeo, materialArray);
      scene.add(skybox);

      function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      init();



			// const geometry = new THREE.BoxGeometry();
			// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			// const cube = new THREE.Mesh( geometry, material );
			// scene.add( cube );

			// camera.position.z = 5;

			// const animate = function () {
			// 	requestAnimationFrame( animate );

			// 	cube.rotation.x += 0.01;
			// 	cube.rotation.y += 0.01;

			// 	renderer.render( scene, camera );
			// };

			// animate();

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
