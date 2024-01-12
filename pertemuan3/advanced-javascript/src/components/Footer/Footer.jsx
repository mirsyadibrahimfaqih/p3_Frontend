import React from 'react';

const Footer = () => {
    const data_kip = [ 'data_1', 'data_2']

    // iterasi/iterate (perulangan)
    data_kip.forEach(
        function(data){
            console.log(`Data KIP: ${data}`);
        }
    )

    // map/reduce (transform/perubahan)
    const data_kip_baru = data_kip.map(
        function(data){
            console.log(`Data KIP Map/Reduce: ${data}`);
        }
    )


    // array objek mhs
    const mhs = [
        {
            nama: "Arya",
            umur: 14
        },
        {
            nama: "Mahmud",
            umur: 15
        },
        {
            nama: "Abil",
            umur: 11
        }
    ];

    // find = mengembalikan true/false
    const findMhs = mhs.find(
        function(mhs){
            return mhs.umur > 13
        }
    )

    // filter = mengembalikan data
    const filterMhs = mhs.filter(
        function(mhs){
            return mhs.umur > 12
        }
    )

    console.log(findMhs);
    console.log(filterMhs);


    return (
        <div>
            
        </div>
    );
}

export default Footer;