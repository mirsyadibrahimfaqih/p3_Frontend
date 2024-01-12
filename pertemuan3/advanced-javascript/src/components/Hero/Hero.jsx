import React from 'react';

const Hero = async() => {

const fetchData = async () => {
    const response = await fetch("https://equran.id/api/v2/surat")
    const data = await response.json()
    return data
}

const { data } = fetchData()
    return (
        <div>
            {
                data.map((data))=>{
                    <h2>{data.nama}</h2>
                }
            }
            
        </div>
    );
}

export default Hero;
