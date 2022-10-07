import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UniversityDetails = () => {
    const [university, setUniversity] = useState();
    const params = useParams("name");
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    console.log(params.name)
    useEffect(() => {
        fetch("http://universities.hipolabs.com/search?name="+ params.name)
        .then(res => res.json())
        .then(data => {
            setUniversity(data[0]);
            setLoaded(true);
        })
    }, [params.name])

    const goBack = () => {
        navigate("/")
    }

    return(
        <div>
            {
                (loaded && university) ?
                    <div>
                        <div>
                            <div>
                                <img src={"https://logo.clearbit.com/" + university.domains} alt=""/>
                            </div>
                            <div>
                                <h2>{university.name}</h2>
                                <p>Country: {university.country}</p>
                                <p>Web Pages: {university.web_pages}</p>
                                <p>Domains: {university.domains}</p>
                            </div>
                        </div>
                        <button onClick={goBack}>Назад</button>
                    </div>

                    : <h3>...Loading</h3>
            }
        </div>
    )
}

export default UniversityDetails;