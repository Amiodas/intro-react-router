import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleGoToHome = () => {
        navigate('/')
    }
    return (
        <div>
            <h2>404 Not Found!!!</h2>
            <button onClick={handleGoToHome}>Go to Home</button>
        </div>
    );
};

export default ErrorPage;