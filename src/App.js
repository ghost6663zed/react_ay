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
 import PostFilter from "./components/ PostFilter";

function App() {
    const [posts, setPosts] = useState( [
        {id: 1, title: 'аа', body: 'бб'},
        {id: 2, title: 'бб 2', body: 'ии'},
        {id: 3, title: 'яя 3', body: 'дд'},

    ])
    const [filter, setFilter] = useState({sort:'', query:''})


    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;

    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))

    }, [filter.query, sortedPosts])


    // const sortedPosts = getSortedPosts()
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !==post.id))
    }



    return (
        <div className="App">
            <PostForm create = {createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
            filter={filter}
            setFilter={setFilter}
            />
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
