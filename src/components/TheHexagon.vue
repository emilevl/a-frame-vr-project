<script setup>
  import '../aframe/emit-when-near';
  import '../aframe/event-set';
  import '../aframe/clickable';

  import { randomHsl } from '../utils/color.js';
  import { ref } from 'vue';

  defineProps({
    scale: Number,
    color: String,
  });

  const randomColor = ref(randomHsl());

  
  AFRAME.registerPrimitive('a-hexagon', {
  // Attaches the `hexagon` component by default.
  // Defaults the hexagon to be parallel to the ground.
  defaultComponents: {
      size: Number,
      color: String,
      cellsize: Number,
      height: Number,
      rotation: {x: -90, y: 0, z: 0}
    },
    // const vertices = new THREE.Vector2( 0, 1 );

  // Maps HTML attributes to the `hexagon` component's properties.
  mappings: {
    size: "hexagon.size",
    color: "hexagon.color",
    cellsize: "hexagon.cellsize",
    height: "hexagon.height",
    rotation: {x: -90, y: 0, z: 0}
  }

});

</script>

<template>
  <a-box
    :scale="`${scale} ${scale} ${scale}`"
    :material="`color: ${color}`"
    clickable
    emit-when-near="event: change-color; eventFar: reset-color; distance: 2.5"
    event-set__near="event: change-color; attribute: material.color; value: blue;"
    :event-set__click="`event: click; attribute: material.color; value: ${randomColor};`"
    :event-set__far="`event: reset-color; attribute: material.color; value: ${color};`"
    @click="randomColor = randomHsl()"
  ></a-box>
</template>