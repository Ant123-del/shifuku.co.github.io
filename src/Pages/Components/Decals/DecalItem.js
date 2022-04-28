import React, {useState} from "react";
//import PropTypes from 'prop-types'
export default function DecalItem (props) {
    const [clicked, setClicked] = useState(false)

    const imgSrc = props.src;
    const name = props.name;
    const description = props.description;
    console.log(imgSrc)
    function displayText() {
        setClicked(prev => !prev)
    }
    function HoverOut() {
        //setClicked(false)
    }
    let displayDescription = clicked ? 'block' : 'none';
    console.log(displayDescription)
    return (
        <div className="DecalItem" onMouseOut={HoverOut} onClick={displayText}>
            <p className="DecalDescription" style={{display: displayDescription, overflowY: 'scroll', width: 320}}>
                    {description}
                </p>
            <img className="DecalImg" src={imgSrc} />
            <div className="DecalInfo">
                <h3 className="DecalName">
                    {name}
                </h3>
            </div>
        </div>
    )
}

// DecalItem.propType = {
//     src: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired
// }