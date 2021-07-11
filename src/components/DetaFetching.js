import React, { useState, useEffect } from "react";
import axios from "axios";

const DetaFetching = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1)
  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <p>{post.title}</p>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DetaFetching;
