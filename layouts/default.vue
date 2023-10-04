<script setup lang="ts">
import Logo from "@/views/layouts/Logo.vue";
import Sidebar from "@/views/layouts/Sidebar.vue";
import Topbar from "@/views/layouts/Topbar.vue";
import useNav from "~/composables/nav";

useHead({
  title: "Lafin's Log",
});

const { showSidebar } = useNav();

const year = new Date().getFullYear();
</script>
<template>
  <div class="app-container">
    <div class="app-sidebar" :class="{ hide: !showSidebar }">
      <Logo />
      <Sidebar />
    </div>
    <div class="app-content">
      <div class="app-header">
        <Topbar />
      </div>
      <div class="app-body">
        <slot></slot>
      </div>
      <div class="app-footer">© Copyrights {{ year }} lafin</div>
    </div>
  </div>
</template>

<style scoped></style>
