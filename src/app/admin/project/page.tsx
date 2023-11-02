'use client'
import React from "react";
import {useFormik} from 'formik';
import '../admin.css'
const initialValues = {
  title:'',
  description:'',
  img_url:'',
  project_url:''
}
export default function Page() {
  const {handleSubmit,handleChange,values} = useFormik({
    initialValues,
    onSubmit:(values)=>{
      console.log(values);
    }
  });
  return (
    <div className="project">
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter title" value={values.title} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea rows={5} id="description" name="description" placeholder="Type description" value={values.description} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="img_url">Image url</label>
          <input type="text" id="img_url" name="img_url" placeholder="Enter img url" value={values.img_url} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="project_url">Project url</label>
          <input type="text" id="project_url" name="project_url" placeholder="Enter url" value={values.project_url} onChange={handleChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
