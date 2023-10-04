<script setup lang="ts">
import { messages } from "@/datas/error.data";
const props = defineProps({
  error: Object,
});

const errorMessage = computed(() => {
  return messages[props.error.statusCode] ?? "알 수 없는 오류에요!";
});
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="error-wrap">
    <span class="status-code">{{ error!.statusCode }}</span>
    <span class="msg">{{ errorMessage }}</span>
    <button class="btn-go-home" @click="handleError">메인으로 이동</button>
  </div>
</template>

<style scoped>
.error-wrap {
  @apply w-full h-screen flex flex-col justify-center items-center;
}

.status-code {
  @apply text-6xl;
}

.msg {
  @apply text-4xl;
}

.btn-go-home {
  @apply text-2xl rounded px-4 py-1 mt-5;
  background: rgb(0, 139, 139, 0.5);
  color: #fff;
}
</style>
