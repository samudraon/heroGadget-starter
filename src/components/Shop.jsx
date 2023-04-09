import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDB';

const Shop = () => {
    const productsData = useLoaderData();

    // card button handler
    const handleAddToCart = id => {
        addToDb(id)
    }

    return (
        <div className='product-container'>
            {
                productsData.map(product => <ProductCard
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></ProductCard>)
            }
        </div>
    );
};

export default Shop;