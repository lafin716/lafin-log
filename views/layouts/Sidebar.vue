<script setup lang="ts">
import useMenu from "~/composables/menu";

const { menus } = useMenu();
</script>
<template>
  <ul class="sidebar-wrap">
    <li
      v-for="(item, index) in menus"
      :class="{ active: item.active }"
      :key="index"
    >
      <div class="title-wrap" @click="item.active = !item.active">
        <div class="text-wrap">
          <Icon :name="item.icon" size="20" />
          <span class="title">{{ item.title }}</span>
          <span class="count">{{ item.count }}</span>
        </div>

        <div class="title-arrow">
          <Icon name="ic:sharp-keyboard-arrow-right" size="18" />
        </div>
      </div>
      <template v-if="item.submenu">
        <div class="submenu">
          <ul>
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
              <Icon name="ph:leaf-duotone" size="15" />
              <span class="subtitle">{{ subItem.title }}</span>
              <span class="count">{{ subItem.count }}</span>
            </li>
          </ul>
        </div>
      </template>
    </li>
  </ul>
</template>
<style scoped>
.count {
  @apply rounded-full;
  border: 1px solid rgb(0, 139, 139, 0.7);
  color: rgb(0, 139, 139, 0.7);
  font-size: 10pt;
  padding: 0rem 0.4rem;
}

.sidebar-wrap {
  @apply px-2 py-2;
  position: relative;
}

.sidebar-wrap li {
  @apply my-2 cursor-pointer rounded;
  color: rgb(0, 139, 139, 1);
}

.sidebar-wrap > li .title-wrap {
  @apply rounded;
}

.sidebar-wrap > li.active .title-wrap {
  background: rgb(0, 139, 139, 0.5);
  color: #fff;
}

.sidebar-wrap li .title-wrap {
  @apply w-full px-2 py-2 rounded-sm flex flex-row justify-between items-center;
}

.sidebar-wrap li .title-wrap .text-wrap {
  @apply flex items-center;
  font-size: 15pt;
}

.sidebar-wrap li .title-wrap .text-wrap .title {
  @apply mx-2;
}

.sidebar-wrap li .submenu {
  @apply px-2 pb-2;
  width: 100%;
  display: none;
  box-sizing: border-box;
}

.sidebar-wrap li .submenu .subtitle {
  @apply mx-2;
  font-size: 13pt;
}

.sidebar-wrap li .submenu li {
  @apply rounded-sm py-1 px-2 flex justify-start items-center;
}

.sidebar-wrap li .submenu li:hover {
  background: rgb(0, 139, 139, 0.5);
  color: #fff;
}

.sidebar-wrap li .title-arrow {
  transition: all 0.2s;
}

.sidebar-wrap li.active .submenu {
  display: block;
}

.sidebar-wrap li.active .title-arrow {
  transform: rotate(90deg);
}
</style>
