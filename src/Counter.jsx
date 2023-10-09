import { useState } from "react";
import RedButton from "./RedButton";

const data = [
  {
    message: 'hello',
    number: 1
  },
  {
    message: 'second',
    number: 6
  },
  {
    message: 'Last one',
    number: 100
  }
]

function Counter(props) {
  const [count, setCount] = useState(props.initialCount)

  const incrementCount = (num) => {
    setCount(count + num)
  }

  const buttons = data.map(button => {
    return <RedButton key={button.message} message={button.message} incrementCount={incrementCount} number={button.number}/>
  })

  return (
    <div>
      <div>{count}</div>
      {buttons}
    </div>
  )
}

export default Counter