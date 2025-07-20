import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    function goBackHome(){
        navigate('/')
    }
    return (
        <div className="text-5xl">
            <h1>OppS!</h1>
            <p className="text-red-900">Page Note Found</p>
            <button onClick={goBackHome} className="btn btn-warning">Go To Home</button>
        </div>
    );
};

export default ErrorPage;