'use client'
import React from 'react'
import {useFormik} from 'formik';
import {socialPost} from '@/helper/apiHelper';
import {useMutation} from '@tanstack/react-query';
import '../admin.css'
const initialValues = {
  github:'',
  instagram:'',
  youTube:''
}
export default function Social() {
  const {mutate,isSuccess} = useMutation({mutationFn:({values}:{values:{github: string; instagram: string; youTube: string; }})=>{
    return socialPost({github:values.github,youtube:values.youTube,instagram:values.instagram});
  }});
  const {handleSubmit,handleChange,values,resetForm} = useFormik({
    initialValues,
    onSubmit:(values)=>{
      mutate({values});
      resetForm();
    }
  });
  return (
    <div className='social'>
        {isSuccess && <p>Done</p>}
        <form method='POST' onSubmit={handleSubmit}>
            <input type="text" placeholder='Github' name="github" id="github"  required value={values.github} onChange={handleChange}/>
            <input type="text" placeholder='Instagram' name="instagram" id="instagram"  required value={values.instagram} onChange={handleChange}/>
            <input type="text" placeholder='youTube' name="youTube" id="youTube"  required value={values.youTube} onChange={handleChange}/>
            <input type="submit" value={'submit'} />
        </form>
    </div>
  )
}
