import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [searchText, setSearchText] = useState('all')
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/${searchText}`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [searchText])
    const searchCountry = (e) => {
        if (e.target.value) {
            setSearchText('name/' + e.target.value);
        }
    }
    const searchButton = () => {
        searchCountry()
    }

    return (
        <div>
            <h1 className='text-5xl my-5 text-center'>World All Country list</h1>
            <div className='flex justify-center'>
                <div>
                    <input
                        type="text"
                        onChange={searchCountry}
                        className='p-2 rounded-t rounded-l rounded'
                    />
                    <button className='p-2 bg-indigo-500 rounded-r rounded-b' onClick={searchButton}>Search</button>
                </div>
            </div>
            <h2 className='text-center text-xl my-3'>Total Countries: {countries.length}</h2>
            <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4'>
                {
                    Array.isArray(countries) ? countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                    />) : ''
                }
            </div>
        </div>
    );
};

export default Countries;