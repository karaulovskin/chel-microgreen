import React, { useState, useEffect, useRef } from "react";

const SortingPopup = ({ items }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sortRef = useRef();
  const activeLabel = items[activeItem];

  const handleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const handleSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };

  const list = items.map((item, index) => (
    <li
      key={`${index}_${item}`}
      onClick={() => { handleSelectItem(index) }}
    >
      { activeItem === index ? <b>{item}</b> : item }
    </li>
  ))

  return (
    <div ref={sortRef}>
      <div>
        <span>Сортировка по</span>
        <span onClick={ handleVisiblePopup }>{ activeLabel }</span>
      </div>
      {
        visiblePopup &&
        <div>
          <ul>
            { items && list }
          </ul>
        </div>
      }
    </div>
  )
}

export default SortingPopup;