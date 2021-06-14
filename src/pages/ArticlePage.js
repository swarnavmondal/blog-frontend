import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';




const ArticlePage = ({match}) => {
  const id = match.params.id;
const [article, setArticle]= useState('')
const deleteBlogHandler = (x)=>{
  axios.delete(`/blog/${x}`).then(res=>{
   
    });
};

  useEffect(() => {
    axios.get(`/blog/${id}`)
      .then(res => {
        setArticle(res.data);
        console.log(res);
      });
}, [id]);
  const titleRef = useRef();
  const idRef = useRef();
  const contentRef =useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {"title":titleRef.current.value ,
     "content": contentRef.current.value}; 
     let id=idRef.current.value;
     axios.patch(`/blog/${id}`,data).then(res=>{

     });
  };
return (
    <>
    
      <main className="container">
      <form onSubmit={submitHandler}>
      <div>
       <input className="form-control mt-2" type='text' value={article._id} ref={idRef}/></div>
       <div > 
        <input className="form-control mt-2" type="text" placeholder={article.title} ref={titleRef}/></div>
        
      
       < div>
        <textarea className="form-control mt-2" placeholder={article.content} ref={contentRef} /></div>
        <button type="submit" className="btn btn-primary mt-2">Update</button>
        </form>


        <button className="btn btn-danger mt-2 ml-2" onClick={()=>{
          deleteBlogHandler(article._id)
        }}>delete</button>
      

      </main>
    </>
  )
};

export default ArticlePage;
