import React from "react";
import { Root, List, Item, ItemInner, Img } from "./styles";
import image from "../../images/01.jpg";

const Catalog = () => {

    const data = [
        {id: '1', url: image},
        {id: '2', url: image},
        {id: '3', url: image},
        {id: '4', url: image},
        {id: '5', url: image},
        {id: '6', url: image},
        {id: '7', url: image},
        {id: '8', url: image},
    ]

    const list = data.map(
        item => (
            <Item key={item.id}>
                <ItemInner>
                    <Img src={item.url} />
                    <div>
                        <div>Редис Санго</div>
                    </div>
                    <div>
                        <span>Цена:</span>
                        <span>150 руб.</span>
                    </div>
                </ItemInner>
            </Item>
        )
    );

    return (
        <Root>
            <List>
                { list }
            </List>
        </Root>
    )
}

export default Catalog;