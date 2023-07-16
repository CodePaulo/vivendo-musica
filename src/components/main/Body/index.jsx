import React from "react";
import "./style.css";
import Footer from "../Footer"

export default props =>
    <section className="body">
        <div className="contain">
            {props.children}
        </div>
        <Footer />
    </section>