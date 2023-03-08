<script setup>
import { ref } from "vue";

defineProps({
  rotation: String,
  position: String,
  scale: String,
  allAssetsLoaded: false,
  safeRoom: Boolean,
});

let textGameOver = ref("Game Over \n Press the button to be free");
let nbClick = 0;

function changeText() {
  if (nbClick == 0 || nbClick == 1) {
    textGameOver.value = "Kidding, you're doomed";
  } else if (nbClick == 2) {
    textGameOver.value = "Stop pressing, it won't change anything...";
  } else if (nbClick == 3) {
    textGameOver.value = "Come on, you don't have something to do ? ";
  } else if (nbClick == 4) {
    textGameOver.value = "Auto explode in 3... 2... 1... ";
    setTimeout(function () {
      textGameOver.value = "Lol, I don't have time to make the game explode. ";
    }, 1500);
  } else if (nbClick == 5) {
    textGameOver.value = "No more ideas. But keep on clicking";
  } else if (nbClick == 10) {
    textGameOver.value = "Yeah, continue...";
  } else if (nbClick == 15) {
    window.location.href = "https://www.youtube.com/watch?v=rSimk1i72J8";
  }
  nbClick++;
  setTimeout(function () {
    document.querySelector("#game-over-button").emit("unclick");
  }, 600);
}

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
    <a-entity
      geometry="primitive: plane; height: 3; width: 2"
      position="0 0.01 -0.65"
      rotation="-90 0 0"
      data-role="nav-mesh"
      visible="true"
      material="color: #e2e2e2"
    ></a-entity>
    <a-entity position="0 0 -2">
      <a-entity
        :text="`value: ${textGameOver}; 
          align: center;
          width: 2.5;`"
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
        id="game-over-button"
        @click="changeText()"
        material="color: crimson"
        height="0.05"
        radius="0.05"
        rotation="0 0 0"
        position="0 1.21 0"
        animation__onclick="property:position; to:0 1.198 0; startEvents:click; dur: 400;"
        animation__onunclick="property:position; to:0 1.21 0; dur: 400; startEvents:unclick;"
      ></a-cylinder>
    </a-entity>

    <a-sphere
      position="0 1.5 0"
      radius="7"
      material="side: double; color: black"
    >
    </a-sphere>
  </a-entity>
</template>