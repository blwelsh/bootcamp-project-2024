import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    return (
        <main>
            <h1 className="page-title">Portfolio</h1>
            <div className="project">
                <Link href="/">
                    <Image src="/brady-pic.JPG" alt="An image of a rocky beach at sunset" width="504" height="378"></Image>
                </Link>

                <div className="project-details">
                    <p className="project-name">Brady Welsh - Personal Website</p>
                    <p className="project-description">A personal website!!</p>
                    <Link href="/">Learn more!!!</Link>
                </div>


            </div>


        </main>
    );
}