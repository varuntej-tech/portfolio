/**
 * ==============================================================================
 * VARUN TEJA PORTFOLIO - THREE.JS 3D SCENE & DEPTH ILLUSION ENGINE
 * Provides:
 * 1. Fullscreen 3D Cyber Nebula & Warp Particle Tunnel with Scroll Traversal
 * 2. Infinite 3D Cyber Grid Plane with Perspective Depth
 * 3. Interactive 3D Holographic Cyber Core for the Hero Section
 * ==============================================================================
 */

(function () {
  if (typeof THREE === "undefined") {
    console.warn("Three.js not loaded. Falling back to 2D canvas.");
    return;
  }

  // Check WebGL availability
  function isWebGLAvailable() {
    try {
      const canvas = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
    } catch (e) {
      return false;
    }
  }

  if (!isWebGLAvailable()) {
    console.warn("WebGL not supported. Using fallback background.");
    return;
  }

  // ============================================================================
  // 1. FULLSCREEN BACKGROUND 3D SCENE
  // ============================================================================
  const bgCanvas = document.getElementById("webgl-canvas");
  if (!bgCanvas) return;

  const bgScene = new THREE.Scene();
  bgScene.fog = new THREE.FogExp2(0x0a0106, 0.0018);

  const bgCamera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    2500
  );
  bgCamera.position.z = 1000;
  bgCamera.position.y = 80;

  const bgRenderer = new THREE.WebGLRenderer({
    canvas: bgCanvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
  bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // --- 3D Particle Cloud / Cyber Space ---
  const particleCount = window.innerWidth < 768 ? 900 : 1800;
  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);
  const originalPositions = new Float32Array(particleCount * 3);

  const colorPalette = [
    new THREE.Color(0x970747), // Dark Pink
    new THREE.Color(0xffffff), // Crisp Diamond White
    new THREE.Color(0xd6226e), // Luminous Rose
    new THREE.Color(0xff75a0), // Light Blush Rose
    new THREE.Color(0xfce7f0), // Frosted Pink
    new THREE.Color(0x6b0532)  // Deep Wine Velvet
  ];

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    // Spread in a wide cylindrical cyber volume
    const radius = 300 + Math.random() * 950;
    const theta = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 2200;

    particlePositions[i3] = Math.cos(theta) * radius;
    particlePositions[i3 + 1] = y;
    particlePositions[i3 + 2] = Math.sin(theta) * radius;

    originalPositions[i3] = particlePositions[i3];
    originalPositions[i3 + 1] = particlePositions[i3 + 1];
    originalPositions[i3 + 2] = particlePositions[i3 + 2];

    const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    particleColors[i3] = c.r;
    particleColors[i3 + 1] = c.g;
    particleColors[i3 + 2] = c.b;
  }

  particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
  particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

  // Create subtle circular texture for points
  function createParticleTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.28, "rgba(255,255,255,0.95)");
    gradient.addColorStop(0.55, "rgba(151,7,71,0.65)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }

  const particleMaterial = new THREE.PointsMaterial({
    size: 5.5,
    vertexColors: true,
    map: createParticleTexture(),
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  bgScene.add(particleSystem);

  // --- Infinite 3D Cyber Horizon Grid Plane ---
  const gridHelper = new THREE.GridHelper(3000, 50, 0x970747, 0x240212);
  gridHelper.position.y = -350;
  gridHelper.material.opacity = 0.35;
  gridHelper.material.transparent = true;
  gridHelper.material.blending = THREE.AdditiveBlending;
  bgScene.add(gridHelper);

  // --- Subtle Floating Background Cyber Geometries ---
  const floatingGroup = new THREE.Group();
  bgScene.add(floatingGroup);

  const shapes = [];
  const geomTypes = [
    new THREE.IcosahedronGeometry(25, 0),
    new THREE.OctahedronGeometry(22, 0),
    new THREE.TetrahedronGeometry(24, 0),
    new THREE.TorusGeometry(20, 4, 8, 20)
  ];

  const wireColors = [0x970747, 0xffffff, 0xd6226e];
  for (let i = 0; i < 14; i++) {
    const geom = geomTypes[i % geomTypes.length];
    const wireMat = new THREE.MeshBasicMaterial({
      color: wireColors[i % wireColors.length],
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const mesh = new THREE.Mesh(geom, wireMat);
    mesh.position.set(
      (Math.random() - 0.5) * 1400,
      (Math.random() - 0.5) * 1400,
      (Math.random() - 0.5) * 1200
    );
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    mesh.userData = {
      rotX: (Math.random() - 0.5) * 0.012,
      rotY: (Math.random() - 0.5) * 0.012,
      floatSpeed: 0.001 + Math.random() * 0.002,
      floatOffset: Math.random() * Math.PI * 2,
      baseY: mesh.position.y
    };
    floatingGroup.add(mesh);
    shapes.push(mesh);
  }

  // ============================================================================
  // 2. HERO 3D HOLOGRAPHIC CYBER CORE
  // ============================================================================
  const heroCanvas = document.getElementById("hero-three-canvas");
  let heroRenderer, heroScene, heroCamera, heroCoreGroup;
  let heroIcosahedron, heroInnerSphere, heroRing1, heroRing2, heroRing3;

  if (heroCanvas) {
    heroScene = new THREE.Scene();
    heroCamera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
    heroCamera.position.z = 180;

    heroRenderer = new THREE.WebGLRenderer({
      canvas: heroCanvas,
      alpha: true,
      antialias: true
    });
    heroRenderer.setSize(260, 260);
    heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    heroCoreGroup = new THREE.Group();
    heroScene.add(heroCoreGroup);

    // Outer Holographic Wireframe Icosahedron
    const icoGeom = new THREE.IcosahedronGeometry(42, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x970747,
      wireframe: true,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending
    });
    heroIcosahedron = new THREE.Mesh(icoGeom, icoMat);
    heroCoreGroup.add(heroIcosahedron);

    // Icosahedron Vertex Points
    const icoPointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 4.5,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });
    const icoPoints = new THREE.Points(icoGeom, icoPointsMat);
    heroIcosahedron.add(icoPoints);

    // Inner Glowing Core Sphere
    const sphereGeom = new THREE.SphereGeometry(18, 16, 16);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0xd6226e,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    heroInnerSphere = new THREE.Mesh(sphereGeom, sphereMat);
    heroCoreGroup.add(heroInnerSphere);

    // Concentric Gimbal Rings
    function createGimbalRing(radius, color, tube = 0.6) {
      const ringGeom = new THREE.TorusGeometry(radius, tube, 6, 40);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      });
      return new THREE.Mesh(ringGeom, ringMat);
    }

    heroRing1 = createGimbalRing(55, 0x970747, 0.85);
    heroRing2 = createGimbalRing(65, 0xffffff, 0.75);
    heroRing3 = createGimbalRing(74, 0xff75a0, 0.65);

    heroRing1.rotation.x = Math.PI / 4;
    heroRing2.rotation.y = Math.PI / 3;
    heroRing3.rotation.z = Math.PI / 6;

    heroCoreGroup.add(heroRing1);
    heroCoreGroup.add(heroRing2);
    heroCoreGroup.add(heroRing3);
  }

  // ============================================================================
  // 3. INTERACTIVE MOUSE & SCROLL STATE
  // ============================================================================
  const mouse = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    heroX: 0,
    heroY: 0,
    isHoveringHero: false
  };

  let scrollY = window.scrollY;
  let targetScrollY = window.scrollY;
  let maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

  window.addEventListener("scroll", () => {
    targetScrollY = window.scrollY;
    maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  }, { passive: true });

  window.addEventListener("mousemove", (e) => {
    // Normalized mouse (-1 to +1)
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;

    // Relative to hero visual if inside
    if (heroCanvas) {
      const rect = heroCanvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.isHoveringHero = true;
        mouse.heroX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.heroY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      } else {
        mouse.isHoveringHero = false;
      }
    }
  });

  // Mobile Touch Move Interaction
  window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches[0]) {
      const touch = e.touches[0];
      mouse.targetX = (touch.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(touch.clientY / window.innerHeight) * 2 + 1;
    }
  }, { passive: true });

  // Mobile Gyroscope 3D Parallax Illusion (Phone Tilt)
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (e) => {
      if (e.gamma !== null && e.beta !== null) {
        // gamma: left-to-right (-45 to 45 degrees clamp)
        const clampedGamma = Math.max(-45, Math.min(45, e.gamma));
        // beta: front-to-back tilt (centered at ~45deg for typical phone hold)
        const clampedBeta = Math.max(-45, Math.min(45, e.beta - 45));

        mouse.targetX = (clampedGamma / 45);
        mouse.targetY = -(clampedBeta / 45);

        if (heroCanvas) {
          mouse.heroX = mouse.targetX * 0.8;
          mouse.heroY = mouse.targetY * 0.8;
          mouse.isHoveringHero = true;
        }
      }
    }, { passive: true });
  }

  // Handle Resize
  function onWindowResize() {
    bgCamera.aspect = window.innerWidth / window.innerHeight;
    bgCamera.updateProjectionMatrix();
    bgRenderer.setSize(window.innerWidth, window.innerHeight);
    bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(onWindowResize, 150);
  });

  // ============================================================================
  // 4. ANIMATION LOOP & SCROLL ILLUSION (WARP DEPTH)
  // ============================================================================
  let clock = new THREE.Clock();
  let animationId;
  let isTabActive = true;

  document.addEventListener("visibilitychange", () => {
    isTabActive = !document.hidden;
    if (isTabActive) {
      clock.start();
      animate();
    } else {
      cancelAnimationFrame(animationId);
    }
  });

  function animate() {
    if (!isTabActive) return;
    animationId = requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    // Smooth lerp for mouse parallax
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // Smooth lerp for scroll
    scrollY += (targetScrollY - scrollY) * 0.08;
    const scrollProgress = scrollY / maxScroll; // 0.0 to 1.0

    // --- Background Camera Scrollytelling Depth Illusion ---
    // Camera glides dynamically through the 3D space across story chapters
    const targetCamZ = 1000 - scrollProgress * 650;
    const targetCamY = 80 - scrollProgress * 260;
    const targetCamRotZ = (scrollProgress - 0.5) * 0.35;

    bgCamera.position.z += (targetCamZ - bgCamera.position.z) * 0.06;
    bgCamera.position.y += (targetCamY - bgCamera.position.y) * 0.06;
    bgCamera.rotation.z += (targetCamRotZ - bgCamera.rotation.z) * 0.06;

    // Mouse parallax tilt on background camera
    bgCamera.position.x = mouse.x * 90;
    bgCamera.position.y += mouse.y * 50;
    bgCamera.lookAt(0, -scrollProgress * 180, 0);

    // Gently rotate particle cloud
    particleSystem.rotation.y = elapsedTime * 0.04;
    particleSystem.rotation.x = Math.sin(elapsedTime * 0.02) * 0.08;

    // Animate grid plane forward to create continuous motion illusion
    gridHelper.position.z = (elapsedTime * 45) % 60;

    // Animate floating polyhedra
    for (let i = 0; i < shapes.length; i++) {
      const s = shapes[i];
      s.rotation.x += s.userData.rotX;
      s.rotation.y += s.userData.rotY;
      s.position.y = s.userData.baseY + Math.sin(elapsedTime * s.userData.floatSpeed * 1000 + s.userData.floatOffset) * 25;
    }

    bgRenderer.render(bgScene, bgCamera);

    // --- Render Hero Holographic Core ---
    if (heroRenderer && heroScene && heroCamera && heroCoreGroup) {
      const speed = mouse.isHoveringHero ? 2.5 : 1.0;

      heroIcosahedron.rotation.x += 0.008 * speed;
      heroIcosahedron.rotation.y += 0.012 * speed;

      heroInnerSphere.rotation.x -= 0.01 * speed;
      heroInnerSphere.rotation.z += 0.015 * speed;

      // Pulse inner sphere scale
      const scale = 1 + Math.sin(elapsedTime * 3) * 0.08;
      heroInnerSphere.scale.set(scale, scale, scale);

      heroRing1.rotation.x += 0.014 * speed;
      heroRing1.rotation.y += 0.009 * speed;

      heroRing2.rotation.y += 0.011 * speed;
      heroRing2.rotation.z += 0.016 * speed;

      heroRing3.rotation.x -= 0.013 * speed;
      heroRing3.rotation.z -= 0.008 * speed;

      // Mouse tilt tracking on Hero core
      if (mouse.isHoveringHero) {
        heroCoreGroup.rotation.y += (mouse.heroX * 0.8 - heroCoreGroup.rotation.y) * 0.1;
        heroCoreGroup.rotation.x += (-mouse.heroY * 0.8 - heroCoreGroup.rotation.x) * 0.1;
      } else {
        heroCoreGroup.rotation.y += (mouse.x * 0.35 - heroCoreGroup.rotation.y) * 0.05;
        heroCoreGroup.rotation.x += (-mouse.y * 0.35 - heroCoreGroup.rotation.x) * 0.05;
      }

      heroRenderer.render(heroScene, heroCamera);
    }
  }

  // Start animation loop
  animate();
})();
