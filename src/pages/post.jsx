import React, { useEffect, useState } from "react";
import '../styles/App.css'
import PostList from "../components/postList";
import PostForm from "../components/postForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePost } from "../hooks/usePost";
import PostService from "../API/PostsService";
import { useFetching } from "../hooks/useFetching";
import { usePagination } from "../hooks/usePagination";
import Pagination from "../components/UI/Pagination/Pagination";



function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({select: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortAndSearchPosts = usePost(posts, filter.select, filter.query);

  const [totalCount, setTotalCount] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  
  
  const [fetchingPosts, IsLoading, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    setTotalCount(response.headers['x-total-count'])
  }) 

  const paheArray = usePagination(limit, totalCount)

  useEffect(() => {
    fetchingPosts()
  }, [page]);

  function changePage(page) {
    setPage(page);
  }

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  };

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  return (
    <div className="posts">
        <MyButton style={{margin: "20px 0 0"}} onClick={() => setModal(true)}>Create post</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
        
        <hr style={{margin: "15px 0"}}></hr>

        <PostFilter 
          filter={filter}
          setFilter={setFilter}
        />

        <PostList 
          loading={IsLoading}
          error={error}
          remove={removePost} 
          posts={sortAndSearchPosts}
          title='Posts 1'
        />
        <Pagination 
          paheArray={paheArray}
          changePage={changePage}
          page={page}
        />

    </div>
  );
}

export default Posts;
