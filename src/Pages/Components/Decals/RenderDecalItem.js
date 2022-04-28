import React from 'react'
import DecalItem from './DecalItem'

export default function RenderItems(props) {
    const Items = props.items
    //items is a list that contains strings
    return (
        <div className='decals'>
            {Items.map(item => {
                let Dsrc = item.src
                let Dname = item.name
                let Ddescription = item.description
                return <DecalItem src={Dsrc} name={Dname} description={Ddescription}/>
            })}
        </div>
    )
}