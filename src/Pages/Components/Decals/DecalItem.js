import React from "react";
//import PropTypes from 'prop-types'
export default function DecalItem (props) {
    const imgSrc = props.src;
    const name = props.name;
    const description = props.description;
    console.log(imgSrc)
    return (
        <div className="DecalItem">
            <img className="DecalImg" src={imgSrc} />
            <div className="DecalInfo">
                <h3 className="DecalName">
                    {name}
                </h3>
                <p className="DecalDescription">
                    {description}
                </p>
            </div>
        </div>
    )
}

// DecalItem.propType = {
//     src: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired
// }