import React, {useRef, useState} from 'react';
import Counter from "./components/counter";
import ClassCounter from "./components/ClassComponent";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Mybutton from "./components/UI/button/mybutton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState( [
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},

    ])

    const [title, setTitle]= useState('')
    const bodyInputRef = useRef();

    const addNewPost =(e)=> {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)

    }

    return (
        <div className="App">
            <form>
                <MyInput
                    type="text"
                    value={title}
                    onChange={e=> setTitle(e.target.value)}
                    placeholder="название поста"
                />


                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="описание поста"
                />
                <Mybutton onClick={addNewPost}>создать пост</Mybutton>
            </form>
           <PostList posts={posts} title = "список постов "/>

        </div>

    );
}

export default App;
