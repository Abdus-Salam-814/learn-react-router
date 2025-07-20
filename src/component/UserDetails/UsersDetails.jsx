import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UsersDetails = () => {
    const userDet = useLoaderData();
    const navigate = useNavigate();
    const {name, username, email, phone} = userDet;
    
    function goBack(){
        navigate(-1)
    }

    return (
        <div className='bg-slate-400 rounded-2xl mt-7 p-6 text-white'>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={goBack}  className='btn mt-3 btn-primary '>Go Back</button>
        </div>
    );
};

export default UsersDetails;