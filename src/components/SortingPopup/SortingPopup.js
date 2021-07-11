import React, { useState, useEffect, useRef } from "react";

const SortingPopup = () => {

  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();

  const handleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  };

  const handleOutsideClick = (e) => {
    console.log(e);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div>
      <div>
        <span>Сортировка по</span>
        <span onClick={handleVisiblePopup}>популярности</span>
      </div>
      {
        visiblePopup &&
        <div>
          <ul>
            <li>популярности</li>
            <li>цене</li>
            <li>алфавиту</li>
          </ul>
        </div>
      }
    </div>
  )
}

export default SortingPopup;