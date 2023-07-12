import React from "react";
import MyButton from "./UI/button/MyButton";

function Posts(props) {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.postId}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__button">
                <MyButton onClick={() => props.remove(props.post)}>Dell post</MyButton>
            </div>
        </div>
    );
}

export default Posts;