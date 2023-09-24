

const Job = ({ job }) => {
    const style = {
        background: 'var(--Linear, linear-gradient(90deg, #7E90FE 0%, #9873FF 100%))',
        color: 'white',
        fontWeight: '600px',
        fontSize: '1.2rem'
    }

    const { logo,job_title, company_name, remote_or_onsite,job_type,location,salary } = job
    return (
        <div className="relative flex md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-8 mx-auto "> 
            <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={logo}
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <div className="mb-2">
                    <h2 className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    {job_title}
                    </h2>
                    
                </div>
                <h2>{company_name}</h2>
                <div className="flex">
                    <button className="btn mr-2">{remote_or_onsite}</button>
                    <button className="btn">{job_type}</button>
                </div>
                <div className="flex justify-between">
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
            </div>
            <div className="p-6 pt-0">
                <button style={style} className="btn normal-case"> View Details
                </button>
            </div>
        </div>
    );
};

export default Job;