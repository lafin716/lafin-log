<script setup lang="ts">
useHead({
  title: "Lafin's Log",
});
</script>
<template>
  <div class="app-container">
    <div class="app-sidebar">sidebar</div>
    <div class="app-content">
      <div class="app-header">header</div>
      <div class="app-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
