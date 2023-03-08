<script setup>
import { ref } from "vue";

defineProps({
  loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
  showOnboarding.value = false;
  if (
    AFRAME.utils.device.checkHeadsetConnected() &&
    !AFRAME.utils.device.isMobile()
  ) {
    document.querySelector("a-scene").enterVR();
  }
}
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>Escape room</h1>
      <p id="text-intro">
        The game is an escape room based on the series "Alice in Borderland", in
        the first episode. It has been adapted to make the puzzle solving more
        "realistic" than in the series. The principle is to get out of the floor
        by choosing the right doors among the different doors in each room. To
        help you, you can analyse the map in the lift. But beware: a timer is
        running (on your left wrist). - When the time runs out, you die. -
        Entering the wrong room: you die. You have 35 seconds per room.
      </p>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Start</button>
      <div class="licences">
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank"
              >aframe-extras controls and animation-mixer</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a
              href="https://github.com/jure/aframe-blink-controls/"
              target="_blank"
              >aframe-blink-controls</a
            >
          </dt>
          <dd>
            <a
              href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE"
              target="_blank"
              >MIT License</a
            >
          </dd>

          <dt>
            <a
              href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
              target="_blank"
              >simple-navmesh-constraint</a
            >
          </dt>
          <dd>By Ada Rose Cannon under MIT License</dd>

          <dt>
            <a
              href="https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e"
              target="_blank"
              >VR Gallery</a
            >
          </dt>
          <dd>
            by
            <a href="https://sketchfab.com/mvrc.art" target="_blank"
              >Maxim Mavrichev</a
            >
            under
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >CC BY 4.0</a
            >
          </dd>

          <dt>
            <a href="https://skfb.ly/oCVrJ" target="_blank"
              >Elevator - Low Poly Animated</a
            >
          </dt>
          <dd>
            "Elevator - Low Poly Animated" by JeffK is licensed under Creative
            Commons Attribution
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >CC BY 4.0</a
            >
          </dd>

          <dt>
            <a href="https://skfb.ly/6zyTG" target="_blank">Door</a>
          </dt>
          <dd>
            "Door" by inter_net is licensed under Creative Commons Attribution
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >CC BY 4.0</a
            >
          </dd>

          <dt>
            <a href="https://skfb.ly/osJTH" target="_blank">Russian Poster 1</a>
          </dt>
          <dd>
            "Russian Poster 1" by Euphoria Collective is licensed under Creative
            Commons Attribution
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              >CC BY 4.0</a
            >
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
}
a {
  color: #eee;
  text-decoration: none;
}
.licences {
  margin: 2rem 0;
  font-size: 1rem;
  text-align: left;
}
.licences dt {
  padding-top: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
}
.licences dd {
  margin-left: 0;
  font-size: 0.8rem;
}

#onboarding {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
  color: #ccc;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  font-family: monospace;
  z-index: 10000;
  overflow: auto;
}
#onboarding > * {
  margin: 0 auto;
  max-width: 50rem;
  width: calc(100vw - 10rem);
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1.3rem;
}
#onboarding button {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
}

#onboarding #text-intro {
  text-align: left;
}
</style>