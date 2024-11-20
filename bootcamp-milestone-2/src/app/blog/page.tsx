import React from "react";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";


async function getBlogs() {
    await connectDB();

    try {
        const blogs = await BlogModel.find().sort({date: -1}).orFail();
        return blogs;
    } catch (err) {
        console.log(err);
        return null
    }

}



export default async function Blog(){

    const blogList = await getBlogs();


    return( 
        <main>
            <h1 className="page-title">Blog</h1>
            <div id="blog-container">
               {blogList.map(blog => 
                <BlogPreview 
                title={blog.title}
                slug={blog.slug}
                date={blog.date}
                description={blog.description}
                content={blog.content}
                image={blog.image}
                imageAlt={blog.imageAlt}
                {...blog} key={blog.title} />
               )}
            </div> 
        </main>
    );

}