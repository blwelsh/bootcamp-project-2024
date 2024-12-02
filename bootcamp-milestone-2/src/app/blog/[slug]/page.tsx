import React from "react";
import Image from "next/image";
import {BlogObject} from "@/database/blogSchema";



type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {

    try {
        const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
            cache: "no-store",
        })


        // Check if the get request was successful
        if (!res.ok) {
            throw new Error("Failed to fetch blog!");
        }

        return res.json();
    } catch (err: unknown) {
        console.log(`error: ${err}`);
        return null;
    }

}

export default async function Blog({ params: {slug} }: Props) {

    const blog: BlogObject = await getBlog(slug);



    return (
        <main>
            <h1 className="page-title">{blog.title}</h1>

            <div className="blog-container">
                <h2>{new Date(blog.date).toDateString()}</h2>
                <Image src={blog.image} alt={blog.imageAlt} width="504" height="378"></Image>
                                

            </div>

            <div className="blog-content">
                <p>
                    {blog.content}
                </p>


            </div>


        </main>
    );



}