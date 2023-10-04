const showSidebar = ref(true);
const isMouseOverMenu = ref(false);
const menuIcon = computed(() => {
  if (!isMouseOverMenu.value) {
    return "menu";
  }

  if (showSidebar.value) {
    return "left_arrow";
  }

  return "right_arrow";
});

const menuTooltip = computed(() => {
  if (!isMouseOverMenu.value) {
    return "";
  }

  if (showSidebar.value) {
    return "사이드바 닫기";
  }

  return "사이드바 열기";
});

const useNav = () => {
  const toggle = () => {
    console.log("toggle clicked");

    showSidebar.value = !showSidebar.value;
  };

  const mouseOver = () => {
    isMouseOverMenu.value = true;
  };

  const mouseLeave = () => {
    isMouseOverMenu.value = false;
  };

  return {
    showSidebar,
    menuIcon,
    menuTooltip,
    toggle,
    mouseOver,
    mouseLeave,
  };
};

export default useNav;
