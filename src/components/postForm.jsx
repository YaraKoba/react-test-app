import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

function PostForm({ create }) {
    const [inputPost, setInputPost]= useState({title: '', body: '', });

    const addNewPost = (event) => {
        event.preventDefault()
    
        const newPost = {...inputPost, id: Date.now()}
        create(newPost)
        setInputPost({title: '', body: ''})
    
      }
    return (
        <form>
            <MyInput type="text" placeholder="name post" value={inputPost.title} onChange={event => setInputPost({...inputPost, title: event.target.value})}/>
            <MyInput type="text" placeholder="content post" value={inputPost.body} onChange={event => setInputPost({...inputPost, body: event.target.value})}/>
            <MyButton onClick={addNewPost}>Add post</MyButton>
        </form>
    );
}

export default PostForm;