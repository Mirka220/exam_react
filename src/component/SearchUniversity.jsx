import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import UniversityItem from "./UniversityItem";

const SearchUniversity = () => {
    const params = useParams("query");
    const [universities, setUniversities] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(false);
        fetch("http://universities.hipolabs.com/search?name=" + params.query)
            .then(res => res.json())
            .then(data => {
                setUniversities(data);
                setLoaded(true);
            })
    }, [params.query]);
    return (
        <div>
            {
                !loaded ? <h3>Loading...</h3> :
                    <div className="uni-list">
                        {
                            universities.map((uni) =>
                            <UniversityItem key={uni.name} uni={uni}/>)
                        }
                    </div>
            }
        </div>
    );
}

export default SearchUniversity