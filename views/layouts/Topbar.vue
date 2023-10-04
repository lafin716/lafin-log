<script setup lang="ts">
import useNav from "~/composables/nav";

const { menuIcon, menuTooltip, toggle, mouseOver, mouseLeave } = useNav();
</script>
<template>
  <div class="topbar-wrap">
    <div class="topbar-left">
      <UTooltip
        :ui="{
          wrapper: 'flex justify-center items-center',
        }"
        :popper="{ placement: 'right-start' }"
      >
        <template #text>
          <p class="text-xl mb-2">{{ menuTooltip }}</p>
        </template>
        <Icon
          :name="menuIcon"
          @click="toggle"
          @mouseover="mouseOver"
          @mouseleave="mouseLeave"
          class="btn-toggle"
        />
      </UTooltip>
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
