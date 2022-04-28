import React, {useState} from "react"
import Filter from "./FilterItems"

export default function Form () {
    const [text, setText] = useState('')

    function updateText({target}) {
        setText(target.value)
    }
    return (
        <div>
            <div className="filterInput">
                <div className="placeholderDiv"></div>
                <div>
                    <label htmlFor="filterInput">filterInput:</label>
                    <input calssName="Input" type="text" name="filterInput" value={text} onChange={updateText} placeholder="Enter Name" id="filterInput"/>
                </div>
                
            </div>
            
            <Filter filter={text} />
        </div>
    )
}