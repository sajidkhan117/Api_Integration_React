


import React,{useEffect, useState} from 'react'; 
import axios from 'axios';
const AxiosData = () => {
    const [post , setPost] = useState([])

    useEffect(()=> {
        fetchPost();
        console.log(post)
    },[post])

     const fetchPost = async ()=> {
         const response = await axios("https://jsonplaceholder.typicode.com/posts/1")
         setPost(response.data)
     }


  return (
    <div>
        <h4>{post.title}</h4>
        <h4>{post.body}</h4>

    </div>
  )
}

export default AxiosData