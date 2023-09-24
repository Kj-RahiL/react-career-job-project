import { useEffect, useState } from "react";
import List from "../List/List";


const JobsCatagory = () => {
    const [lists, setLists] = useState([])

    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data=> setLists(data))
    },[])
    return (
        <div>
            <h2 className=" text-5xl font-semibold text-center">Job Category List</h2>
            <p className=" text-base font-medium text-center py-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex">
                {
                    lists.map(list=> <List key={list.id} list={list}></List>)
                }
            </div>
        </div>
    );
};

export default JobsCatagory;