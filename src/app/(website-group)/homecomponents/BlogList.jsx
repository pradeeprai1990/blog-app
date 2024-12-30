"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '@/app/config/firebaseConfig';

export default function BlogList() {
    let [blogs,setBlogs]=useState([])
    const db = getDatabase(app);
    let getMyBlog=()=>{
        const blogRef=ref(db,"blogs")
        onValue(blogRef,(data)=>{
              let allBlogs=data.val()
              let myBlogs=[]
              for(let key in allBlogs){
                myBlogs.push(allBlogs[key])
              }
              setBlogs(myBlogs)
             
        })

    }

    useEffect(()=>{
        getMyBlog()
    },[])


    let obj={
        1735141884555:{ heading: "My First Blog", desciption: "This is my first blog" },
        1735311980396:{ heading: "My Second Blog", desciption: "This is my second blog" },
    }

    for(let key in obj){
        console.log(obj[key]) //obj[1735141884555]
        //1735141884555
        //1735311980396      obj[1735311980396]
    }

    // console.log(obj['1735311980396'])
    return (
        <div>
            <div className='max-w-[1320px] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-5 my-[50px]'>
              
                {
                blogs.map((blog,index)=>{  
                    return(
                        <div key={index} className='bg-white p-5 shadow-lg rounded-lg'>
                            <h1 className='text-xl font-bold'>{blog.heading}</h1>
                            <p className='text-sm'>{blog.desciption}</p>
                        </div>
                    )
                })
                }
              
              </div>
        </div>
    )
}
