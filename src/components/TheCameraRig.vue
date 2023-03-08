<script setup>
  import { ref, onMounted } from 'vue';
  import '../aframe/disable-in-vr';
  import '../aframe/hide-in-vr';
  import '../aframe/simple-navmesh-constraint';
  import '../aframe/blink-controls';
  import '../aframe/game-system';


    // update secondsRemaining every second
    // const countdown = () => {
    //   secondsRemaining.value--
    // }

    // onMounted(() => {
    //   setInterval(countdown, 1000)
    // })
</script>

<template>
  <a-entity
    id="camera-rig"
    movement-controls="camera: #head;"
    disable-in-vr="component: movement-controls;"
    sound="src: #sound-ambient-music; autoplay: true; loop: true;"
  >
  <!-- <a-sound
    src="src: url(/assets/Devoid_ELPHNT.mp3)" autoplay="true" position="0 0 0">
  </a-sound> -->
  

      <a-entity
        id="head"
        look-controls="pointerLockEnabled: false"
        simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65;"
        disable-in-vr="component: simple-navmesh-constraint;"
        camera
        position="0 1.65 0"
      >
        <a-entity
          geometry="primitive: circle; radius: 0.0003;"
          material="shader: flat; color: white;"
          cursor
          raycaster="far: 2; objects: [clickable]; showLine: false;"
          position="0 0 -0.1"
          disable-in-vr="component: raycaster; disableInAR: false;"
          hide-in-vr="hideInAR: false"
        ></a-entity>
      <!-- <a-box
        width="0.1"
        height="0.01"
        depth="0.1"
        position="-0.3 -0.1 -0.5"
        rotation="90 0 0"
        material="color: black">
        <a-entity 
        rotation="-90 0 0"
        text="
        value: 60 seconds;
        wrapCount: 60;
        width: 1.5;"
        id="countdown"
        position="0 0 0"
        >
        </a-entity>
      </a-box> -->
    </a-entity>

      <a-entity
        id="hand-left"
        hand-controls="hand: left"
        blink-controls="
          cameraRig: #camera-rig;
          teleportOrigin: #head;
          collisionEntities: [data-role='nav-mesh'];
          snapTurn: false;
        "
        sound="src: #sound-ticking-clock; on: time-almost-out;"
      >
      <a-entity
          geometry="primitive: plane; width: 0.1; height: 0.05"
          material="color: black"
          text="value: 60 seconds;
              wrapCount: 30;
              align: center;
              color: red;
              width: 0.25"
          id="countdown"
          position="-0.03 0.00 0.16"
          rotation="-360 -80 190"
          ></a-entity>
      <!-- <a-entity 
      :text="`
      value:Hello;
      wrapCount: 3;
      width: 1;`"
      position="0 0 0"
      >
      </a-entity> -->
      <!-- <a-sound
      src="src: url(/assets/clock_ticking.mp3)" autoplay="true" loop="true" position="0 0 0">
      </a-sound> -->
    </a-entity>

      <a-entity
        id="hand-right"
        hand-controls="hand: right"
        laser-controls="hand: right"
        raycaster="far: 1; objects: [clickable]; showLine: true;"
      ></a-entity>

  </a-entity>
</template>