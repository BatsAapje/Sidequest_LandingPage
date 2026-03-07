import * as THREE from "https://esm.sh/three@0.160.0";
import { RoundedBoxGeometry } from "https://esm.sh/three@0.160.0/examples/jsm/geometries/RoundedBoxGeometry.js";
import * as CANNON from "https://esm.sh/cannon-es@0.20.0";

// --- Container setup ---
const container = document.getElementById("dice-container");
if (!container || getComputedStyle(container).display === "none") {
  // Hidden on mobile or missing — skip initialization
} else {
  initDice();
}

function initDice() {
  const width = container.clientWidth || 160;
  const height = container.clientHeight || 160;
  const aspect = width / height;
  const FRUSTUM_SIZE = 5;

  // --- Scene ---
  const scene = new THREE.Scene();

  // --- Camera (orthographic, isometric-style) ---
  const camera = new THREE.OrthographicCamera(
    (-FRUSTUM_SIZE * aspect) / 2,
    (FRUSTUM_SIZE * aspect) / 2,
    FRUSTUM_SIZE / 2,
    -FRUSTUM_SIZE / 2,
    1,
    100
  );
  camera.position.set(8, 8, 8);
  camera.lookAt(0, 0, 0);

  // --- Renderer (transparent background) ---
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // --- Lighting ---
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(4, 6, 3);
  scene.add(dirLight);

  // --- Physics world ---
  const world = new CANNON.World();
  world.gravity.set(0, -20, 0);
  world.allowSleep = true;

  const diceMat = new CANNON.Material();
  const floorMat = new CANNON.Material();
  world.addContactMaterial(
    new CANNON.ContactMaterial(floorMat, diceMat, {
      friction: 0.4,
      restitution: 0.4,
    })
  );

  // Floor
  const floorBody = new CANNON.Body({ mass: 0, material: floorMat });
  floorBody.addShape(new CANNON.Plane());
  floorBody.quaternion.setFromAxisAngle(
    new CANNON.Vec3(1, 0, 0),
    -Math.PI / 2
  );
  floorBody.position.y = -1.5;
  world.addBody(floorBody);

  // Walls to keep dice in view
  const wallDist = 3;
  const addWall = (x, z, rot) => {
    const b = new CANNON.Body({ mass: 0, material: floorMat });
    b.addShape(new CANNON.Plane());
    b.position.set(x, 0, z);
    b.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), rot);
    world.addBody(b);
  };
  addWall(wallDist, 0, -Math.PI / 2);
  addWall(-wallDist, 0, Math.PI / 2);
  addWall(0, -wallDist, 0);
  addWall(0, wallDist, Math.PI);

  // --- Classic white die with black dots ---
  const outlineColor = "#725349";

  function createFaceTexture(number) {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    // White face
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, size, size);

    // Black dots
    ctx.fillStyle = "#1a1a2e";
    const dotSize = size / 5.5;
    const center = size / 2;
    const q1 = size / 4;
    const q3 = (size * 3) / 4;

    function drawDot(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
      ctx.fill();
    }

    if (number === 1) drawDot(center, center);
    else if (number === 2) {
      drawDot(q1, q1);
      drawDot(q3, q3);
    } else if (number === 3) {
      drawDot(q1, q1);
      drawDot(center, center);
      drawDot(q3, q3);
    } else if (number === 4) {
      drawDot(q1, q1);
      drawDot(q3, q1);
      drawDot(q1, q3);
      drawDot(q3, q3);
    } else if (number === 5) {
      drawDot(q1, q1);
      drawDot(center, center);
      drawDot(q1, q3);
      drawDot(q3, q3);
      drawDot(q3, q1);
    } else if (number === 6) {
      drawDot(q1, q1);
      drawDot(q3, q1);
      drawDot(q1, center);
      drawDot(q3, center);
      drawDot(q1, q3);
      drawDot(q3, q3);
    }

    return new THREE.CanvasTexture(canvas);
  }

  // --- Build dice ---
  const boxSize = 1.8;
  const geometry = new RoundedBoxGeometry(boxSize, boxSize, boxSize, 4, 0.3);

  function createDie() {
    const mats = [];
    for (let j = 1; j <= 6; j++) {
      mats.push(
        new THREE.MeshBasicMaterial({ map: createFaceTexture(j) })
      );
    }
    // Reorder to match cube UV mapping
    const matArray = [mats[0], mats[5], mats[1], mats[4], mats[2], mats[3]];

    const mesh = new THREE.Mesh(geometry, matArray);
    scene.add(mesh);

    // Outline
    const outlineMat = new THREE.MeshBasicMaterial({
      color: outlineColor,
      side: THREE.BackSide,
    });
    const outline = new THREE.Mesh(geometry, outlineMat);
    outline.scale.setScalar(1.06);
    scene.add(outline);

    // Shadow
    const shadowGeo = new THREE.CircleGeometry(boxSize * 0.55, 24);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.15,
    });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -1.49;
    scene.add(shadow);

    // Physics body
    const shape = new CANNON.Box(
      new CANNON.Vec3(boxSize / 2, boxSize / 2, boxSize / 2)
    );
    const body = new CANNON.Body({
      mass: 5,
      shape,
      material: diceMat,
      linearDamping: 0.3,
      angularDamping: 0.3,
    });
    body.position.set(0, 2, 0);
    body.quaternion.setFromEuler(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    world.addBody(body);

    return { mesh, outline, shadow, body };
  }

  const dice = [createDie()];

  // --- Roll function ---
  function rollDice() {
    dice.forEach(({ body }) => {
      body.wakeUp();
      body.position.set(
        (Math.random() - 0.5) * 1,
        3,
        (Math.random() - 0.5) * 1
      );
      body.velocity.set(
        (Math.random() - 0.5) * 5,
        -8 - Math.random() * 5,
        (Math.random() - 0.5) * 5
      );
      body.angularVelocity.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    });
    isSettled = false;
    settledFrames = 0;
  }

  // Click to re-roll
  container.addEventListener("click", rollDice);

  // Auto-roll on load
  setTimeout(rollDice, 600);

  // --- Animation loop ---
  let isSettled = false;
  let settledFrames = 0;
  let animationId = null;
  let isVisible = true;

  // Pause when off-screen
  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationId) animate();
    },
    { threshold: 0 }
  );
  observer.observe(container);

  function animate() {
    if (!isVisible) {
      animationId = null;
      return;
    }
    animationId = requestAnimationFrame(animate);

    // Step physics
    if (!isSettled) {
      world.step(1 / 60);
    }

    // Sync visuals
    dice.forEach(({ mesh, outline, shadow, body }) => {
      mesh.position.copy(body.position);
      mesh.quaternion.copy(body.quaternion);
      outline.position.copy(mesh.position);
      outline.quaternion.copy(mesh.quaternion);

      shadow.position.x = body.position.x;
      shadow.position.z = body.position.z;

      const h = Math.max(0, body.position.y - (-1.5));
      const s = Math.max(0.5, 1 - h * 0.06);
      const o = Math.max(0, 0.15 - h * 0.01);
      shadow.scale.setScalar(s);
      shadow.material.opacity = o;

      // Idle float after settling
      if (isSettled) {
        const t = performance.now() / 1000;
        mesh.position.y += Math.sin(t * 0.8) * 0.03;
        mesh.rotation.y += 0.002;
        outline.position.copy(mesh.position);
        outline.quaternion.copy(mesh.quaternion);
      }
    });

    // Check if settled
    if (!isSettled) {
      let allStopped = true;
      for (const { body } of dice) {
        if (
          body.velocity.lengthSquared() > 0.05 ||
          body.angularVelocity.lengthSquared() > 0.05
        ) {
          allStopped = false;
          break;
        }
      }
      if (allStopped) {
        settledFrames++;
        if (settledFrames > 30) {
          isSettled = true;
        }
      } else {
        settledFrames = 0;
      }
    }

    renderer.render(scene, camera);
  }

  animate();

  // --- Resize handling ---
  const resizeObserver = new ResizeObserver(() => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w === 0 || h === 0) return;
    const a = w / h;
    camera.left = (-FRUSTUM_SIZE * a) / 2;
    camera.right = (FRUSTUM_SIZE * a) / 2;
    camera.top = FRUSTUM_SIZE / 2;
    camera.bottom = -FRUSTUM_SIZE / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  resizeObserver.observe(container);
}
