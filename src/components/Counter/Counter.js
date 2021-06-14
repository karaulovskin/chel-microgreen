import React, { useState } from "react";

const Counter = () => {
  const [isCounter, setCounter] = useState(0)

  const increment = () => {
    setCounter((s) => {
      return s + 1
    })
  }
  const decrement = () => {
    if (isCounter === 0) return
    setCounter((s) => {
      return s - 1
    })
  }

  return (
    <div>
      <div>Counter: {isCounter}</div>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Удалить</button>
    </div>
  )
}

export default Counter;