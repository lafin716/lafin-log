<script setup lang="ts"></script>

<template>
  <div class="content-wrap">
    <div class="content-header">
      <h2 class="title">HTML의 기초</h2>
      <span class="created">2023.10.04 12:34:45</span>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.content-wrap {
  @apply w-full;
}

.content-wrap .content-header {
  @apply flex flex-col justify-center items-center;
  background-color: tomato;
  height: 20rem;
}

.content-wrap .content-header .title {
  font-size: 35pt;
  color: #fff;
}

.content-wrap .content-header .created {
  font-size: 15pt;
  color: #fff;
}
</style>
