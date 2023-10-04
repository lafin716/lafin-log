const showSidebar = ref(true);
const useNav = () => {
  const toggle = () => {
    console.log("toggle clicked");

    showSidebar.value = !showSidebar.value;
  };

  return {
    showSidebar,
    toggle,
  };
};

export default useNav;
