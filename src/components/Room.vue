<script setup>
import ViewDoor from './ViewDoor.vue'
</script>

<template>
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
  <ViewDoor rotation="0 -90 0" position="1.5 0 0"></ViewDoor>
  <ViewDoor rotation="0 180 0" position="0 0 1.5"></ViewDoor>
  <!-- <ViewDoor rotation="0 -90 0" position="0 0 0"></ViewDoor> -->
  
</template>