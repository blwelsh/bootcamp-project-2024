import React from "react";

export default function Contact() {
    return(
        <main>
            <h1 className="page-title">Contact</h1>

            <div className="contact-form">
                <form id="contact-form">
                    <ul className="form-list">
                        <li><input type="text" id="name" placeholder="Name" required></input></li>
                        <li><input type="email" id="email" placeholder="Email" required></input></li>
                        <li><textarea defaultValue="Message:"></textarea></li>
                        <li><input className="submit" type="submit" required></input></li>
                    
                    </ul>
                </form>

            </div>
        </main>

    );
}