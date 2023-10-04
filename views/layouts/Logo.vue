<script setup lang="ts"></script>
<template>
  <NuxtLink to="/">
    <div class="logo-wrap">
      <Icon name="logo" color="green" size="30" />
      <h2 class="logo-text">Lafin's Log</h2>
    </div>
  </NuxtLink>
</template>
<style scoped>
.logo-wrap {
  @apply flex flex-row justify-center items-center my-2;
  height: 40px;
}

.logo-text {
  @apply mx-2;
  font-family: "Sacramento";
  font-weight: 100;
  color: green;
  font-size: 15pt;
}
</style>
