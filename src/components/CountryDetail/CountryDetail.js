import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details/Details';

const CountryDetail = () => {
    const { countryName } = useParams()
    const [country, setCountry] = useState([])
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [countryName])
   
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold my-4'>{countryName}</h1>
            {
                country.map(item=> <Details 
                    key={item.cca3}
                    item={item}
                />)
            }
        </div>
    );
};

export default CountryDetail;