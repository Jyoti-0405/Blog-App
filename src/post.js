import { useSelector } from "react-redux/es/hooks/useSelector"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { selectAllPosts } from "./postsSlice";
import LikeButton from "./Like";
import {useDate} from "./DateContext";


const Post = ({ }) => {
    let userPost = useSelector(selectAllPosts)
    const { postDate, setPostDate} = useDate();
    const arr = [];
    userPost.forEach(element => {
        arr.push(element);
    });
   arr.reverse()
   
    return (
        <div className="container">
            <Link to='/create'>
                <button className="btn btn-success my-3">New Post</button>
            </Link>
            {arr.map((post, index) => (
            <div className="card" >
                <div className="card-body">
                        <div key={index}>
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <div className="d-flex p-2">
                                <Link to={`edit/${post.id}`} className="btn btn-sm btn-primary">View Details</Link>
                                <LikeButton />
                            </div>
                            <p>Added on : {postDate}</p>
                            <button className="btn btn-primary" onClick={setPostDate}>Set Post Date</button>
                        </div>
                </div>
            </div>
            ))}
        </div>
    )
}
export default Post