<script setup>
const tmpActive = ref(false);
const openMenu = () => {
  tmpActive.value = !tmpActive.value;
};
</script>
<template>
  <ul class="sidebar-wrap">
    <li :class="{ active: tmpActive }">
      <div class="title-wrap" @click="openMenu">
        <div class="text-wrap">
          <Icon name="tdesign:html5" size="20" />
          <span class="title">폴더1</span>
          <span class="count">12</span>
        </div>

        <div class="title-arrow">
          <Icon name="ic:sharp-keyboard-arrow-right" size="18" />
        </div>
      </div>
      <div class="submenu">
        <ul>
          <li>
            <Icon name="ph:leaf-duotone" size="15" />
            <span class="subtitle">글 1</span>
            <span class="count">123</span>
          </li>
          <li>
            <Icon name="ph:leaf-duotone" size="15" />
            <span class="subtitle">글 2</span>
            <span class="count">0</span>
          </li>
          <li>
            <Icon name="ph:leaf-duotone" size="15" />
            <span class="subtitle">글 3</span>
            <span class="count">789</span>
          </li>
        </ul>
      </div>
    </li>
    <li :class="{ active: tmpActive }">
      <div class="title-wrap" @click="openMenu">
        <div class="text-wrap">
          <Icon name="tdesign:html5" size="20" />
          <span class="title">폴더1</span>
          <span class="count">12</span>
        </div>

        <div class="title-arrow">
          <Icon name="ic:sharp-keyboard-arrow-right" size="18" />
        </div>
      </div>
      <div class="submenu">
        <ul>
          <li>
            <Icon name="ph:leaf-duotone" size="15" />
            <span class="subtitle">글 1</span>
            <span class="count">123</span>
          </li>
          <li>
            <Icon name="ph:leaf-duotone" size="15" />
            <span class="subtitle">글 2</span>
            <span class="count">0</span>
          </li>
          <li>
            <Icon name="ph:leaf-duotone" size="15" />
            <span class="subtitle">글 3</span>
            <span class="count">789</span>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<style scoped>
.count {
  @apply rounded-full;
  border: 1px solid rgb(0, 139, 139, 0.7);
  color: rgb(0, 139, 139, 0.7);
  font-size: 5pt;
  padding: 0.1rem 0.2rem;
}

.sidebar-wrap {
  @apply px-2 py-2;
  position: relative;
}

.sidebar-wrap li {
  @apply my-2 cursor-pointer rounded;
  color: rgb(0, 139, 139, 1);
  font-size: 11pt;
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
