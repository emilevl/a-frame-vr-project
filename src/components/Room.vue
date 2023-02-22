<script setup>
import { ref } from 'vue';
import ViewDoor from './ViewDoor.vue'
defineProps({
    rotation: String,
    position: String,
    allAssetsLoaded: false,
  });

const allAssetsLoaded = ref(false);
</script>

<template>
  
  <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <!-- <a-asset-item  id="door" src="assets/door.glb"></a-asset-item> -->
      <a-asset-item  id="door" src="assets/door.glb"></a-asset-item>
    </a-assets>

  <a-entity :position="position" :rotation="rotation">
    <a-entity
      geometry="primitive: plane; height: 3; width: 3"
      position="0 0.01 0"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: blue"
      visible="true"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 3; width: 3"
      position="0 1.5 -1.5"
      rotation="0 0 0"
      data-role="nav-mesh"
      material="color: green"
      visible="true"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 3; width: 3"
      position="-1.5 1.5 0"
      rotation="0 90 0"
      data-role="nav-mesh"
      material="color: green"
      visible="true"
    ></a-entity>
    <ViewDoor rotation="0 -90 0" position="1.5 0 0" :all-assets-loaded="allAssetsLoaded"></ViewDoor>
    <ViewDoor rotation="0 180 0" position="0 0 1.5" :all-assets-loaded="allAssetsLoaded"></ViewDoor>

      <!-- <a-entity
        v-if="allAssetsLoaded"
        gltf-model="#elevator"
        rotation="0 90 0"
        position="0 0 -5"
        scale="1 1.1 1"
        animation-mixer="loop:repeat"
      ></a-entity> -->
    <!-- <ViewDoor rotation="0 -90 0" position="0 0 0"></ViewDoor> -->
  </a-entity>
</template>