 import React, {useMemo, useRef, useState} from 'react';
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
        {id: 1, title: 'аа', body: 'бб'},
        {id: 2, title: 'бб 2', body: 'ии'},
        {id: 3, title: 'яя 3', body: 'дд'},

    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')


    const sortedPosts = useMemo(() => {
        if(selectedSort) {
            return [...posts].sort((a, b)=> a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;

    }, [setSelectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))

    }, [searchQuery, sortedPosts])


    // const sortedPosts = getSortedPosts()
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !==post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);


    }

    return (
        <div className="App">
            <PostForm create = {createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value = {searchQuery}
                    onChange = {e =>setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                />

                <MySelect
                    value={selectedSort}
                    onChange={sortPosts }
                    defaultValue="сортировка"
                    options={[
                        {value: 'title', name: 'по названию'},
                        {value: 'body', name: 'по описанию'},

                    ]}
                />
            </div>
            {sortedAndSearchedPosts.length
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title = "список постов "/>
                :
                <h1 style={{textAlign: 'center'}}>
                    посты не найдены
                </h1>

            }

        </div>
    );
}

export default App;
