import React from "react";
import { Root, Row } from "./styles";

const nav = [
  {
    id: 1,
    label: 'Каталог'
  },
  {
    id: 2,
    label: 'Корзина'
  }
]
const listItems = nav.map((item) =>
  <li key={ item.id }>
    { item.label }
  </li>
);

const Nav = () => {
  return (
    <Root>
      <Row>
        { listItems }
      </Row>
    </Root>
  )
}

export default Nav;
