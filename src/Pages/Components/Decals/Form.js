import React, {useState} from "react"
import Filter from "./FilterItems"

export default function Form () {
    const [text, setText] = useState('Something')

    function updateText({target}) {
        setText(target.value)
    }
    return (
        <div>
            <input type="text" name="filterInput" value={text} onChange={updateText} placeholder="Enter Name"/>
            <Filter filter={text} />
        </div>
    )
}