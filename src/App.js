import React, {useState} from 'react';
import Counter from "./components/counter";
import ClassCounter from "./components/ClassComponent";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {
    const [value, setValue] = useState('text in inputs')
    // console.log(count)
    // console.log(setCount)

    return (
        <div className="App">
            <PostItem post={{id:1, title: 'Javascript', body: 'Description'}} />
            <PostItem post={{id:2, title: 'Javascript', body: 'Description'}} />
            <PostItem post={{id:3, title: 'Javascript', body: 'Description'}} />

        </div>

  );
}

export default App;
