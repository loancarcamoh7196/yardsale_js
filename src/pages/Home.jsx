import React from 'react';
import '@styles/Home.scss';
import Header from '@components/Header';
import ProductCard from '@components/ProductCard';
import ProductList from '@containers/ProductList';

const Home = () => {
    return (
        <>
            <Header/>
            <section className='cart__container'>
                <>
                    <ProductList />
                
                </>
            </section>
        </>
    );
};

export default Home;