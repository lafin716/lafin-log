import { menuList } from "~/datas/menu.data";

const menus = ref(menuList);

const useMenu = () => {
  return {
    menus,
  };
};

export default useMenu;
