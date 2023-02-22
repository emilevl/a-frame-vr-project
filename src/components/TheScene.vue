<script setup>
  import { ref } from 'vue';
  import { randomHsl } from '../utils/color.js';

  import BoxColorChanging from './BoxColorChanging.vue';
  import TheCameraRig from './TheCameraRig.vue';
  import TheNavMesh from './TheNavMesh.vue';
  import TheHexagon from './TheHexagon.vue';
  import Room from './Room.vue';

  import '../aframe/life-like-automaton';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const colorBoxLeft = ref(randomHsl());
  const colorBoxRight = ref(randomHsl());
  const allAssetsLoaded = ref(false);

</script>

<template>
  <!-- <a-scene
    background="color: black;"
    renderer="colorManagement: true;"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
  > -->
  
  <a-scene
    background="color: #87CEEB;"
    stats
    fog="type: linear; color: #a3d0ed; near: 2; far: 25;"
  >

  <!-- <a-entity light="color: #ffffff; type: directional; intensity: 8" position="-1 1 -8"></a-entity> -->
  <!-- <a-entity light="color: #fb9062; type: directional; intensity: 2" position="-1 1 -9"></a-entity> -->
  <a-entity light="color: #87CEEB; type: ambient; intensity: 5" position="-1 1 -10"></a-entity>
  <!-- <a-entity light="color: #87CEEB; type: ambient; intensity: 0.2" position="-1 1 -10"></a-entity> -->

  <Room></Room>
  
    <!-- <Room></Room> -->
  <!-- <TheHexagon :scale="scale" color="blue" position="0 0 5"></TheHexagon> -->
    <!-- <a-assets @loaded="allAssetsLoaded = true"> -->
      <!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <!-- <a-asset-item  id="room" src="assets/vr_gallery.glb"></a-asset-item> -->
      <!-- <a-asset-item  id="test" src="assets/low_poly_simple_hallway_room.glb"></a-asset-item> -->
    <!-- </a-assets> -->

    <!-- <a-entity
      v-if="allAssetsLoaded"
      gltf-model="#room"
      rotation="0 90 0"
      position="0 0 -5"
      scale="1 1.1 1"
    > -->
      <!-- <a-entity
        geometry="primitive: plane; height: 2; width: 2;"
        position="2 2 3.9"
        rotation="-180 0 0"
        life-like-automaton="genPerSec: 25;"
      ></a-entity> -->

      <!-- <a-entity
        geometry="primitive: plane; height: 2; width: 2;"
        position="2 2 -3.9"
        life-like-automaton="genPerSec: 25; maxGen: 10; birthRule: 6,7,8; survivalRule: 4,5,6,7,8;"
      ></a-entity> -->

      <!-- <BoxColorChanging
        id="box-left"
        :scale="scale"
        :color="colorBoxLeft"
        position="3 0.1 -5"
        @click="colorBoxRight = randomHsl()"
      /> -->

      <!-- <BoxColorChanging
        id="box-right"
        :scale="scale"
        :color="colorBoxRight"
        data-role="nav-mesh"
        position="-4 0.5 -5"
        @click="colorBoxLeft = randomHsl()"
      /> -->
      <!-- <a-entity
      v-if="allAssetsLoaded"
      gltf-model="#test"
      rotation="0 90 0"
      position="0 0 -5"
      scale="1 1.1 1"
    ></a-entity> -->
    <!-- </a-entity> -->

    <!-- <TheNavMesh /> -->

    <TheCameraRig />

  </a-scene>
</template>