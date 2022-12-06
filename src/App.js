import React, {useRef, useState} from 'react';
import Counter from "./components/counter";
import ClassCounter from "./components/ClassComponent";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState( [
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},

    ])

    const [selectedSort, setSelectedSort] = useState('')
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !==post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        console.log(sort)

    }

    return (
        <div className="App">
            <PostForm create = {createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="сортировка"
                    options={[
                        {value: 'title', name: 'по названию'},
                        {value: 'body', name: 'по описанию'},

                    ]}
                />
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title = "список постов "/>
                :
                <h1 style={{textAlign: 'center'}}>
                    посты не найдены
                </h1>

            }

        </div>
    );
}

export default App;
