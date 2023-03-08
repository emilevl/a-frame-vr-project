<script setup>
import { ref } from "vue";
import "../aframe/animation-mixer";
import "../aframe/clickable";
import WallHole from "./WallHole.vue";
defineProps({
  rotation: String,
  position: String,
  allAssetsLoaded: false,
});
</script>

<template>
  <a-entity :rotation="rotation" :position="position">
    <a-light
      type="directional"
      position="0 2 1"
      target="#directionaltarget"
      rotation="-90 0 0"
      intensity="0.05"
    >
      <a-entity id="directionaltarget" position="0 -0.7 -1"></a-entity>
    </a-light>
    <WallHole></WallHole>

    <a-entity
      v-if="allAssetsLoaded"
      data-role="door"
      gltf-model="#door"
      rotation="0 -180 0"
      position="0 0 -0.01"
      scale="1 1.1 1"
      clickable
      animation-mixer="loop:once; timeScale: 0; startAt: 3000; stopAt: 9000"
      event-set__click="event: click; attribute:animation-mixer.timeScale; value:1 ;"
      sound="src: #sound-door; on:click; loop: false;"
    >
    </a-entity>
  </a-entity>
</template>
