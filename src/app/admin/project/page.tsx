'use client'
import React from "react";
import {useFormik} from 'formik';
import {project} from '@/helper/apiHelper';
import {useMutation} from '@tanstack/react-query';
import '../admin.css'
const initialValues = {
  title:'',
  description:'',
  img_url:'',
  project_url:''
}
export default function Page() {
  const {mutate,isSuccess,} = useMutation({mutationKey:['add_project'],mutationFn:({title,description,img_url,project_url}:{title:string,description:string,img_url:string,project_url:string})=>{
    return project({title,description,url:project_url,img:img_url})
  }});
  const {handleSubmit,handleChange,values,resetForm} = useFormik({
    initialValues,
    onSubmit:(values)=>{
      const {title,description,img_url,project_url} = values;
      mutate({title,description,img_url,project_url});
      resetForm();
    }
  });
  return (
    <div className="project">
       {isSuccess && <p>Done</p>}
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
          <input type="text" id="img_url" name="img_url" placeholder="https://img.com" value={values.img_url} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="project_url">Project url</label>
          <input type="text" id="project_url" name="project_url" placeholder="https://url.com" value={values.project_url} onChange={handleChange} required/>
        </div>
        <button type="submit">Add project</button>
      </form>
    </div>
  );
}
