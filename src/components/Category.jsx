import React, { useState } from 'react';

export default function Category({ onchangeCategory }) {
    const [category, setCategory] = useState('');

    const choseCategory = (e) => {
        setCategory(e.target.value);
        onchangeCategory(e.target.value);
    }

    return (
        <div className='up'>
            <b><label htmlFor="Category">Category</label></b><br />
            <input type="radio" name="radios_1" value="" checked={category === ''} onChange={choseCategory} />All <br />
            <input type="radio" name="radios_1" value="beauty" checked={category === 'beauty'} onChange={choseCategory} />beauty <br />
            <input type="radio" name="radios_1" value="fragrances" checked={category === 'fragrances'} onChange={choseCategory} />fragrances <br />
            <input type="radio" name="radios_1" value="furniture" checked={category === 'furniture'} onChange={choseCategory} />furniture <br />
            <input type="radio" name="radios_1" value="groceries" checked={category === 'groceries'} onChange={choseCategory} />groceries <br />
        </div>
    );
}
