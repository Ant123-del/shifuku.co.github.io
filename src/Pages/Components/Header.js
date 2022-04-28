import React from "react";

function Logo() {
    return <img className="Logo" src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" />
}
function Nav() {
    return (
        <nav>
            <a className="navLink" href="#">Home</a>
            <a className="navLink" href="#">Decals</a>
            <a className="navLink" href="#">About</a>
        </nav>
    )
}

export default function Header() {
    return (
        <header>
            <Logo />
            <Nav />
        </header>
    )
}