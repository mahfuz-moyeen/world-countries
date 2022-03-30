import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h1 className='text-5xl my-5 text-center'>World All Country list</h1>
            <h2 className='text-center text-xl my-3'>Total Countries: {countries.length}</h2>
            <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4'>
                {
                    countries.map(country=> <Country
                    key={country.cca3}
                    country={country}
                    />)
                }
            </div>
        </div>
    );
};

export default Countries;