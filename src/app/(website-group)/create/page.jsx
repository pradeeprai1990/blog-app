"use client"
import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { app } from '@/app/config/firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
export default function page() {

  const db = getDatabase(app);
  let saveBlog=(event)=>{
    let blogId=Date.now() //    
    event.preventDefault();
    let heading=event.target.heading.value;
    let desciption=event.target.desciption.value;
    let obj={heading,desciption}
    set(ref(db,"blogs/"+blogId),obj)
 
    toast.success("Blog Added Successfully")
    event.target.reset();

  }
  
//   let saveBlog=(event)=>{
//     let blogId=Date.now() //    
//     event.preventDefault();
//     let heading=event.target.heading.value;
//     let desciption=event.target.desciption.value;
//     let obj={heading,desciption}
//     set(ref(db,"blogs/"+blogId),obj)
//     toast.success("Blog Added Successfully")
//     event.target.reset();

//   }     
  return (
    <div>
        <ToastContainer />

      <div class="w-full  	 text-2xl mx-auto px-2  md:max-w-[1400px] ">
   <div class="lg:mx-auto rounded-lg p-4 px-2  my-8" >
      <form onSubmit={saveBlog}>
         <label for="heading" class="block my-4 md:text-lg text-sm font-medium text-gray-900">Heading</label>
         
       

         <input type="text" name="heading" rows="4" class="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."/><label for="desciption" class="block my-4 text-sm md:text-lg font-medium text-gray-900">Desciption</label>
         <textarea name="desciption" class="block min-h-[300px] mt-4 p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."/>
         <div class="text-center"><button type="submit" class="transform  w-[40%] rounded-md mt-10  bg-[black] text-white py-2 font-bold duration-300 hover:bg-[#4B0082] ">Add Blog</button></div>
      </form>
   </div>
   <div></div>
</div>
    </div>
  )
}
