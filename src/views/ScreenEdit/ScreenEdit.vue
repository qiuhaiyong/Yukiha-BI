<template>
  <div class="screen-edit-container">
    <ComponentMenu></ComponentMenu>
    <div class="screen-edit__editor">
      <IndexMenu></IndexMenu>
      <Canvas></Canvas>
      <ConfigMenu></ConfigMenu>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.screen-edit-container {
  .screen-edit__editor {
    display: flex;
  }
}
</style>
