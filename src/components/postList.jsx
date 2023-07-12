import React from "react";
import Posts from "./posts";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function PostList({ posts, title, remove, loading }) {
    if (loading) {
        console.log("Loading..")

        return <h1 style={{textAlign: "center", marginTop: '20px'}}>Loading...</h1>;
    };

    if (!posts.length) {
        console.log("post not found")
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
                                <Posts remove={remove} postId={index + 1} post={post}/>
                              </CSSTransition>
                    
                    )}
                </TransitionGroup>
                    
                
        </div>
    );
}

export default PostList;