import React from "react";
import Footer from "./Footer";

function AcountLayout(props) {
    return (
        <>
            {props.children}
            <Footer />
        </>
    )
}
export default AcountLayout;