import React, { useEffect, useState } from "react";
import UniversityItem from "./UniversityItem";

const UniversityList = () => {
    const [universities,setUniversities] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        fetch("http://universities.hipolabs.com/search")
            .then(res => res.json())
            .then(data =>{
                setUniversities(data);
                setLoaded(true);
            })
    },[]);

    return(
        <div>
            {
                !loaded ? <h3>Loading</h3> :
                <div>
                    <h1>List Universities</h1>
                    <div className="uni-list">
                            {
                                universities.slice(1, 100).map((uni) =>
                                <UniversityItem key={uni.name} uni={uni}/>
                                )
                            }
                    </div>
                </div>
            }
        </div>

    );
}

export default UniversityList;