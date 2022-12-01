import React, {useState} from 'react';
import Counter from "./components/counter";
import ClassCounter from "./components/ClassComponent";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState( [
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},

    ])


    const [posts1, setPosts1] = useState( [
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},

    ])

    return (
        <div className="App">
           <PostList posts={posts} title = "список постов 0"/>
           <PostList posts={posts1} title = "список постов 1"/>


        </div>

    );
}

export default App;
