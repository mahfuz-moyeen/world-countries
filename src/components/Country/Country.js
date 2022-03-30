import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
    const { flags, name, capital } = country
    let navigate = useNavigate();
    const handleDetails = () => {
        navigate(`${name.common}`)
    }
    return (
        <div className='flex justify-between p-3 items-center rounded-lg shadow-xl w-3/4 mx-auto bg-white cursor-pointer hover:bg-indigo-50' onClick={handleDetails}>
            <div className='w-1/3'>
                <img src={flags.png} alt="" />
            </div>
            <div className='text-right'>
                <h1 className='text-xl font-semibold'>{name.common}</h1>
                <h2 className=' text-lg text-gray-500'>{capital}</h2>
            </div>
        </div>
    );
};

export default Country;