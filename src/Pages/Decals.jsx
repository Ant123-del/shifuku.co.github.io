import React from "react";
import Header from "./Components/Header";
import SecondaryNavigation from "./Components/Decals/SecondaryNav";
import Form from "./Components/Decals/Form";
import '../style/Header.css'
import '../style/SecondaryNav.css'
import '../style/Decal.css'
export default function Decals() {
    return (
        <div>
            <Header />
            <h1>
                DECALS
            </h1>
            <SecondaryNavigation />
            <Form />
        </div>
    )
}