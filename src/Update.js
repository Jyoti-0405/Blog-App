import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectAllUsers } from "./usersSlice";
import { deletePost, selectPostById, updatePost } from "./postsSlice";



function Update(){
    const {id} = useParams();
    const users = useSelector(selectAllUsers);
    const post = useSelector((state)=> selectPostById(state, Number(id)));
    const navigate = useNavigate()

    const [utitle, setTitle] = useState(post?.title);
    const [ubody, setBody] = useState(post?.body);
    const [userId, setUserId] = useState(post?.id);
    const dispatch = useDispatch();
    const onSave = [id, utitle, ubody].every(Boolean);
    const handleUpdate = (event)=>{
        event.preventDefault();
        if(onSave){
            try{
                dispatch(updatePost({
                    id: id,
                    title: utitle,
                    body: ubody,
                }))
                console.log("Inside updatePost")
                setTitle('')
                setBody('')
                navigate(`/`)
            }catch(err){
                console.log('Post Not Saved!!', err)
            }
        }       
    }
    const handleDelete = ()=> {
        console.log("Inside handle delete")
        try {
            dispatch(deletePost({id : post.id}))
            setTitle('')
            setBody('')
            navigate('/')
    
        }catch(err){
            console.error("Could not delete post");
        }  
     }
    
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-500 border bg-secondary text-white p-5">
                <h3>Update Post</h3>
                <form >
                <div>
                        <label htmlFor="id">Id</label>
                        <input type="text" name="Id" className="form-control"
                        value={userId} readOnly/>
                    </div>
                    <div>
                        <label htmlFor="title"> Title </label>
                        <input type="text" name="Title" className="form-control" placeholder="Title for your post"
                        value={utitle} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="body"> Content </label>
                        <textarea type="text" name="Body"  rows="5" cols="50" className="form-control" placeholder="Whats On your mind..."
                        value={ubody} onChange={e => setBody(e.target.value)}></textarea>
                    </div><br/>
                    <button onClick={handleUpdate} className="btn btn-info">Update</button>
                    <button onClick={handleDelete} className="btn btn-sm btn-danger ms-2" >Delete</button>
                </form>
            </div>
           </div>
    )
}

export default Update