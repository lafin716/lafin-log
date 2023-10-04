<script setup lang="ts"></script>

<template>
  <div class="content-wrap">
    <div class="content-header">
      <h2 class="title">HTML의 기초</h2>
      <div class="info-box">
        <span class="writer">
          <Icon name="mdi:account-circle-outline" size="15" />
          lafin
        </span>
        <span class="created">
          <Icon name="material-symbols:edit-calendar-outline" size="15" />
          2023.10.04 12:34:45
        </span>
        <span class="viewcount">
          <Icon name="ic:outline-remove-red-eye" size="15" />
          123
        </span>
      </div>
    </div>
    <div class="content-body">
      <slot />
    </div>
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

.info-box {
  @apply flex flex-row;
}

.writer,
.created,
.viewcount {
  @apply mx-2;
  font-size: 15pt;
  color: #fff;
}

.content-body {
  @apply px-4 py-2;
  font-size: 20pt;
}
</style>
