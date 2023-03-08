<script setup>
  import { ref } from 'vue';
  import TheOnboarding from './components/TheOnboarding.vue';
  import TheOverlay from './components/TheOverlay.vue';
  import TheScene from './components/TheScene.vue';
import TheNavMesh from './components/TheNavMesh.vue';

  const scale = ref(1);
  const allAssetsLoaded = ref(false);
  const loaded = ref(false);
</script>

<template>
  
  <TheOnboarding :loaded="loaded" />

  <!-- The DOM element of the overlay must be mounted before the A-Frame Scene is mounted -->
  <!-- Otherwise the "webxr system" of the A-Frame scene wont find the DOM Element -->
  <TheOverlay v-model="scale" id="overlay" />

  <TheScene
    :scale="scale"
    overlay-selector="#overlay"
    @loaded="loaded = true"
  />
  
  <!--

  <a-scene>
    <a-entity
    id="camera-rig"
    wasd-controls
    >
    <a-entity
    id="head"
    position="0 1.65 5"
    camera
    look-controls
    >
      <a-entity
            geometry="primitive: circle; radius: 0.0003;"
            material="shader: flat; color: white;"
            cursor
            raycaster="far: 2; objects: [clickable]; showLine: false;"
            position="0 0 -0.1"
            disable-in-vr="component: raycaster; disableInAR: false;"
            hide-in-vr="hideInAR: false"
        ></a-entity>
    </a-entity>
    <a-entity
    id="hand-left"
    hand-controls="hand: left"
    ></a-entity>
    <a-entity
    id="hand-right"
    hand-controls="hand: right"
    ></a-entity>
  </a-entity> -->
    
    <!-- <a-camera position="0 1.65 0"></a-camera> -->
    <!-- <a-assets  @loaded="allAssetsLoaded = true">
      <a-asset-item  id="test" src="assets/low_poly_simple_hallway_room.glb"></a-asset-item>
    </a-assets> -->
    <!-- <a-entity v-if="allAssetsLoaded"
      gltf-model="#test"
      position="0 -0.004 -5"
      scale="0.03 0.03 0.03"
    ></a-entity> -->
    <!-- <TheNavMesh></TheNavMesh> -->
    <!-- <ImBox color="black" position="0 0 -5" size="5"></ImBox> -->
    <!-- <a-box position="0 0 -5" color="tomato" depth="2" height="4" width="0.5"></a-box>
  </a-scene> -->
  
</template>