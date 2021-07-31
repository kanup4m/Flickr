import React from 'react';
import '../css/Error.css'
import { Link } from "react-router-dom"

const Error = () => {

    return (
        <div className="error">
            <h1 >No result found. Please search with a valid query</h1>
            <br />
            <Link to="/">
                <div className="button_slide slide_diagonal" > Go to Homepage </div>

            </Link>
        </div >
    );
}

export default Error;