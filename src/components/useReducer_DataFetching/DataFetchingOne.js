import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DataFetchingOne = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    useEffect(()=> {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(err => {
            setLoading(false)
            setPost({})
            setError("Somthing went wrong!")
        })
    })
    return (
        <div>
            <h4>{loading ? "Loading...." : post.title}</h4>
            <h4>{error ? error : null}</h4>
        </div>
    )
}

export default DataFetchingOne
