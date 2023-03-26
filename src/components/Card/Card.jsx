import React, { useState } from 'react';
import { addToLocacl, removeFromLocal } from '../../utilities/fakeDB';

const image = [
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300/?blur=2',
    'https://picsum.photos/200/300'
]

// const i = Math.round(Math.random() * 2);
// console.log(image[i]);

const Card = (props) => {
    // console.log(props);
    const { name, price, email, isActive, picture, _id } = props.data;
    const handelId = (id) => {
        console.log(id);
    }

    return (
        <>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img src={image[Math.round(Math.random() * 3)]} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <p>{email}</p>
                    <div className="flex justify-between">
                        <button onClick={() => addToLocacl(_id)} className="btn btn-primary">Add</button>
                        <button onClick={() => removeFromLocal(_id)} className="btn btn-warning">Remove</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;