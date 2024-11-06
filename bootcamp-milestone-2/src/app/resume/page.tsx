import React from "react";

export default function Resume(){
    return (<main>
            <h1 className="page-title">Resume</h1>
            <div className="resume">
                <section className="section">
                    <h2 className="section-title">Education</h2>
                    <div className="entry">
                        <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
                        <p className="entry-info">California Polytechnic State University, San Luis Obispo - San Luis Obispo, California | Expected Graduation: June 2027</p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section-title">Coursework</h2>
                    <ul className="course-list">
                        <li>Data Structures</li>
                        <li>Project-Based Object Oriented Programming and Design</li>
                        <li>Intro to Computer Organization</li>
                        <li>Systems Programming</li>
                        <li>Discrete Structures</li>
                        <li>Design and Analysis of Algorithms (In Progress)</li>
                        <li>Software Engineering 1 (In Progress)</li>
                    </ul>
                </section>
                <section className="section">
                    <h2 className="section-title">Skills</h2>
                    <ul className="skill-list">
                        <li>HTML</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>Javascript</li>
                    </ul>
                </section>
                <section className="section">
                    <h2 className="section-title">Projects</h2>
                    <div className="entry">
                        <h3 className="entry-title">Personal Website</h3>
                        <p className="entry-info">Designed a personal website for myself using HTML and CSS!</p>
                        <p className="entry-description">Learned valuable principles of HTML, CSS, Git, and GitHub</p>
                    </div>
                </section>
                <section className="section">
                    <h2 className="section-title">Experience</h2>
                    <div className="entry">
                        <h3 className="entry-title"></h3>
                        <p className="entry-info"></p>
                        <p className="entry-description"></p>
                    </div>
                </section>
            </div>
        </main>);


}