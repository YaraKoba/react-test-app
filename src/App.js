import React, { useEffect, useState } from "react";
import './styles/App.css'
import PostList from "./components/postList";
import PostForm from "./components/postForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePost } from "./hooks/usePost";
import PostService from "./API/PostsService";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({select: '', query: ''});
  const [modal, setModal] = useState(false);
  
  const sortAndSearchPosts = usePost(posts, filter.select, filter.query);
  const [loading, setLoading] = useState(false);

  console.log(loading)

  useEffect(() => {
    console.log("useEffect")
    fetchPosts()
  }, []);

  async function fetchPosts() {
    setLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setLoading(false);
  };
  
  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  };

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
        <MyButton style={{margin: "20px 0 0"}} onClick={() => setModal(true)}>Create post</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
        
        <hr style={{margin: "15px 0"}}></hr>
        <PostFilter 
        filter={filter}
        setFilter={setFilter}
        />
        {loading ? <h1 style={{textAlign: "center", marginTop: '20px'}}>Loading...</h1> : <PostList loading={loading} remove={removePost} posts={sortAndSearchPosts} title='Posts 1'/>}
         

    </div>
  );
}

export default App;
