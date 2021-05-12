import s from './PlantaeList.module.scss';
import image from "../../images/01.jpg";

import React from "react";

const PlantaeList = () => {

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
            <li key={item.id} className={s.item}>
                <img src={item.url} />
            </li>
        )
    );

    return (
        <div className={s.root}>
            <ul className={s.list}>
                {list}
            </ul>
        </div>
    )
}

export default PlantaeList;