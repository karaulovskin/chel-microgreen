import React from "react";
import { Root, Row } from "./styles";

const nav = [
  {
    label: 'Каталог'
  },
  {
    label: 'Корзина'
  }
]

const list = nav.map((item, index) =>
  <li key={ `${index}_${item.label}`}>
    { item.label }
  </li>
);

const Nav = () => {
  return (
    <Root>
      <Row>
        { list }
      </Row>
    </Root>
  )
}

export default Nav;
