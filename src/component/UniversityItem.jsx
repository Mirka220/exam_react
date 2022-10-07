import React from "react";
import {Link} from "react-router-dom"

const UniversityItem = ({uni}) => {
    const img_link = "https://logo.clearbit.com/" + uni.domains;
    return (
        <Link to={`/unis/${uni.name}`} >
            <div className="uni-item">
                <img src={img_link} alt=""/>
                <h3>{uni.name}</h3>
            </div>
        </Link>
    );
}

export default UniversityItem;