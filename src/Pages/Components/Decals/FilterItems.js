import React from 'react'
import RenderItems from './RenderDecalItem'


const myDecals = [
    {
        src: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
        name: "Something",
        description: "SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHIGN SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING"

    },
    {
        src: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
        name: "Something",
        description: "SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHIGN SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING"

    },
    {
        src: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
        name: "Something",
        description: "SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHIGN SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING"

    },
    {
        src: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
        name: "Something",
        description: "SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHIGN SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING"

    },
    {
        src: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
        name: "Something",
        description: "SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHIGN SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING"

    },
    {
        src: "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png",
        name: "Something else",
        description: "SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHIGN SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING SOMETHING"

    }
]
export default function Filter(props) {
    const filter = props.filter
    const newItems = myDecals.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase())
    })
    return <RenderItems items={newItems}/>
}