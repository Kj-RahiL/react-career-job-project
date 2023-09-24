import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJob = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4)

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setJobs(data));
    },[])
    
    return (
        <div className="">
            <div >
            <h2 className=" text-5xl font-semibold text-center ">Featured Jobs:{jobs.length}</h2>
            <p className=" text-base font-medium text-center py-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    jobs.slice(0, dataLength).map(job=> <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`flex justify-center items-center p-4  ${dataLength === jobs.length ? 'hidden' : ''}`}>
                <button
                onClick={()=> setDataLength(jobs.length)}
                 className="btn btn-primary">See All</button>
            </div>
        </div>
    );
};

export default FeatureJob;