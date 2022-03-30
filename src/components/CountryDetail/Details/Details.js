import React from 'react';

const Details = ({ item }) => {
    const { name, status, currencies, capital, region, languages, borders, area, maps, population, fifa, flags } = item
    return (
        <div>
            <div className='w-11/12 mx-auto flex flex-col md:flex-row bg-indigo-400 p-3 rounded-lg justify-between'>
                <div className='order-2 md:order-1'>
                    <h2>official: {name.official}</h2>
                    <h2>status: {status}</h2>
                    <h2>fifa: {fifa}</h2>
                    <h2>capital: {capital}</h2>
                    <h2>region: {region}</h2>
                    <h2>languages: {languages?.aym}, {languages?.que}, {languages?.spa}</h2>
                    <h2>borders: {borders}</h2>
                    <h2>area: {area}</h2>
                    <h2>population: {population}</h2>
                </div>
                <div className='order-1 md:order-2'>
                    <img src={flags.png} alt={name.common} />
                </div>
            </div>
            <div className='w-11/12 mx-auto my-4 rounded-lg bg-indigo-400 p-3'>
                <h1>maps: </h1>
                <div>{maps.googleMaps}</div>
            </div>
        </div>
    );
};

export default Details;