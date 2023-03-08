<script setup>
import { ref } from "vue";
import "../aframe/teleport-camera-rig.js";
import { timerIsRunning } from '../utils/store.js';

defineProps({
  rotation: String,
  position: String,
  scale: String,
  allAssetsLoaded: false,
  safeRoom: Boolean,
});

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-entity
    :position="position"
    :rotation="rotation"
    :scale="scale"
    data-role="room"
    :data-safe-room="safeRoom"
  >
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
      position="0.9 0.02 0"
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
    <a-entity
      geometry="primitive: plane; height: 3; width: 3"
      position="1.51 1.5 0"
      rotation="0 90 0"
      data-role="nav-mesh"
      material="src: #long-seamless-wall; repeat: 2 2"
      visible="true"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 3; width:1.2"
      position="0.9 1.5 1.5"
      rotation="0 180 0"
      data-role="nav-mesh"
      material="src: #long-seamless-wall; repeat: 2 2"
      visible="true"
    ></a-entity>
    <a-box
      width="0.25"
      height="1.2"
      depth="0.25"
      position="0.9 0.6 1.2"
      material="color: #4a4a4a"
    >
    </a-box>
    <a-cylinder
      clickable
      teleport-camera-rig="
        x: 20;
        y: 0;
        z: 15;
      "
      @click="timerIsRunning=false"
      material="color: crimson"
      height="0.05"
      radius="0.05"
      rotation="0 0 0"
      position="0.9 1.21 1.2"
      animation__onclick="property:position; to:0.9 1.20 1.2; startEvents:click"
    >
    </a-cylinder>

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
  </a-entity>
</template>