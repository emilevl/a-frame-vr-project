<script setup>
  import { isRuntimeOnly, ref, watch } from 'vue';
  import { randomHsl } from '../utils/color.js';
  import '../aframe/grabbable.js';

  import BoxColorChanging from './BoxColorChanging.vue';
  import TheCameraRig from './TheCameraRig.vue';
  import TheNavMesh from './TheNavMesh.vue';
  import TheHexagon from './TheHexagon.vue';
  import Room from './Room.vue';
  import GameOverRoom from './GameOverRoom.vue';
  import TheSmallerWrongRoom from './TheSmallerWrongRoom.vue';
  import TheSmallerRightRoom from './TheSmallerRightRoom.vue';
  import TheFinalRoom from './TheFinalRoom.vue';
  import WinRoom from './WinRoom.vue';
  import MiddleRoom from './MiddleRoom.vue';
  import '../aframe/game-system.js';
  import { showWholeGame } from '../utils/store';

  import '../aframe/life-like-automaton';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const colorBoxLeft = ref(randomHsl());
  const colorBoxRight = ref(randomHsl());
  const allAssetsLoaded = ref(false);
  const showWelcome = ref(true);
  // document.querySelector('#elevator-button').addEventListener('click', function(evt) {
  //       console.log("Ascenceur");
  //       console.log(evt)
  //   });
  const isrunning = ref(false);

  watch(isrunning, (value) => {
    if (value) return;
    document.querySelector("#elevator-button").emit("elevator-closed");
  })

  function updateElevator() {
    const elevator = document.querySelector("#the-elevator");
    // console.log("Ascenceur");
    elevator.emit('open-elevator')
    // const time = Date.time;
    // let dt = time - lastTime;
    if(elevator.hasAttribute("animation-mixer") && !isrunning.value) {
      elevator.removeAttribute("animation-mixer");
    }
    isrunning.value = true;
    elevator.setAttribute("animation-mixer", "loop: once; timeScale:1")
    showWelcome.value = false;

    setTimeout(function () { 
      elevator.components.sound.playSound(); 
    } , 8000)
  }

</script>

