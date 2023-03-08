<script setup>
import { ref } from "vue";

defineProps({
  rotation: String,
  position: String,
  scale: String,
  allAssetsLoaded: false,
  safeRoom: Boolean,
});
</script>

<template>
  <a-entity
    :position="position"
    :rotation="rotation"
    :scale="scale"
    data-role="room"
    :data-safe-room="safeRoom"
  >
    <a-entity
      geometry="primitive: plane; height: 0.65; width: 3"
      position="0 2.70 0"
      rotation="0 0 0"
      data-role="nav-mesh"
      material="src: #long-seamless-wall; repeat: 3 1"
      visible="true"
    >
    </a-entity>
    <a-entity
      geometry="primitive: plane; height: 2.5; width: 1"
      position="-1 1.25 0"
      rotation="0 0 0"
      data-role="nav-mesh"
      material="src: #long-seamless-wall; repeat: 1 2"
      visible="true"
    >
    </a-entity>
    <a-entity
      geometry="primitive: plane; height: 2.5; width: 1"
      position="1 1.25 0"
      rotation="0 0 0"
      data-role="nav-mesh"
      material="src: #long-seamless-wall; repeat: 1 3"
      visible="true"
    ></a-entity>
  </a-entity>
</template>