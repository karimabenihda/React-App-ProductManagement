import React, { useState, useEffect } from 'react';

function Affichage({ category, price }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesCategory = category === '' || product.category === category;
     
        const [minPrice, maxPrice] = price ? price.split('-').map(Number) : [0, Infinity];
        const matchesPrice = !price || (
            product.price >= minPrice && product.price <= maxPrice
        );
        
        return matchesCategory && matchesPrice;
    });

    return (
        <div>
            <h2>Recommendation</h2>
            <div className="card-container">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div className="card" key={product.id} style={{ width: '200px' }}>
                            <img className="card-img-top" src={product.images[0]} alt={product.title} />
                            <div className="card-body">
                                <h3 className="card-title">{product.title}</h3>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text" id='price'>${product.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='message'>Not Found 🙁!</p>
                )}
            </div>
        </div>
    );
}

export default Affichage;
