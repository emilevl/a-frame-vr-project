<script setup>
import { ref } from 'vue';
import ViewDoor from './ViewDoor.vue'
import WallHole from './WallHole.vue';

defineProps({
    rotation: String,
    position: String,
    scale: String,
    allAssetsLoaded: false,
    safeRoom: Boolean
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
    </a-assets>

  <a-entity :position="position" :rotation="rotation" :scale="scale" data-role="room" :data-safe-room="safeRoom" data-visited="false">
    <!-- <a-entity light="type: directional; color: #FFF; intensity: 0.7; " rotation="0 90 0" position="0 1.5 1"></a-entity> -->
    <a-entity
      geometry="primitive: plane; height: 3; width: 3"
      position="0 0.01 0"
      rotation="-90 0 0"
      material="src: #seamless-floor; repeat: 0.5 0.5"
      visible="true"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 2.3; width: 2.3"
      position="0 0.02 0"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: blue"
      visible="false"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 3; width: 3;"
      position="0 3 0"
      rotation="90 0 0"
      data-role="nav-mesh"
      material="color: #4a4a4a"
      visible="true"
    ></a-entity>

    <a-sphere 
    material="color: #F7F180" 
    radius="0.1"
    position="0 3.03 0"
    scale="2.2 1 2.2"
    >
    </a-sphere>
    <a-entity
      geometry="primitive: plane; height: 3; width: 3"
      position="0 1.5 -1.5"
      rotation="0 0 0"
      data-role="nav-mesh"
      material="src: #long-seamless-wall; repeat: 2 2"
      visible="true"
    ></a-entity>
    <WallHole rotation="0 90 0" position="-1.5 0 0"></WallHole>
    <!-- <a-entity
      geometry="primitive: plane; height: 3; width: 3"
      position="-1.5 1.5 0"
      rotation="0 90 0"
      data-role="nav-mesh"
      material="src: #square-wall; repeat: 1 2"
      visible="true"
    ></a-entity> -->
    <WallHole rotation="0 -90 0" position="1.5 0 0"></WallHole>
    <!-- <ViewDoor rotation="0 -90 0" position="1.5 0 0" :all-assets-loaded="allAssetsLoaded"></ViewDoor> -->
    <ViewDoor rotation="0 180 0" position="0 0 1.5" :all-assets-loaded="allAssetsLoaded"></ViewDoor>
  </a-entity>
</template>