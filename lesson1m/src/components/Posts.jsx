import React, {useEffect, useState} from 'react';
import axios from "axios";

const Posts = () => {
    const  [posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/posts')
            .then((response)=>{
                setPosts(response.data.posts)
                console.log(response.data.posts)
            })
            .catch((err) =>{
                console.error("ошибка", err)
            })
    },[])



    return (
        <div>
          <h1>Посты</h1>
          <ul>
              {posts.map((post) =>(
                  <li>{post.title}</li>
              ))}
          </ul>
        </div>
    );
};

export default Posts;