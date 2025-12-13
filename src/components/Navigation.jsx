import React from "react";
import styles from "../styles/Navigation.module.css";

export default function NavigationBar() {
    return (
        <div className={`navbar navbar-expand-md ${styles.navbar}`} style={{ width: "100%" }}>
            <div className="container" style={{ padding: "0px" }}>
                <a href="#landing" style={{
                    fontSize: "40px", fontFamily: "Iceland", color: "#F5F5F5", padding: "0px", margin: "0px", textDecoration: "none",
                    textShadow: `0 0 5px #F5F5F5,
                                0 0 5px #5CCF5C,
                                0 0 5px #5CCF5C,
                                0 0 5px #5CCF5C,
                                0 0 5px #5CCF5C`
                }}>/isTian </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars" style={{ color: "#FFC107", fontSize: "25px" }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}