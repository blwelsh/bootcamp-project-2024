import React from "react";
import Image from "next/image";

export default function MyFirstBlogPost(){
    return (
        <main>
            <h1 className="page-title">My First Blog Post</h1>

            <div className="blog-container">
                <h2>10/15/2024</h2>
                <Image src="/brady-pic.JPG" alt="a pic of brady" width="504" height="378"></Image>
                                

            </div>

            <div className="blog-content">
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Maximus est ac auctor consequat a. Mattis consectetur proin mattis luctus nunc erat facilisis. Himenaeos sapien molestie ex massa platea consequat condimentum parturient. Dui nisi bibendum, sagittis leo torquent ex. Neque lectus lacinia sagittis morbi quis nec purus cubilia. Venenatis volutpat lectus ad vestibulum laoreet eget. Luctus consectetur molestie habitant libero velit litora ultrices cubilia. Enim placerat phasellus potenti posuere rutrum gravida id ex. Pretium augue cras porttitor bibendum adipiscing conubia primis.
                </p>


            </div>


        </main>
    );
}
