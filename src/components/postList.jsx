import React from "react";
import Posts from "./posts";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Loader from "./UI/Loader/Loader";

function PostList({ posts, title, remove, loading, error }) {

    if (loading) {
        return <div style={{display: "flex", justifyContent: "center", marginTop: "100px"}}>
            <Loader />
        </div>;
    };

    if (error) {
        return <h1 style={{textAlign: "center", marginTop: '20px'}}>Server error</h1>
    }

    if (!posts.length) {
        return <h1 style={{textAlign: "center", marginTop: '20px'}}>Posts not found</h1>;
    }; 
    


    return (
        <div className="postList">
            <h1 style={{textAlign: "center", marginTop: '20px'}}>{title}</h1>
                 
                <TransitionGroup>
                {posts.map((post, index) =>
                                <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                              >
                                <Posts remove={remove} postId={post.id} post={post}/>
                              </CSSTransition>
                    
                    )}
                </TransitionGroup>
                    
                
        </div>
    );
}

export default PostList;