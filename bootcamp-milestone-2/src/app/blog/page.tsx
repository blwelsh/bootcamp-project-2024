import React from "react";
import blogs from '@/app/blogData';
import BlogPreview from "@/components/blogPreview";

export default function Blog(){
    
    return( 
        <main>
            <h1 className="page-title">Blog</h1>
            <div id="blog-container">
               {blogs.map(blog => 
                <BlogPreview {...blog} key={blog.title} />
               )}
            </div> 
        </main>
    );

}