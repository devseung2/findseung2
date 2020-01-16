import React from "react";
import "../css/Header.scss";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// 메뉴 목록
const MENU: { id: number; name: string; href: string }[] = [
  {
    id: 0,
    name: "HOME",
    href: "#home"
  },
  {
    id: 1,
    name: "ABOUT",
    href: "#about"
  },
  {
    id: 2,
    name: "SKILLS",
    href: "#skills"
  },
  {
    id: 3,
    name: "PROJECTS",
    href: "#projects"
  },
  {
    id: 4,
    name: "CONTACT",
    href: "#contact"
  }
];

function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div id="menu">
      <AppBar position="fixed">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          className="nav-background-color"
          centered
        >
          {MENU.map(menu => (
            <Tab label={menu.name} href={menu.href} key={menu.id} />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
}

export default Header;
