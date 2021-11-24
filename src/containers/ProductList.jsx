import React from 'react';
import ProductCard from '@components/ProductCard';
import useGetProducts from '../hooks/useGetProduct';


const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=110';

const ProductList = () => {
    const products = useGetProducts(API);

    return (
        <div className='cards-container'>
            { products.map( product => (
                <ProductCard product={ product } key={ product.id } />
            ))}
        </div>
    );
};

export default ProductList;