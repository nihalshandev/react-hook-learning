import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Somting went wrong!",
      };
    default:
        return state
  }
};
const DataFetchingTow = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(()=> {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(err => {
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])
    const {post, loading, error} = state
  return <div>
      <h4>{loading ? 'Loading....' : post.title}</h4>
      <h4>{error ? error : null}</h4>
  </div>;
};

export default DataFetchingTow;
