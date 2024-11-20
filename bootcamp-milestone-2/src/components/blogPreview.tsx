import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/database/blogSchema";

export default function BlogPreview(props: Blog) {

    // console.log(props);

    return (
        <div>
            <Link href={"/blogs/" + props.slug}><h2> {props.title} </h2></Link>
            <div>
                <Image src={props.image} alt={props.imageAlt} width={500} height={500}></Image>
                <p>{props.description}</p>
                <p>{props.date.toDateString()}</p>
            </div>
        </div>


    );
}