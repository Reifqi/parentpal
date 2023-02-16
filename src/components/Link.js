import React from "react";

export default function Link({target, navigate, children}) {
    return(
        <a
        href = {target}
        onClick = {(event) => {
            event.preventDefault();
            navigate(target);
        }}
        >
        {children}
        </a>
    );
}