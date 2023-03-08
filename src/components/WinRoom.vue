<script setup>
import { ref } from 'vue';
import { showWholeGame } from '../utils/store';

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
    
    <a-entity
      geometry="primitive: plane; height: 3; width: 2"
      position="0 0.01 -0.65"
      material="color: #2e2e2e"
      rotation="-90 0 0"
      data-role="nav-mesh"
      visible="true"
    ></a-entity>
      <a-entity
      position="0 0 -2">
        <a-entity 
        text="
          value: Congratulation !
          \n You succeeded the game. See you soon for the next level...
          \n Press the button to see the rooms from a top vision; 
          align: center;
          width: 4;
          "
        position="0 1.75 -1"
        rotation="0 0 0"
        ></a-entity>
        <a-box
        width="0.25"
        height="1.2"
        depth="0.25"
        position="0 0.6 0"
        material="color: #4a4a4a"
        > 
        </a-box>
        <a-cylinder
          clickable
          teleport-camera-rig="
            x: 0;
            y: 6;
            z: 0;
          "
          material="color: crimson"
          height="0.05" 
          radius="0.05"
          rotation="0 0 0"
          position="0 1.21 0"
          ></a-cylinder>
      </a-entity>
      
    <a-sphere
    position="0 1.5 0"
      radius="7"
      material="side: double; color: #e2e2e2"
    >

    </a-sphere>
  </a-entity>
</template>