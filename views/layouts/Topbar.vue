<script setup lang="ts">
import useNav from "~/composables/nav";

const { menuIcon, toggle, mouseOver, mouseLeave } = useNav();
</script>
<template>
  <div class="topbar-wrap">
    <div class="topbar-left">
      <Icon
        :name="menuIcon"
        @click="toggle"
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
        class="btn-toggle"
      />
    </div>
    <div class="topbar-center"></div>
    <div class="topbar-right"></div>
  </div>
</template>
<style scoped>
.topbar-wrap {
  @apply flex flex-row justify-between items-center px-3;
  height: 40px;
}

.btn-toggle {
  cursor: pointer;
  color: green;
}
</style>
