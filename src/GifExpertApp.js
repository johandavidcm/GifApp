import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Naruto', 'Drake Bell'];

    const [categories, setCategories] = useState(['Barry Allen'])

    // const handleAdd = () => {
    //     setCategories(['Flash', ...categories]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories={ setCategories }
            />
            <hr></hr>
            {/* <button onClick= { handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map( category => {
                        return <GifGrid
                                    key = {category} 
                                    category = { category }
                                />;
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;