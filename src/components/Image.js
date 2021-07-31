import React from 'react'
import "../css/Image.css"
import { Avatar } from "@material-ui/core"

function Image({ data }) {

    return (
        <div className="image" key={data.id}>
            <img src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`} alt="" className="image__img" />

            <div className="image__footer">
                <Avatar src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`}>{data.title[0]}</Avatar>
                <h4 className="image__footerLeftName">
                    {data.title ? data.title : "No Title"}
                </h4>
            </div>
        </div>
    )
}

export default Image

