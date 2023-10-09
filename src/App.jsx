import RedButton from "./RedButton.jsx"
import Counter from "./Counter.jsx"

function App() {
  let today = new Date().toDateString()

  return (
    <div>
      <h1>Today is {today}</h1>
      <p>My First React App</p>
      {/* <RedButton message='Click Here' newClass='blueButton'/>
      <RedButton message='This is a red button' newClass='redButton'/> */}
      <Counter initialCount={1}/>
    </div>
  )
}

export default App