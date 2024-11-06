import React from "react";
import Image from 'next/image'


export default function Home() {
  return (
    <main>
            <h1 className="page-title">Brady Welsh</h1>
            <div className="about">
                <div className="about-image">
                    <Image src="/brady-pic.JPG" alt="An image of a rocky beach at sunset" width="504" height="378"></Image>
                </div>
                <div className="about-text">
                    <p>Hello! My name is <strong>Brady Welsh</strong> <em>(he/him)</em> 
                        and I am a <em>second year</em> <strong>Computer Science</strong> student.</p>
                    <p>A few of my hobbies include playing piano, tennis, hiking, and traveling.</p>
                </div>
            </div>
    </main>
  );
}
