import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <nav className={style.navbar}>
                <h1 className={style.logo}>
                    <Link href="/">
                        Brady Welsh
                    </Link>
                </h1>
                <ul className={style.navlist}>
                    <li><Link href="index.html">Home</Link></li>
                    <li><Link href="blog.html">Blog</Link></li>
                    <li><Link href="contact.html">Contact</Link></li>
                    <li><Link href="portfolio.html">Portfolio</Link></li>
                    <li><Link href="resume.html">Resume</Link></li>
                </ul>
            </nav>
        </header>

    );
}