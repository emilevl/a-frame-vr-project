<script setup>
</script>

<template>
    <a-entity>
        <a-entity
            geometry="primitive: plane; height: 1; width: 3"
            position="0 2.5 0"
            rotation="0 0 0"
            data-role="nav-mesh"
            material="color: yellow"
            visible="true"
          ></a-entity>
          <a-entity
            geometry="primitive: plane; height: 3; width: 0.8"
            position="-1.1 1.5 0"
            rotation="0 0 0"
            data-role="nav-mesh"
            material="color: yellow"
            visible="true"
          ></a-entity>
          <a-entity
            geometry="primitive: plane; height: 3; width: 0.8"
            position="1.1 1.5d 0"
            rotation="0 0 0"
            data-role="nav-mesh"
            material="color: yellow"
            visible="true"
          ></a-entity>
    </a-entity>
</template>
