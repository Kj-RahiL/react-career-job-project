import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oopss!!</h2>
            <button className="btn"><Link to='/'>Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;