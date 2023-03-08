<script setup>
import { ref } from 'vue';

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
    <a-entity
      geometry="primitive: plane; height: 30; width: 30"
      position="0 10 0"
      rotation="-90 0 0"
      data-role="nav-mesh"
      visible="true"
    ></a-entity>
</template>