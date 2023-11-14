import React, { useState } from "react";
import { addNewPost } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Create(){
        const [title, setTitle] = useState('')
        const [body, setBody] = useState('')
        const [userId, setUserId] = useState('')
        const navigate = useNavigate()
        const dispatch = useDispatch();

        const handleSubmit = (event) => {
            event.preventDefault();
            dispatch(addNewPost({userId, title, body}))
            navigate('/')
        }
    
        return (
           <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-500 border bg-secondary text-white p-5">
                <h3>Add New Post</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="id">Id</label>
                        <input type="text" name="Id" className="form-control" placeholder="Enter your user id"
                        onChange={e=> setUserId(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="title"> Title </label>
                        <input type="text" name="Title" className="form-control" placeholder="Title for your post"
                        onChange={e=> setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="body"> Content </label>
                        <textarea type="text" name="Body" rows="5" cols="50" className="form-control" placeholder="Whats On your mind..."
                        onChange={e=> setBody(e.target.value)}></textarea>
                    </div><br/>
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
           </div>
        )
    };
export default Create