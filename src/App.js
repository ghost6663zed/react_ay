import React, {useState} from 'react';
import Counter from "./components/counter";
function App() {
    const [value, setValue] = useState('text in inputs')
    // console.log(count)
    // console.log(setCount)




    return (
    <div className="App">
       <Counter/>
        <Counter/>
        <Counter/>
    </div>
  );
}

export default App;