<template>
  <!-- <a-scene
    background="color: black;"
    renderer="colorManagement: true;"
    :webxr="`
    requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
      `"
      > -->
      
  <a-scene
      background="color: #87CEEB;"
      renderer="colorManagement: true;"
      stats
      fog="type: linear; color: #a3d0ed; near: 3; far: 25;"
      :game-system="`enabled: ${allAssetsLoaded ? 'true' : 'false'}`"
    >
      
      <a-assets @loaded="allAssetsLoaded = true">
        <!--
          Title: VR Gallery
          Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
          Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
          Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
        -->
        <a-asset-item  id="elevator" src="assets/elevator_-_low_poly_animated.glb" ></a-asset-item>
        <a-asset-item  id="door" src="assets/door.glb"></a-asset-item>
        <!-- <a-asset-item  id="bed-table" src="assets/modern_pyramid_end_table.glb"></a-asset-item> -->
        <a-asset-item  id="poster-wall" src="assets/russian_poster_1.glb"></a-asset-item>
        <img id="long-seamless-wall" src="/assets/long-seamless-wall.jpeg">
        <img id="square-wall" src="/assets/square-wall.jpeg">
        <img id="seamless-floor" src="/assets/seamless-floor.jpeg">
        <img id="floor-map" src="/assets/map-game.jpg">
        <a-asset-item id="sound-door" response-type="arraybuffer" src="assets/Door_Opening_Closing.mp3" preload="auto"></a-asset-item>
        <a-asset-item id="sound-elevator" response-type="arraybuffer" src="assets/Sliding_Glass_Door_Closing.mp3" preload="auto"></a-asset-item>
        <a-asset-item id="sound-ambient-music" response-type="arraybuffer" src="assets/Devoid_ELPHNT.mp3" preload="auto"></a-asset-item>
        <a-asset-item id="sound-ticking-clock" response-type="arraybuffer" src="assets/clock_ticking.mp3" preload="auto"></a-asset-item>
        <!-- <a-asset-item  id="test" src="assets/low_poly_simple_hallway_room.glb"></a-asset-item> -->
      </a-assets>
      <!-- <a-entity light="color: #ffffff; type: directional; intensity: 8" position="-1 1 -8"></a-entity> -->
    <!-- <a-entity light="color: #fff; type: directional; intensity: 2" position="-3 10 8"></a-entity> -->
    <a-entity light="color: #C5C5C5; type: ambient; intensity: 0.5" position="-1 1 -10"></a-entity>
    <!-- <a-entity light="type: ambient; color: #BBB; intensity:0.1"></a-entity> -->
    <!-- <a-entity light="type: directional; color: #FFF; intensity: 0.6" position="-0.5 1 1"></a-entity> -->
    <!-- <a-entity light="color: #87CEEB; type: ambient; intensity: 0.2" position="-1 1 -10"></a-entity> -->

    <a-entity
      geometry="primitive: plane; height: 14; width: 15"
      position="5 6.01 -8"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: blue"
      visible="false"
    >
    </a-entity>
    <a-entity
      geometry="primitive: plane; height: 2; width: 16"
      position="5 6 0"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: #e2e2e2"
      visible="true"
    >
    </a-entity>
    <a-entity
      geometry="primitive: plane; height: 2; width: 16"
      position="5 6 -14"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: #e2e2e2"
      visible="true"
    >
    </a-entity>
    <a-entity
      geometry="primitive: plane; height: 15; width: 2"
      position="-2 6 -7.5"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: #e2e2e2"
      visible="true"
    >
    </a-entity>
    <a-entity
      geometry="primitive: plane; height: 15; width: 2"
      position="12 6 -7.5"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: #e2e2e2"
      visible="true"
    >
    </a-entity>
    <Room position="0 0 -3" rotation="0 90 0" scale="1 0.9 1" :safeRoom="true"></Room>
    <Room position="0 0 -6" rotation="0 90 0" scale="1 0.9 1" :safeRoom="true"></Room>
    <Room position="0 0 -9" rotation="0 90 0" scale="1 0.9 1" :safeRoom="true"></Room>
    <Room position="3 0 -9" rotation="0 0 0" scale="1 0.9 1" :safeRoom="true"></Room>
    <!-- <Room position="3 0 -6" rotation="0 0 0" scale="1 0.9 1" :safeRoom="false"></Room> -->
    <MiddleRoom position="3 0 -6" rotation="0 0 0" scale="1 0.9 1" :safeRoom="false"></MiddleRoom>
    <Room position="6 0 -6" rotation="0 -90 0" scale="1 0.9 1" :safeRoom="true"></Room>
    <Room position="6 0 -9" rotation="0 0 0" scale="1 0.9 1" :safeRoom="true"></Room>
    <Room position="6 0 -3" rotation="0 -90 0" scale="1 0.9 1" :safeRoom="true"></Room>
    <Room position="0 0 -12" rotation="0 90 0" scale="1 0.9 1" :safeRoom="false"></Room>
    <Room position="9 0 -9" rotation="0 0 0" scale="1 0.9 1" :safeRoom="false"></Room>
    <Room position="6 0 0" rotation="0 0 0" scale="1 0.9 1" :safeRoom="false"></Room>
    <TheSmallerWrongRoom scale="1 0.9 1" position="3 0 -3 " :safeRoom="false"></TheSmallerWrongRoom>
    <TheSmallerRightRoom scale="1 0.9 1" position="3 0 -3 " :safeRoom="true"></TheSmallerRightRoom>
    <TheFinalRoom scale="1 0.9 1" position="3 0 0 " :safeRoom="true"></TheFinalRoom>
    <a-entity
    geometry="primitive: plane; height: 2.2; width: 2"
    position="0 0.04 -0.8"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    visible="false"
    >
    </a-entity>
    <!-- <a-entity
      geometry="primitive: plane; width: 4; height: auto"
      position="0 1.5 -1"
      material="color: blue"
      text="value: This text will be 4 units wide."></a-entity> -->
    <a-entity
      v-if="showWelcome"
      text="
        value: Welcome to the game; 
        align: center;
        width: 2.5;
        "
      position="0 2 -1.2"
      rotation="20 0 0"
      >
    </a-entity>
    <a-entity
      v-if="showWelcome" 
      text="
      value:You are on a building room of 6x6 meters, and you will have to choose between different doors in each rooms, until you find the exit.
      \n But careful, take the wrong door, and you'll die.;
      wrapCount: 60;
      width: 1.5;"
      rotation="12 0 0"
      position="0 1.7 -1.25"
      >
    </a-entity>
    <a-entity 
      v-if="showWelcome"
      text="
      value: On your left wrist, you can see the time before you're dead.;
      wrapCount: 60;
      width: 1.5;"
      rotation="5 0 0"
      position="0 1.5 -1.28"
      >
    </a-entity>
    <a-entity 
      v-if="showWelcome"
      text="
      value: To start, check your surrounding. Then, open the lift.;
      wrapCount: 60;
      width: 1.5;"
      rotation="0 0 0"
      position="0 1.4 -1.28"
      >
    </a-entity>
    <a-entity
      geometry="primitive: plane; height: 0.35; width: 0.495"
      position="-1.2 1.69 -0.4"
      rotation="0 90 0"
      data-role="nav-mesh"
      material="src: #floor-map;"
      visible="true"
    ></a-entity>
    <!-- <Room></Room> -->
    <!-- <TheHexagon :scale="scale" color="blue" position="0 0 5"></TheHexagon> -->
    <a-cylinder
    clickable 
    id="elevator-button" 
    @click="updateElevator()"
    material="color: crimson"
    height="0.05" 
    radius="0.05" 
    position="1 1.4 -1.40" 
    rotation="-90 0 0"
    animation__onclick="property:position; to:1 1.4 -1.45; startEvents:click"
    animation__onunclick="property:position; to:1 1.4 -1.4; startEvents:elevator-closed"
    ></a-cylinder>

    <template v-if="allAssetsLoaded">
      <a-entity
        id="the-elevator"
        gltf-model="#elevator"
        rotation="0 180 0"
        position="0 -0.01 -0.46"
        scale="0.7 0.68 0.55"
        @animation-finished="isrunning=false"
        sound="src: #sound-elevator; on: open-elevator; "
      ></a-entity>

      <GameOverRoom position="0 0 10"></GameOverRoom>
      <WinRoom position="20 0 15"></WinRoom>
    </template>

    <TheCameraRig />

  </a-scene>
</template>