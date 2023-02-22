<script setup> 
import { ref } from "vue";

const allAssetsLoaded = ref(false);
defineProps({
    rotation: String,
    position: String,
  });
</script>

<template>
    <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item  id="door" src="assets/door.glb"></a-asset-item>
      <!-- <a-asset-item  id="elevator" src="assets/elevator_-_low_poly_animated.glb" ></a-asset-item> -->
    </a-assets>

    <a-entity :rotation="rotation" :position="position">
        <a-entity
            geometry="primitive: plane; height: 1; width: 3"
            position="0 2.5 0"
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
