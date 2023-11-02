'use client'
import React from 'react'
import '../admin.css'
import {useFormik} from 'formik';
const initialValues = {
  github:'',
  instagram:'',
  youTube:''
}
export default function Social() {
  const {handleSubmit,handleChange,values} = useFormik({
    initialValues,
    onSubmit:(values)=>{
      console.log(values);
    }
  });
  return (
    <div className='social'>
        <form method='POST' onSubmit={handleSubmit}>
            <input type="text" placeholder='Github' name="github" id="github"  required value={values.github} onChange={handleChange}/>
            <input type="text" placeholder='Instagram' name="instagram" id="instagram"  required value={values.instagram} onChange={handleChange}/>
            <input type="text" placeholder='youTube' name="youTube" id="youTube"  required value={values.youTube} onChange={handleChange}/>
            <input type="submit" value={'submit'}/>
        </form>
    </div>
  )
}
