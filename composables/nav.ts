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
    toggle,
    mouseOver,
    mouseLeave,
  };
};

export default useNav;
