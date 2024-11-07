import React from 'react';
import Image from "next/image";
import { Blog } from "@/app/blogData";

export default function BlogPreview(props: Blog) {
    return (
        <div>
            <h2> {props.title} </h2>
            <div>
                <Image src={props.image} alt={props.imageAlt} width={500} height={500}></Image>
                <p>{props.description}</p>
                <p>{props.date}</p>
            </div>
        </div>


    );
}