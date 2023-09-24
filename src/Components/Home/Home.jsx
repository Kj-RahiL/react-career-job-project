
import FeatureJob from "../FeatureJob/FeatureJob";
import JobsCatagory from "../JobsCatagory/JobsCatagory";

const Home = () => {
    return (
        <div>
            <div className=" h-[50vh] "></div>

            <JobsCatagory></JobsCatagory>
            <FeatureJob></FeatureJob>
            
        </div>
    );
};

export default Home;