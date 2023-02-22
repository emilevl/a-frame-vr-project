<script setup> 
import { ref } from "vue";
defineProps({
    rotation: String,
    position: String,
    allAssetsLoaded: false,
  });
</script>

<template>

    <a-entity :rotation="rotation" :position="position">
        <a-entity
            geometry="primitive: plane; height: 0.65; width: 3"
            position="0 2.70 0"
            rotation="0 0 0"
            data-role="nav-mesh"
            material="color: yellow"
            visible="true"
          ></a-entity>
          <a-entity
            geometry="primitive: plane; height: 2.5; width: 1"
            position="-1 1.25 0"
            rotation="0 0 0"
            data-role="nav-mesh"
            material="color: yellow"
            visible="true"
          ></a-entity>
          <a-entity
            geometry="primitive: plane; height: 2.5; width: 1"
            position="1 1.25 0"
            rotation="0 0 0"
            data-role="nav-mesh"
            material="color: yellow"
            visible="true"
          ></a-entity>
          <a-entity
            v-if="allAssetsLoaded"
            gltf-model="#door"
            rotation="0 -180 0"
            position="0 0 -0.01"
            scale="1 1.1 1"
            animation-mixer="loop:repeat"
            ></a-entity>
    </a-entity>
</template>
