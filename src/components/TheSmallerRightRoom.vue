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

  <a-entity :position="position" :rotation="rotation" :scale="scale" data-role="room" :data-safe-room="safeRoom">
    <!-- <a-entity light="type: directional; color: #FFF; intensity: 0.7; " rotation="0 90 0" position="0 1.5 1"></a-entity> -->
    <a-entity
      geometry="primitive: plane; height: 3; width: 1.2"
      position="0.9 0.01 0"
      rotation="-90 0 0"
      material="src: #seamless-floor; repeat: 0.5 1"
      visible="true"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 2.8; width: 0.7"
      position="0.9 0.02 0.4"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: blue"
      visible="false"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 1.2; width: 0.3"
      position="1.40 0.02 0"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: blue"
      visible="false"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 3; width: 1.2;"
      position="0.9 3 0"
      rotation="90 0 0"
      data-role="nav-mesh"
      material="color: #4a4a4a"
      visible="true"
    ></a-entity>

    <a-sphere 
    color="#F7F180" 
    radius="0.1"
    position="0.9 3.03 0"
    scale="2.2 1 2.2"
    >
    </a-sphere>
    <a-entity
      geometry="primitive: plane; height: 3; width:1.2"
      position="0.9 1.5 -1.4"
      rotation="0 0 0"
      data-role="nav-mesh"
      material="src: #long-seamless-wall; repeat: 2 2"
      visible="true"
    ></a-entity>

    <!-- <a-entity
      geometry="primitive: plane; height: 3; width:1.2"
      position="0.9 1.5 1.5"
      rotation="0 180 0"
      data-role="nav-mesh"
      material="src: #long-seamless-wall; repeat: 2 2"
      visible="true"
    ></a-entity> -->
    
    <a-entity
      geometry="primitive: plane; height: 3; width: 3"
      position="0.35 1.5 0"
      rotation="0 90 0"
      data-role="nav-mesh"
      material="src: #long-seamless-wall; repeat: 2 2"
      visible="true"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 3; width: 3"
      position="1.5 1.5 0"
      rotation="0 -90 0"
      data-role="nav-mesh"
      material="src: #long-seamless-wall; repeat: 2 2"
      visible="true"
    ></a-entity>

    <a-entity
      geometry="primitive: plane; height: 0.65; width: 1.2"
      position="0.9 2.70 1.5"
      rotation="0 180 0"
      data-role="nav-mesh" 
      material="src: #long-seamless-wall; repeat: 3 1"
      visible="true"
    ></a-entity>
    <a-entity
      v-if="allAssetsLoaded"
      data-role="door"
      gltf-model="#door"
      rotation="0 0 0"
      position="0.9 0 1.5"
      scale="1 1.1 1"
      clickable
      animation-mixer="loop:once; timeScale: 0; stopAt: 9000; startAt: 3000"
      event-set__click="event: click; attribute:animation-mixer.timeScale; value:1 ;"
      sound="src: #sound-door; on: click;"
      ></a-entity>
  </a-entity>
</template>