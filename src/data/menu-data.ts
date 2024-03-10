interface MenuItem {
  id: number;
  hasDropdown?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: any[];
  pages?: boolean;
}

const mobile_menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    title: "Home",
    pluseIncon: true,
    link: "/"
  },
  {
    id: 2,
    hasDropdown: false,
    title: "How to",
    link: "/course-grid",
    pluseIncon: true
  },

  {
    id: 3,
    hasDropdown: false,
    title: "About",
    link: "/blog",
    pluseIncon: true
  },
  {
    id: 4,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  }
];

export default mobile_menu_data;
