import React from 'react';

const CreatePost = () => {

    const handleSummit=(e)=>{
        e.preventDefault()
        console.log("Пост создан")
    }

    return (
        <div>
            <h1>Create Post</h1>
            <p>Title:</p>
            <input type="text"/>
            <p>Body:</p>
            <input type="text"/>
            <button type='submit' onClick={handleSummit}>Отправить</button>
        </div>
    );
};

export default CreatePost;