import {Menu} from "semantic-ui-react";
import {useRouter} from "next/router";
import React from "react";

const Gnb = () => {
  const router = useRouter();

  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  }

  const goLink = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    if (button.name === "home") {
      router.push("/");
    } else if (button.name === "about") {
      router.push("/about");
    }
  }

  return (
      <Menu inverted>
        <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={ () => router.push("/")}
        />
        <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={ () => router.push("/about")}
        />
        <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
        />
      </Menu>
  )
}

export default Gnb
