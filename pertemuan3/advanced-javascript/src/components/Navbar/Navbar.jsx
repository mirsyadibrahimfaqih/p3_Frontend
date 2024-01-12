import React from 'react';

const Navbar = () => {

    // destructing object
    const ilman = {
        skill_1: {
            name: "Destroyer",
            attack: 50,
            speed: 5,
        },
        skill_2: {
            name: "Freeze",
            attack: 80,
            speed: 2
        },
        skill_ulti: {
            name: "Earthquake",
            attack: 150,
            speed: 2
        }
    }
    const { skill_1, skill_2, skill_ulti } = ilman;

    // destructing array
    const kota = ["Bandung", "Semarang", "Surabaya"];

    // manual method
    const barat = kota[0]
    const tengah = kota[1]
    const timur = kota[2]

    // destruct method
    const [ Barat, Tengah, Timur ] = kota;
    

    return (
        <div>
            <h3>Destructing</h3>
        </div>
    );
}

export default Navbar;